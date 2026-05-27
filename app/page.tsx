import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Modules } from "@/components/modules"
import { Inscription } from "@/components/inscription"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Modules />
        <Inscription />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
