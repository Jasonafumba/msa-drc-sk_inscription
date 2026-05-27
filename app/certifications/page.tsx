import { Sidebar } from "@/components/sidebar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Search,
  Bell,
  Award,
  Clock,
  CheckCircle,
  ChevronRight,
  Download,
  Calendar,
} from "lucide-react"
import { cn } from "@/lib/utils"

const certifications = [
  {
    id: 1,
    title: "Certification DPC Cardiologie",
    description: "Formation certifiante en cardiologie couvrant l'ECG, l'échographie et la prise en charge des urgences cardiaques.",
    hours: 21,
    modules: 8,
    status: "completed",
    completedDate: "15 Mars 2026",
    validUntil: "15 Mars 2029",
  },
  {
    id: 2,
    title: "Certification Urgences Vitales",
    description: "Protocoles de réanimation, gestion des voies aériennes et prise en charge du choc.",
    hours: 14,
    modules: 5,
    status: "in_progress",
    progress: 60,
  },
  {
    id: 3,
    title: "Certification Échographie FAST",
    description: "Maîtrise de l'échographie d'urgence : FAST, échographie pulmonaire et cardiaque.",
    hours: 10,
    modules: 4,
    status: "in_progress",
    progress: 25,
  },
  {
    id: 4,
    title: "Certification Antibiothérapie",
    description: "Bon usage des antibiotiques, résistances bactériennes et stratégies de prescription.",
    hours: 7,
    modules: 3,
    status: "available",
  },
  {
    id: 5,
    title: "Certification Douleur Chronique",
    description: "Évaluation et prise en charge multidisciplinaire de la douleur chronique.",
    hours: 14,
    modules: 6,
    status: "available",
  },
  {
    id: 6,
    title: "Certification Médecine Palliative",
    description: "Accompagnement en fin de vie, gestion de la douleur et communication avec les familles.",
    hours: 21,
    modules: 7,
    status: "available",
  },
]

export default function CertificationsPage() {
  const completed = certifications.filter((c) => c.status === "completed")
  const inProgress = certifications.filter((c) => c.status === "in_progress")
  const available = certifications.filter((c) => c.status === "available")

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
                placeholder="Rechercher une certification..."
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
            <h1 className="text-3xl font-bold text-foreground">Certifications</h1>
            <p className="text-muted-foreground mt-2">
              Validez vos compétences et obtenez vos certifications DPC
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Card className="bg-card border-border">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-emerald-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{completed.length}</p>
                  <p className="text-sm text-muted-foreground">Obtenues</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-amber-500/20 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-amber-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{inProgress.length}</p>
                  <p className="text-sm text-muted-foreground">En cours</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{available.length}</p>
                  <p className="text-sm text-muted-foreground">Disponibles</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Completed */}
          {completed.length > 0 && (
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-emerald-400" />
                Certifications obtenues
              </h2>
              <div className="grid gap-4">
                {completed.map((cert) => (
                  <CertificationCard key={cert.id} certification={cert} />
                ))}
              </div>
            </section>
          )}

          {/* In Progress */}
          {inProgress.length > 0 && (
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5 text-amber-400" />
                En cours
              </h2>
              <div className="grid gap-4">
                {inProgress.map((cert) => (
                  <CertificationCard key={cert.id} certification={cert} />
                ))}
              </div>
            </section>
          )}

          {/* Available */}
          {available.length > 0 && (
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Disponibles
              </h2>
              <div className="grid gap-4">
                {available.map((cert) => (
                  <CertificationCard key={cert.id} certification={cert} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  )
}

function CertificationCard({
  certification,
}: {
  certification: (typeof certifications)[0]
}) {
  const statusConfig = {
    completed: {
      badge: "Obtenue",
      badgeClass: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
      buttonText: "Télécharger",
      buttonIcon: Download,
    },
    in_progress: {
      badge: "En cours",
      badgeClass: "bg-amber-500/20 text-amber-400 border-amber-500/30",
      buttonText: "Continuer",
      buttonIcon: ChevronRight,
    },
    available: {
      badge: "Disponible",
      badgeClass: "bg-primary/20 text-primary border-primary/30",
      buttonText: "Commencer",
      buttonIcon: ChevronRight,
    },
  }

  const config = statusConfig[certification.status as keyof typeof statusConfig]
  const Icon = config.buttonIcon

  return (
    <Card className="bg-card border-border hover:border-primary/50 transition-colors">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          {/* Icon */}
          <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Award className="h-8 w-8 text-primary" />
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className={cn("text-xs", config.badgeClass)}>
                {config.badge}
              </Badge>
              <span className="text-xs text-muted-foreground">
                {certification.hours}h · {certification.modules} modules
              </span>
            </div>
            <h3 className="font-semibold text-foreground mb-1">
              {certification.title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {certification.description}
            </p>

            {/* Progress */}
            {certification.status === "in_progress" && certification.progress && (
              <div className="mt-3">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-muted-foreground">Progression</span>
                  <span className="text-primary font-medium">{certification.progress}%</span>
                </div>
                <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full"
                    style={{ width: `${certification.progress}%` }}
                  />
                </div>
              </div>
            )}

            {/* Dates for completed */}
            {certification.status === "completed" && (
              <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  Obtenue le {certification.completedDate}
                </span>
                <span>Valide jusqu&apos;au {certification.validUntil}</span>
              </div>
            )}
          </div>

          {/* Action */}
          <Button
            variant={certification.status === "completed" ? "outline" : "default"}
            className={cn(
              "flex-shrink-0",
              certification.status !== "completed" &&
                "bg-primary text-primary-foreground hover:bg-primary/90"
            )}
          >
            {config.buttonText}
            <Icon className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
