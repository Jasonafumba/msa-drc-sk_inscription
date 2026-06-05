import { Target, Users, BookOpen, Eye } from "lucide-react"

export function About() {
  return (
    <section id="apropos" className="py-20 px-4 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            À propos nous
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            La Medical Students’ Association In The Democratic Republic Of Congo
            (Association des étudiants en médecine en République Démocratique du
            Congo) est une organisation sans but lucratif créée en 2014 à Goma et a actuellement son siège à Kinshasa. 
          </p>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Elle est une branche de <a href="https://url-shortener.me/MRVY" className="text-blue-500 hover:text-blue-700">l'IFMSA</a> (International Federation of Medical Students’ Association) qui est l’association regroupant tous les étudiants en Médecine dans le monde.
          </p> 
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Nous sommes la section de la province du Sud-Kivu. 
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="text-center p-6">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Target className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Objectif Général
            </h3>
            <p className="text-sm text-muted-foreground">
              Servir la société et les étudiants à travers le pays par le biais de nos 9 départements : les comités permanents.
            </p>
           
          </div>

          <div className="text-center p-6">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Eye className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Notre Vision
            </h3>
            <p className="text-sm text-muted-foreground">
              La RDC, un pays dans lequel les étudiants sont unis pour la santé globale
              et sont équipés avec des connaissances, des aptitudes et des valeurs pour
              prendre en main le rôle de leadership en santé localement et globalement
              ; pour façonner un future durable et plein de santé.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Notre Mission
            </h3>
            <p className="text-sm text-muted-foreground">
             Préparer les étudiants en santé à identifier, analyser et résoudre les problèmes de santé communautaire grâce à la recherche, à l’innovation scientifique et technologique, tout en les impliquant dans l’élaboration de politiques de santé et la participation à des conférences et présentations professionnelles aux niveaux national et international.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
