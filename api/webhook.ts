import Stripe from 'stripe'
import { createClient } from '@supabase/supabase-js'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-11-20.acacia',
})

const supabase = createClient(
  process.env.SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_KEY || ''
)

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const sig = req.headers['stripe-signature']
  let event

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET || ''
    )
  } catch (err: any) {
    return res.status(400).json({ error: `Webhook Error: ${err.message}` })
  }

  // Handle checkout.session.completed
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object
    const amount = session.amount_total ? session.amount_total / 100 : 0
    const currency = session.currency || 'eur'
    const customerEmail = session.customer_details?.email || 'unknown'
    const plan = session.metadata?.plan || 'unknown'

    console.log(`Pago recibido: ${amount} ${currency} - Plan: ${plan} - Email: ${customerEmail}`)

    // Register in InverGrow system via Supabase
    const { data: current } = await supabase
      .from('invergrow_state')
      .select('invested_capital')
      .eq('id', 'main')
      .single()

    const newCapital = (current?.invested_capital || 0) + amount
    await supabase
      .from('invergrow_state')
      .update({ invested_capital: newCapital, updated_at: new Date().toISOString() })
      .eq('id', 'main')

    // Register transaction
    await supabase.from('transactions').insert({
      user_id: 'tubevault',
      type: 'subscription',
      amount: amount,
      currency: currency,
      plan: plan,
      customer_email: customerEmail,
      stripe_session_id: session.id,
      created_at: new Date().toISOString(),
    })

    console.log(`Capital invertido actualizado: ${newCapital}`)
  }

  res.json({ received: true })
}

export const config = {
  api: {
    bodyParser: false,
  },
}
