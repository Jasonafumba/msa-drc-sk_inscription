import { Sidebar } from "@/components/sidebar"
import { CourseCard } from "@/components/course-card"
import { VideoPlayer } from "@/components/video-player"
import { StatsCard } from "@/components/stats-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  Clock,
  Award,
  TrendingUp,
  Search,
  Bell,
  ChevronRight,
  Sparkles,
} from "lucide-react"

const featuredCourses = [
  {
    id: 1,
    title: "Anatomie Cardiovasculaire Avancée",
    description: "Maîtrisez l'anatomie du système cardiovasculaire avec des visualisations 3D interactives.",
    instructor: "Dr. Sophie Laurent",
    duration: "12h 30min",
    students: 2847,
    rating: 4.9,
    level: "Avancé" as const,
    category: "Cardiologie",
    progress: 65,
  },
  {
    id: 2,
    title: "Diagnostic Clinique en Médecine Générale",
    description: "Développez vos compétences diagnostiques avec des cas cliniques réels et interactifs.",
    instructor: "Pr. Marc Dubois",
    duration: "8h 45min",
    students: 4521,
    rating: 4.8,
    level: "Intermédiaire" as const,
    category: "Médecine Générale",
    progress: 30,
  },
  {
    id: 3,
    title: "Introduction à la Neurologie",
    description: "Comprenez les bases du système nerveux et les principales pathologies neurologiques.",
    instructor: "Dr. Claire Moreau",
    duration: "6h 15min",
    students: 3156,
    rating: 4.7,
    level: "Débutant" as const,
    category: "Neurologie",
  },
  {
    id: 4,
    title: "Urgences Pédiatriques",
    description: "Protocoles et gestes essentiels pour la prise en charge des urgences pédiatriques.",
    instructor: "Dr. Jean-Pierre Martin",
    duration: "10h 00min",
    students: 1892,
    rating: 4.9,
    level: "Avancé" as const,
    category: "Pédiatrie",
  },
]

const popularModules = [
  {
    id: 1,
    title: "Échographie Cardiaque - Module 1",
    description: "Techniques fondamentales de l'échocardiographie transthoracique.",
    instructor: "Dr. Antoine Petit",
    duration: "2h 30min",
    students: 5234,
    rating: 4.8,
    level: "Intermédiaire" as const,
    category: "Imagerie",
  },
  {
    id: 2,
    title: "Pharmacologie des Antibiotiques",
    description: "Classification, mécanismes d'action et résistances bactériennes.",
    instructor: "Pr. Marie Lefevre",
    duration: "4h 00min",
    students: 3890,
    rating: 4.6,
    level: "Intermédiaire" as const,
    category: "Pharmacologie",
  },
  {
    id: 3,
    title: "Gestes Techniques en Réanimation",
    description: "Maîtrisez les gestes essentiels : intubation, voies centrales, drainage.",
    instructor: "Dr. Thomas Bernard",
    duration: "5h 45min",
    students: 2156,
    rating: 4.9,
    level: "Avancé" as const,
    category: "Réanimation",
  },
  {
    id: 4,
    title: "Dermatologie Pratique",
    description: "Reconnaître et diagnostiquer les pathologies cutanées courantes.",
    instructor: "Dr. Isabelle Roux",
    duration: "3h 15min",
    students: 4102,
    rating: 4.7,
    level: "Débutant" as const,
    category: "Dermatologie",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      
      {/* Main content */}
      <main className="lg:pl-64">
        {/* Header */}
        <header className="sticky top-0 z-30 flex items-center justify-between gap-4 px-6 py-4 bg-background/80 backdrop-blur-sm border-b border-border">
          <div className="flex-1 max-w-md ml-12 lg:ml-0">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Rechercher un cours, module..."
                className="pl-10 bg-secondary border-border"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
            </Button>
            <div className="hidden sm:flex items-center gap-3">
              <div className="text-right">
                <p className="text-sm font-medium text-foreground">Dr. Martin</p>
                <p className="text-xs text-muted-foreground">Premium</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-sm font-semibold text-primary-foreground">DM</span>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Welcome section */}
          <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-background p-8 border border-border">
            <div className="relative z-10 max-w-2xl">
              <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
                <Sparkles className="h-3 w-3 mr-1" />
                Nouveau module disponible
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                Bienvenue, Dr. Martin
              </h1>
              <p className="text-muted-foreground mb-6 text-lg">
                Continuez votre formation médicale. Vous avez 3 cours en cours et 2 certifications à compléter.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Reprendre le cours
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
                <Button size="lg" variant="outline" className="border-border">
                  Explorer les modules
                </Button>
              </div>
            </div>
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-primary/5 rounded-full blur-2xl" />
          </section>

          {/* Stats */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatsCard
              title="Cours complétés"
              value={12}
              description="Sur 18 inscrits"
              icon={BookOpen}
              trend={{ value: 15, isPositive: true }}
            />
            <StatsCard
              title="Heures de formation"
              value="48h"
              description="Ce trimestre"
              icon={Clock}
              trend={{ value: 8, isPositive: true }}
            />
            <StatsCard
              title="Certifications"
              value={4}
              description="2 en cours"
              icon={Award}
            />
            <StatsCard
              title="Score moyen"
              value="87%"
              description="Aux évaluations"
              icon={TrendingUp}
              trend={{ value: 3, isPositive: true }}
            />
          </section>

          {/* Featured video */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Module en vedette</h2>
                <p className="text-muted-foreground">Dernière vidéo de formation</p>
              </div>
              <Button variant="ghost" className="text-primary">
                Voir tout
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
            <VideoPlayer
              videoId="dQw4w9WgXcQ"
              title="ECG : Interprétation des troubles du rythme cardiaque"
            />
          </section>

          {/* Continue learning */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Continuez votre apprentissage</h2>
                <p className="text-muted-foreground">Vos cours en cours</p>
              </div>
              <Button variant="ghost" className="text-primary">
                Voir tout
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {featuredCourses.map((course) => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          </section>

          {/* Popular modules */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Modules populaires</h2>
                <p className="text-muted-foreground">Les plus suivis ce mois</p>
              </div>
              <Button variant="ghost" className="text-primary">
                Voir tout
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {popularModules.map((module) => (
                <CourseCard key={module.id} {...module} />
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="rounded-2xl bg-card border border-border p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Obtenez votre certification DPC
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Validez vos obligations de Développement Professionnel Continu avec nos formations certifiantes reconnues par l&apos;ANDPC.
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Découvrir les formations DPC
            </Button>
          </section>
        </div>

        {/* Footer */}
        <footer className="border-t border-border px-6 py-8 mt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© 2026 MedLearn Pro. Tous droits réservés.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-foreground transition-colors">Conditions d&apos;utilisation</a>
              <a href="#" className="hover:text-foreground transition-colors">Confidentialité</a>
              <a href="#" className="hover:text-foreground transition-colors">Support</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
