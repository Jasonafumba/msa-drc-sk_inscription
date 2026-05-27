import { Sidebar } from "@/components/sidebar"
import { VideoPlayer } from "@/components/video-player"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  Search,
  Bell,
  Filter,
  Clock,
  Play,
  CheckCircle,
  ChevronRight,
} from "lucide-react"
import { Input } from "@/components/ui/input"

const videoModules = [
  {
    id: 1,
    title: "ECG : Interprétation des troubles du rythme",
    videoId: "dQw4w9WgXcQ",
    duration: "45 min",
    instructor: "Dr. Sophie Laurent",
    category: "Cardiologie",
    completed: true,
  },
  {
    id: 2,
    title: "Auscultation pulmonaire : Techniques avancées",
    videoId: "dQw4w9WgXcQ",
    duration: "32 min",
    instructor: "Pr. Marc Dubois",
    category: "Pneumologie",
    completed: true,
  },
  {
    id: 3,
    title: "Examen neurologique complet",
    videoId: "dQw4w9WgXcQ",
    duration: "58 min",
    instructor: "Dr. Claire Moreau",
    category: "Neurologie",
    completed: false,
  },
  {
    id: 4,
    title: "Échographie abdominale : Les bases",
    videoId: "dQw4w9WgXcQ",
    duration: "41 min",
    instructor: "Dr. Antoine Petit",
    category: "Imagerie",
    completed: false,
  },
  {
    id: 5,
    title: "Ponction lombaire : Technique et indications",
    videoId: "dQw4w9WgXcQ",
    duration: "28 min",
    instructor: "Dr. Thomas Bernard",
    category: "Gestes Techniques",
    completed: false,
  },
  {
    id: 6,
    title: "Réanimation cardio-pulmonaire avancée",
    videoId: "dQw4w9WgXcQ",
    duration: "52 min",
    instructor: "Dr. Jean-Pierre Martin",
    category: "Urgences",
    completed: false,
  },
]

const categories = ["Tous", "Cardiologie", "Neurologie", "Pneumologie", "Imagerie", "Urgences", "Gestes Techniques"]

export default function ModulesPage() {
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
                placeholder="Rechercher un module vidéo..."
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
            <h1 className="text-3xl font-bold text-foreground">Modules Vidéos</h1>
            <p className="text-muted-foreground mt-2">
              Formations vidéo interactives avec intégration YouTube
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-3 flex-wrap">
            <Button variant="outline" size="sm" className="border-border">
              <Filter className="h-4 w-4 mr-2" />
              Filtrer
            </Button>
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

          {/* Featured Video */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">En cours de visionnage</h2>
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <VideoPlayer
                  videoId="dQw4w9WgXcQ"
                  title="Examen neurologique complet"
                />
              </div>
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
                    En cours
                  </Badge>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Examen neurologique complet
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Apprenez à réaliser un examen neurologique systématique et complet, incluant l&apos;évaluation des fonctions motrices, sensitives et des réflexes.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>58 minutes</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>Instructeur : Dr. Claire Moreau</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Progression</span>
                      <span className="text-primary font-medium">45%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full w-[45%] bg-primary rounded-full" />
                    </div>
                  </div>
                  <Button className="w-full mt-6 bg-primary text-primary-foreground hover:bg-primary/90">
                    Continuer
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Video List */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Tous les modules</h2>
            <div className="grid gap-4">
              {videoModules.map((video) => (
                <Card
                  key={video.id}
                  className="bg-card border-border hover:border-primary/50 transition-colors cursor-pointer"
                >
                  <CardContent className="p-4 flex items-center gap-4">
                    {/* Thumbnail */}
                    <div className="relative w-40 h-24 rounded-lg overflow-hidden bg-muted flex-shrink-0 group">
                      <img
                        src={`https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg`}
                        alt={video.title}
                        className="w-full h-full object-cover"
                        crossOrigin="anonymous"
                      />
                      <div className="absolute inset-0 bg-background/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Play className="h-8 w-8 text-foreground" />
                      </div>
                      {video.completed && (
                        <div className="absolute top-2 right-2">
                          <CheckCircle className="h-5 w-5 text-emerald-400" />
                        </div>
                      )}
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="outline" className="text-xs">
                          {video.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {video.duration}
                        </span>
                      </div>
                      <h3 className="font-medium text-foreground truncate">
                        {video.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {video.instructor}
                      </p>
                    </div>

                    {/* Action */}
                    <Button
                      variant={video.completed ? "outline" : "default"}
                      size="sm"
                      className={
                        video.completed
                          ? "border-border"
                          : "bg-primary text-primary-foreground hover:bg-primary/90"
                      }
                    >
                      {video.completed ? "Revoir" : "Regarder"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
