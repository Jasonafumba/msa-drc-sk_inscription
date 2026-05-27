import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Users, BookOpen, Award } from "lucide-react"

const stats = [
  { label: "Professionnels formés", value: "12,500+", icon: Users },
  { label: "Modules disponibles", value: "150+", icon: BookOpen },
  { label: "Certifications délivrées", value: "8,200+", icon: Award },
]

export function HeroSection() {
  return (
    <section className="relative pb-16 pt-8">
      {/* Hero content */}
      <div className="max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Nouvelle formation disponible
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight text-balance leading-tight">
          La plateforme de
          <span className="text-primary"> formation médicale</span> de référence
        </h1>

        <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Accédez à des modules vidéo de qualité, conçus par des experts médicaux. 
          Développez vos compétences cliniques et restez à jour avec les dernières avancées.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button size="lg" className="gap-2">
            Commencer maintenant
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="gap-2">
            <Play className="h-4 w-4" />
            Voir la démo
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <stat.icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
