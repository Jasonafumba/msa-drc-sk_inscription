import { VideoPlayer } from "@/components/video-player"
import { Badge } from "@/components/ui/badge"
import { Clock, Eye } from "lucide-react"

const featuredVideos = [
  {
    id: "dQw4w9WgXcQ",
    title: "Introduction à l'ECG : Lecture et Interprétation",
    description: "Apprenez les bases de l'électrocardiographie et identifiez les anomalies courantes.",
    duration: "45 min",
    views: "12.5k",
    category: "Cardiologie",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Examen Clinique Complet du Patient",
    description: "Maîtrisez les techniques d'examen physique systématique.",
    duration: "32 min",
    views: "8.3k",
    category: "Médecine Générale",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Urgences Pédiatriques : Protocoles Essentiels",
    description: "Les gestes d'urgence adaptés à l'enfant selon les dernières recommandations.",
    duration: "28 min",
    views: "6.1k",
    category: "Pédiatrie",
  },
]

export function VideoModules() {
  return (
    <section id="modules" className="py-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Modules Vidéo</h2>
          <p className="mt-2 text-muted-foreground">
            Formations vidéo interactives par des experts médicaux
          </p>
        </div>
        <a
          href="#"
          className="hidden sm:inline-flex items-center text-sm font-medium text-primary hover:underline"
        >
          Voir tous les modules →
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Featured video */}
        <div className="lg:row-span-2">
          <div className="h-full flex flex-col rounded-xl border border-border bg-card overflow-hidden">
            <VideoPlayer
              videoId={featuredVideos[0].id}
              title={featuredVideos[0].title}
            />
            <div className="p-5 flex-1 flex flex-col">
              <Badge variant="secondary" className="w-fit mb-3">
                {featuredVideos[0].category}
              </Badge>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">
                {featuredVideos[0].title}
              </h3>
              <p className="text-sm text-muted-foreground flex-1">
                {featuredVideos[0].description}
              </p>
              <div className="flex items-center gap-4 mt-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {featuredVideos[0].duration}
                </span>
                <span className="flex items-center gap-1">
                  <Eye className="h-3.5 w-3.5" />
                  {featuredVideos[0].views} vues
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary videos */}
        {featuredVideos.slice(1).map((video, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row rounded-xl border border-border bg-card overflow-hidden"
          >
            <div className="sm:w-48 lg:w-56 shrink-0">
              <VideoPlayer videoId={video.id} title={video.title} />
            </div>
            <div className="p-4 flex flex-col justify-center">
              <Badge variant="secondary" className="w-fit mb-2 text-xs">
                {video.category}
              </Badge>
              <h3 className="font-semibold text-card-foreground mb-1 line-clamp-2">
                {video.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                {video.description}
              </p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {video.duration}
                </span>
                <span className="flex items-center gap-1">
                  <Eye className="h-3.5 w-3.5" />
                  {video.views} vues
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <a
        href="#"
        className="mt-6 sm:hidden inline-flex items-center text-sm font-medium text-primary hover:underline"
      >
        Voir tous les modules →
      </a>
    </section>
  )
}
