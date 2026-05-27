"use client"

import { useState } from "react"
import { Play } from "lucide-react"

interface VideoCardProps {
  title: string
  description: string
  videoId: string
}

export function VideoCard({ title, description, videoId }: VideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="rounded-xl bg-card border border-border overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="relative aspect-video bg-secondary">
        {isPlaying ? (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        ) : (
          <>
            <img
              src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
              alt={title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
              }}
            />
            <button
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition-colors group"
              aria-label={`Lire ${title}`}
            >
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-7 h-7 text-primary-foreground ml-1" />
              </div>
            </button>
          </>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
