import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Checkout from './pages/Checkout'
import Login from './pages/Login'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
      <Toaster position="bottom-right" toastOptions={{
        style: { background: '#1a1a1a', color: '#f5f5f5', border: '1px solid #222', borderRadius: 12 }
      }} />
    </>
  )
}