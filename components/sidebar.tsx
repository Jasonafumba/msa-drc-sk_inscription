"use client"

import { useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  Home,
  PlayCircle,
  BookOpen,
  Award,
  Settings,
  Menu,
  X,
  GraduationCap,
  Heart,
  Stethoscope,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Accueil", href: "/", icon: Home },
  { name: "Modules Vidéo", href: "#modules", icon: PlayCircle },
  { name: "Cours", href: "#cours", icon: BookOpen },
  { name: "Certifications", href: "#certifications", icon: Award },
  { name: "Paramètres", href: "#settings", icon: Settings },
]

const specialties = [
  { name: "Cardiologie", icon: Heart },
  { name: "Médecine Générale", icon: Stethoscope },
  { name: "Pédiatrie", icon: GraduationCap },
]

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 h-full w-64 bg-sidebar border-r border-sidebar-border z-40",
          "flex flex-col transition-transform duration-300 ease-in-out",
          "lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 px-6 py-6 border-b border-sidebar-border">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <GraduationCap className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-base font-semibold text-sidebar-foreground">MédForm</h1>
            <p className="text-xs text-muted-foreground">Formation Médicale</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 overflow-y-auto">
          <ul className="space-y-1">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium",
                    "text-sidebar-foreground/70 hover:text-sidebar-foreground",
                    "hover:bg-sidebar-accent transition-colors",
                    item.name === "Accueil" && "bg-sidebar-accent text-sidebar-foreground"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Specialties section */}
          <div className="mt-8">
            <h2 className="px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              Spécialités
            </h2>
            <ul className="space-y-1">
              {specialties.map((item) => (
                <li key={item.name}>
                  <Link
                    href="#"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
                  >
                    <item.icon className="h-4 w-4" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Footer */}
        <div className="px-4 py-4 border-t border-sidebar-border">
          <div className="flex items-center gap-3 px-3 py-2">
            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-xs font-medium text-primary">DR</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-sidebar-foreground truncate">Dr. Rousseau</p>
              <p className="text-xs text-muted-foreground truncate">Médecin Résident</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
