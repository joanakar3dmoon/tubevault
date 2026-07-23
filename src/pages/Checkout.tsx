import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import toast from 'react-hot-toast'

const PLANS: Record<string, { name: string; price: number; credits: string }> = {
  starter: { name: 'Starter', price: 9, credits: '5 vídeos/mes' },
  pro: { name: 'Pro', price: 29, credits: '20 vídeos/mes' },
  studio: { name: 'Studio', price: 79, credits: '100 vídeos/mes' },
}

export default function Checkout() {
  const [params] = useSearchParams()
  const planKey = params.get('plan') || 'pro'
  const plan = PLANS[planKey] || PLANS.pro
  const [loading, setLoading] = useState(false)

  const handlePayment = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan: planKey }),
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        toast.error('Error al crear el pago')
      }
    } catch {
      toast.error('Error de conexión')
    }
    setLoading(false)
  }

  return (
    <div className="checkout-page">
      <h2>Completar pago</h2>
      <div style={{ textAlign: 'center', marginBottom: 32 }}>
        <div style={{ fontSize: 14, color: '#888', marginBottom: 4 }}>Plan {plan.name}</div>
        <div style={{ fontSize: 48, fontWeight: 800 }}>${plan.price}<span style={{ fontSize: 16, color: '#888', fontWeight: 400 }}>/mes</span></div>
        <div style={{ fontSize: 14, color: '#888', marginTop: 8 }}>{plan.credits}</div>
      </div>
      <button 
        className="btn btn-primary" 
        style={{ width: '100%', justifyContent: 'center' }} 
        onClick={handlePayment}
        disabled={loading}
      >
        {loading ? 'Procesando...' : `Pagar $${plan.price} con Stripe`}
      </button>
      <p style={{ textAlign: 'center', color: '#666', fontSize: 12, marginTop: 16 }}>
        Pago único mensual. Cancela cuando quieras.
      </p>
    </div>
  )
}