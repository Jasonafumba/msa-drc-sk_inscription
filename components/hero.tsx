import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section
      id="accueil"
      className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 pt-16"
    >
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
          DEVENEZ MEMBRE DE LA MSA-DRC
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
          Rejoignez notre communauté d'étudiants en médecine engagés à améliorer la santé globale en RDC et au niveau international. 
        </p>
        <div className="mt-10">
          <Button asChild size="lg" className="px-8 py-6 text-base">
            <a href="#modules" className="flex items-center gap-2">
              Commencer
              <ArrowDown className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
