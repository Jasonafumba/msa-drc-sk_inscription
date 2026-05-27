import { Sidebar } from "@/components/sidebar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Search,
  Bell,
  FileText,
  Download,
  ExternalLink,
  BookOpen,
  Stethoscope,
  Pill,
  Calculator,
} from "lucide-react"

const resources = [
  {
    id: 1,
    title: "Guide de prescription des antibiotiques",
    description: "Recommandations actualisées pour la prescription d'antibiotiques en médecine de ville.",
    type: "PDF",
    category: "Pharmacologie",
    size: "2.4 MB",
    icon: Pill,
  },
  {
    id: 2,
    title: "Atlas d'anatomie cardiovasculaire",
    description: "Illustrations haute résolution du système cardiovasculaire avec annotations détaillées.",
    type: "PDF",
    category: "Anatomie",
    size: "15.8 MB",
    icon: Stethoscope,
  },
  {
    id: 3,
    title: "Calculateur de doses pédiatriques",
    description: "Outil interactif pour le calcul des posologies adaptées au poids de l'enfant.",
    type: "Outil",
    category: "Pédiatrie",
    icon: Calculator,
  },
  {
    id: 4,
    title: "Protocoles de réanimation ACLS",
    description: "Algorithmes de prise en charge des arrêts cardiaques selon les recommandations 2025.",
    type: "PDF",
    category: "Urgences",
    size: "1.2 MB",
    icon: FileText,
  },
  {
    id: 5,
    title: "Vidal en ligne",
    description: "Accès à la base de données médicamenteuse complète et actualisée.",
    type: "Lien",
    category: "Pharmacologie",
    icon: ExternalLink,
  },
  {
    id: 6,
    title: "Score de Wells - Embolie pulmonaire",
    description: "Calculateur interactif du score de Wells pour l'évaluation de la probabilité d'EP.",
    type: "Outil",
    category: "Cardiologie",
    icon: Calculator,
  },
  {
    id: 7,
    title: "Guide ECG pratique",
    description: "Manuel complet d'interprétation de l'ECG avec exemples annotés.",
    type: "PDF",
    category: "Cardiologie",
    size: "8.5 MB",
    icon: BookOpen,
  },
  {
    id: 8,
    title: "Fiches de révision - Dermatologie",
    description: "50 fiches synthétiques sur les pathologies dermatologiques les plus fréquentes.",
    type: "PDF",
    category: "Dermatologie",
    size: "4.2 MB",
    icon: FileText,
  },
]

const categories = ["Tous", "Cardiologie", "Pharmacologie", "Urgences", "Pédiatrie", "Anatomie"]

export default function RessourcesPage() {
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
                placeholder="Rechercher une ressource..."
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
          <div>
            <h1 className="text-3xl font-bold text-foreground">Ressources</h1>
            <p className="text-muted-foreground mt-2">
              Documents, outils et références pour votre pratique quotidienne
            </p>
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

          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {resources.map((resource) => {
              const Icon = resource.icon
              return (
                <Card
                  key={resource.id}
                  className="bg-card border-border hover:border-primary/50 transition-colors cursor-pointer group"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline" className="text-xs">
                            {resource.type}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {resource.category}
                          </Badge>
                        </div>
                        <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                          {resource.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {resource.description}
                        </p>
                        {resource.size && (
                          <p className="text-xs text-muted-foreground mt-2">
                            {resource.size}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-border">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full justify-center text-primary hover:text-primary hover:bg-primary/10"
                      >
                        {resource.type === "Lien" ? (
                          <>
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Ouvrir
                          </>
                        ) : resource.type === "Outil" ? (
                          <>
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Accéder
                          </>
                        ) : (
                          <>
                            <Download className="h-4 w-4 mr-2" />
                            Télécharger
                          </>
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </main>
    </div>
  )
}
