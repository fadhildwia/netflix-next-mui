import Header from '@/components/Pages/Home/Header'
import Feature from '@/components/Pages/Home/Feature'
import FAQ from '@/components/Pages/Home/FAQ'
import Footer from '@/components/Pages/Home/Footer'
import LoginModal from '@/components/Pages/Home/LoginModal'
import { useState } from 'react'

export default function Home() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Header openModal={() => setOpen(true)} />
      <Feature />
      <FAQ />
      <Footer />
      <LoginModal open={open} onClose={() => setOpen(false)} />
    </>
  )
}
