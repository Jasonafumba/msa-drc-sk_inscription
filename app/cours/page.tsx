import { Sidebar } from "@/components/sidebar"
import { CourseCard } from "@/components/course-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Bell, Filter, SlidersHorizontal } from "lucide-react"

const allCourses = [
  {
    id: 1,
    title: "Anatomie Cardiovasculaire Avancée",
    description: "Maîtrisez l'anatomie du système cardiovasculaire avec des visualisations 3D interactives et des cas cliniques.",
    instructor: "Dr. Sophie Laurent",
    duration: "12h 30min",
    students: 2847,
    rating: 4.9,
    level: "Avancé" as const,
    category: "Cardiologie",
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
  {
    id: 5,
    title: "Échographie Cardiaque Complète",
    description: "De la théorie à la pratique : maîtrisez l'échocardiographie transthoracique et transœsophagienne.",
    instructor: "Dr. Antoine Petit",
    duration: "15h 00min",
    students: 5234,
    rating: 4.8,
    level: "Intermédiaire" as const,
    category: "Imagerie",
  },
  {
    id: 6,
    title: "Pharmacologie des Antibiotiques",
    description: "Classification, mécanismes d'action, spectre et résistances bactériennes.",
    instructor: "Pr. Marie Lefevre",
    duration: "4h 00min",
    students: 3890,
    rating: 4.6,
    level: "Intermédiaire" as const,
    category: "Pharmacologie",
  },
  {
    id: 7,
    title: "Gestes Techniques en Réanimation",
    description: "Maîtrisez les gestes essentiels : intubation, voies centrales, drainage thoracique.",
    instructor: "Dr. Thomas Bernard",
    duration: "5h 45min",
    students: 2156,
    rating: 4.9,
    level: "Avancé" as const,
    category: "Réanimation",
  },
  {
    id: 8,
    title: "Dermatologie Pratique",
    description: "Reconnaître et diagnostiquer les pathologies cutanées courantes en consultation.",
    instructor: "Dr. Isabelle Roux",
    duration: "3h 15min",
    students: 4102,
    rating: 4.7,
    level: "Débutant" as const,
    category: "Dermatologie",
  },
  {
    id: 9,
    title: "Psychiatrie de Liaison",
    description: "Prise en charge des troubles psychiatriques en milieu hospitalier non spécialisé.",
    instructor: "Dr. François Lemoine",
    duration: "7h 30min",
    students: 1567,
    rating: 4.5,
    level: "Intermédiaire" as const,
    category: "Psychiatrie",
  },
  {
    id: 10,
    title: "Médecine du Sport",
    description: "Traumatologie sportive, certificats d'aptitude et suivi du sportif de haut niveau.",
    instructor: "Dr. Paul Mercier",
    duration: "9h 00min",
    students: 2341,
    rating: 4.6,
    level: "Intermédiaire" as const,
    category: "Médecine du Sport",
  },
  {
    id: 11,
    title: "Gériatrie Pratique",
    description: "Spécificités de la prise en charge du patient âgé : polymédication, chutes, démences.",
    instructor: "Pr. Hélène Durand",
    duration: "8h 15min",
    students: 2890,
    rating: 4.7,
    level: "Intermédiaire" as const,
    category: "Gériatrie",
  },
  {
    id: 12,
    title: "Gynécologie Obstétrique",
    description: "Suivi de grossesse, accouchement normal et pathologique, urgences gynécologiques.",
    instructor: "Dr. Caroline Martin",
    duration: "14h 00min",
    students: 3456,
    rating: 4.8,
    level: "Avancé" as const,
    category: "Gynécologie",
  },
]

const categories = [
  "Tous",
  "Cardiologie",
  "Neurologie",
  "Pédiatrie",
  "Imagerie",
  "Réanimation",
  "Pharmacologie",
]

const levels = ["Tous les niveaux", "Débutant", "Intermédiaire", "Avancé"]

export default function CoursPage() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      
      <main className="lg:pl-64">
        {/* Header */}
        <header className="sticky top-0 z-30 flex items-center justify-between gap-4 px-6 py-4 bg-background/80 backdrop-blur-sm border-b border-border">
          <div className="flex-1 max-w-md ml-12 lg:ml-0">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Rechercher un cours..."
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

        <div className="p-6 space-y-8">
          {/* Page Title */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Catalogue de Cours</h1>
              <p className="text-muted-foreground mt-2">
                {allCourses.length} formations disponibles
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" className="border-border">
                <Filter className="h-4 w-4 mr-2" />
                Filtres
              </Button>
              <Button variant="outline" className="border-border">
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Trier
              </Button>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-3 flex-wrap">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={category === "Tous" ? "default" : "outline"}
                className={
                  category === "Tous"
                    ? "bg-primary text-primary-foreground cursor-pointer"
                    : "cursor-pointer hover:bg-secondary"
                }
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Level Filter */}
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-sm text-muted-foreground">Niveau :</span>
            {levels.map((level) => (
              <Badge
                key={level}
                variant="outline"
                className={
                  level === "Tous les niveaux"
                    ? "bg-secondary cursor-pointer"
                    : "cursor-pointer hover:bg-secondary"
                }
              >
                {level}
              </Badge>
            ))}
          </div>

          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
            {allCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>

          {/* Load More */}
          <div className="flex justify-center pt-8">
            <Button variant="outline" size="lg" className="border-border">
              Charger plus de cours
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
