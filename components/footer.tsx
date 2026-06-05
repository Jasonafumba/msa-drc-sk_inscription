import { GraduationCap } from "lucide-react"

export function Footer() {
  const navLinks = [
    { href: "#accueil", label: "Accueil" },
    { href: "#modules", label: "Modules" },
    { href: "#apropos", label: "À propos" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <footer className="py-10 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#accueil" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <GraduationCap className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-semibold text-foreground">
              MSA-DRC Sud Kivu
            </span>
          </a>

          {/* Navigation */}
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} MSA-DRC Sud Kivu. Tous droits
            réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
