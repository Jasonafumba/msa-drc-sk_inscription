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
      <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-foreground/5">
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
    <button
      onClick={() => setIsPlaying(true)}
      className="relative w-full aspect-video rounded-xl overflow-hidden bg-foreground/5 group focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      aria-label={`Lire la vidéo: ${title}`}
    >
      {/* Thumbnail */}
      <img
        src={thumbnailUrl}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        crossOrigin="anonymous"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-foreground/30 flex items-center justify-center transition-colors group-hover:bg-foreground/40">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform group-hover:scale-110">
          <Play className="h-7 w-7 ml-1" />
        </div>
      </div>
    </button>
  )
}
