import { Target, Users, BookOpen } from "lucide-react"

export function About() {
  return (
    <section id="apropos" className="py-20 px-4 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            À propos
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Découvrez notre mission et notre engagement pour la formation
            médicale.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="text-center p-6">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Target className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Notre objectif
            </h3>
            <p className="text-sm text-muted-foreground">
              Rendre la formation médicale accessible à tous grâce à des
              contenus vidéo de qualité, structurés et pédagogiques.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Users className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Public cible
            </h3>
            <p className="text-sm text-muted-foreground">
              Étudiants en médecine, internes, professionnels de santé en
              formation continue ou toute personne curieuse.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Mission éducative
            </h3>
            <p className="text-sm text-muted-foreground">
              Accompagner chaque apprenant dans son parcours médical avec des
              ressources claires, fiables et gratuites.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
