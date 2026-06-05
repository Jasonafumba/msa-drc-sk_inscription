import { Button } from "@/components/ui/button"
import { UserPlus } from "lucide-react"

export function Inscription() {
  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
          Rejoins-nous maintenant
        </h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          Cliquez sur le bouton ci-dessous pour vous inscrire.
          <br /> 
          Nous avons hâte de vous accueillir parmi nous !
        </p>
        <div className="mt-8">
          <Button asChild size="lg" className="px-8 py-6 text-base">
            <a
              href="https://url-shortener.me/MSMB"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <UserPlus className="w-5 h-5" />
              S&apos;inscrire
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
