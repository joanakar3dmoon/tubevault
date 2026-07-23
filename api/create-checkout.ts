import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-11-20.acacia',
})

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { plan } = req.body

  const prices: Record<string, number> = {
    starter: 900,
    pro: 2900,
    studio: 7900,
  }

  const priceAmount = prices[plan] || 2900

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `TubeVault - Plan ${plan.charAt(0).toUpperCase() + plan.slice(1)}`,
              description: 'Contenido evergreen automatizado para YouTube',
            },
            unit_amount: priceAmount,
            recurring: { interval: 'month' },
          },
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${req.headers.origin}/dashboard?success=true`,
      cancel_url: `${req.headers.origin}/checkout?plan=${plan}&canceled=true`,
    })

    res.json({ url: session.url })
  } catch (err: any) {
    res.status(500).json({ error: err.message })
  }
}