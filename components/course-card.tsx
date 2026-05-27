import { Clock, Users, Play, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface CourseCardProps {
  title: string
  description: string
  instructor: string
  duration: string
  students: number
  rating: number
  level: "Débutant" | "Intermédiaire" | "Avancé"
  category: string
  thumbnail?: string
  progress?: number
}

export function CourseCard({
  title,
  description,
  instructor,
  duration,
  students,
  rating,
  level,
  category,
  thumbnail,
  progress,
}: CourseCardProps) {
  const levelColors = {
    Débutant: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    Intermédiaire: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    Avancé: "bg-rose-500/20 text-rose-400 border-rose-500/30",
  }

  return (
    <Card className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 cursor-pointer">
      {/* Thumbnail */}
      <div className="relative aspect-video bg-muted overflow-hidden">
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
            <Play className="h-12 w-12 text-primary/50 group-hover:text-primary transition-colors" />
          </div>
        )}
        
        {/* Play overlay */}
        <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
            <Play className="h-6 w-6 text-primary-foreground ml-1" />
          </div>
        </div>

        {/* Category badge */}
        <Badge className="absolute top-3 left-3 bg-background/80 text-foreground border-0 backdrop-blur-sm">
          {category}
        </Badge>

        {/* Duration */}
        <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-1 rounded bg-background/80 backdrop-blur-sm text-xs text-foreground">
          <Clock className="h-3 w-3" />
          {duration}
        </div>
      </div>

      <CardContent className="p-5">
        {/* Level & Rating */}
        <div className="flex items-center justify-between mb-3">
          <Badge variant="outline" className={cn("text-xs", levelColors[level])}>
            {level}
          </Badge>
          <div className="flex items-center gap-1 text-sm">
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            <span className="text-foreground font-medium">{rating.toFixed(1)}</span>
          </div>
        </div>

        {/* Title & Description */}
        <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>

        {/* Instructor & Students */}
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>{instructor}</span>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{students.toLocaleString()}</span>
          </div>
        </div>

        {/* Progress bar */}
        {progress !== undefined && (
          <div className="mt-4">
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="text-muted-foreground">Progression</span>
              <span className="text-primary font-medium">{progress}%</span>
            </div>
            <div className="h-1.5 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
