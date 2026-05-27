import { Sidebar } from "@/components/sidebar"
import { HeroSection } from "@/components/hero-section"
import { VideoModules } from "@/components/video-modules"
import { CourseCards } from "@/components/course-cards"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />

      {/* Main content */}
      <main className="lg:pl-64">
        <div className="px-4 sm:px-6 lg:px-8 py-8 pt-16 lg:pt-8">
          <HeroSection />
          <VideoModules />
          <CourseCards />

          {/* Footer */}
          <footer className="mt-16 py-8 border-t border-border">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
              <p>© 2026 MédForm. Tous droits réservés.</p>
              <div className="flex items-center gap-6">
                <a href="#" className="hover:text-foreground transition-colors">
                  Mentions légales
                </a>
                <a href="#" className="hover:text-foreground transition-colors">
                  Confidentialité
                </a>
                <a href="#" className="hover:text-foreground transition-colors">
                  Contact
                </a>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  )
}
