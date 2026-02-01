"use client"

import { Header } from "./_components/header"
import { Hero } from "./_components/hero"
import { Services } from "./_components/services"
import { Portfolio } from "./_components/portfolio"
import { Process } from "./_components/process"
import { QuoteCalculator } from "./_components/quote-calculator"
import { Footer } from "./_components/footer"

export default function Bacanodnos3dPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <QuoteCalculator />
        <Services />
        <Portfolio />
        <Process />
      </main>
      <Footer />
    </>
  )
}
