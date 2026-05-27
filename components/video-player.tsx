"use client"

import { useState } from "react"
import { Play } from "lucide-react"

interface VideoPlayerProps {
  videoId: string
  title: string
  thumbnail?: string
}

export function VideoPlayer({ videoId, title, thumbnail }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  const thumbnailUrl = thumbnail || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`

  if (isPlaying) {
    return (
      <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-background">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
    )
  }

  return (
    <div
      className="relative w-full aspect-video rounded-xl overflow-hidden bg-muted cursor-pointer group"
      onClick={() => setIsPlaying(true)}
    >
      <img
        src={thumbnailUrl}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        crossOrigin="anonymous"
      />
      <div className="absolute inset-0 bg-background/40 group-hover:bg-background/50 transition-colors" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-primary/90 group-hover:bg-primary flex items-center justify-center transition-all group-hover:scale-110 shadow-lg">
          <Play className="h-8 w-8 text-primary-foreground ml-1" />
        </div>
      </div>
      <div className="absolute bottom-4 left-4 right-4">
        <p className="text-foreground font-medium text-lg drop-shadow-lg">{title}</p>
      </div>
    </div>
  )
}
