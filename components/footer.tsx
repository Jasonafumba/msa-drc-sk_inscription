import Link from "next/link"
import { GraduationCap } from "lucide-react"

const navLinks = [
  { href: "#accueil", label: "Accueil" },
  { href: "#modules", label: "Modules" },
  { href: "#a-propos", label: "À propos" },
  { href: "#contact", label: "Contact" },
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <GraduationCap className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-base font-semibold text-foreground">
              Formation Médicale
            </span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Formation Médicale. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
