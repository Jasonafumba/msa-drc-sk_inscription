import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { VideoCard } from "@/components/video-card"
import { Button } from "@/components/ui/button"
import { 
  ArrowRight, 
  Target, 
  Users, 
  BookOpen,
  Mail,
  MessageCircle
} from "lucide-react"

const modules = [
  {
    id: 1,
    title: "Module 1 : Introduction",
    description: "Découvrez les bases de la formation médicale et les objectifs pédagogiques.",
    videoId: "jNQXAC9IVRw",
  },
  {
    id: 2,
    title: "Module 2 : Cardiologie",
    description: "Apprenez les fondamentaux de la cardiologie et du système cardiovasculaire.",
    videoId: "dQw4w9WgXcQ",
  },
  {
    id: 3,
    title: "Module 3 : Pneumologie",
    description: "Explorez le système respiratoire et les pathologies pulmonaires courantes.",
    videoId: "9bZkp7q19f0",
  },
  {
    id: 4,
    title: "Module 4 : Pédiatrie",
    description: "Maîtrisez les spécificités de la médecine pédiatrique et du développement de l'enfant.",
    videoId: "kJQP7kiw5Fk",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section id="accueil" className="pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Formation médicale en ligne
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty">
            Apprenez la médecine avec des modules vidéo simples, structurés et accessibles.
          </p>
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            asChild
          >
            <a href="#modules">
              Commencer
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </section>

      {/* Modules Section */}
      <section id="modules" className="py-16 sm:py-24 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Modules de formation
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Accédez à nos vidéos pédagogiques pour approfondir vos connaissances médicales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modules.map((module) => (
              <VideoCard
                key={module.id}
                title={module.title}
                description={module.description}
                videoId={module.videoId}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Inscription */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="bg-card border border-border rounded-2xl p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Rejoins-nous maintenant
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Inscris-toi pour accéder à l&apos;ensemble de nos formations médicales.
            </p>
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              asChild
            >
              <a 
                href="https://forms.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                S&apos;inscrire
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* À propos Section */}
      <section id="a-propos" className="py-16 sm:py-24 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              À propos
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Découvrez notre mission et nos objectifs pédagogiques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Notre objectif
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Proposer des formations médicales de qualité, accessibles à tous, pour améliorer les compétences des professionnels de santé.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Public cible
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Étudiants en médecine, internes, médecins généralistes et spécialistes souhaitant se former continuellement.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Mission éducative
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Rendre l&apos;apprentissage médical simple, structuré et engageant grâce à des contenus vidéo pédagogiques de qualité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Contact
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Une question ? N&apos;hésitez pas à nous contacter.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="bg-card border border-border rounded-xl p-6 space-y-6">
              <a 
                href="mailto:contact@formation-medicale.fr" 
                className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground font-medium">contact@formation-medicale.fr</p>
                </div>
              </a>

              <a 
                href="https://wa.me/33600000000" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">WhatsApp</p>
                  <p className="text-foreground font-medium">+33 6 00 00 00 00</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
