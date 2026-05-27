const modules = [
  {
    id: 1,
    title: "Module 1 : Introduction",
    description:
      "Découvrez les bases de la médecine et les fondamentaux de la pratique clinique.",
    videoId: "dQw4w9WgXcQ",
  },
  {
    id: 2,
    title: "Module 2 : Cardiologie",
    description:
      "Apprenez l'anatomie cardiaque, les pathologies cardiovasculaires et leur prise en charge.",
    videoId: "dQw4w9WgXcQ",
  },
  {
    id: 3,
    title: "Module 3 : Pneumologie",
    description:
      "Explorez les maladies respiratoires, l'auscultation pulmonaire et les traitements.",
    videoId: "dQw4w9WgXcQ",
  },
  {
    id: 4,
    title: "Module 4 : Pédiatrie",
    description:
      "Comprenez les spécificités de la médecine pédiatrique et le suivi de l'enfant.",
    videoId: "dQw4w9WgXcQ",
  },
]

export function Modules() {
  return (
    <section id="modules" className="py-20 px-4 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Modules de formation
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Parcourez nos modules vidéo pour apprendre à votre rythme.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {modules.map((module) => (
            <div
              key={module.id}
              className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${module.videoId}`}
                  title={module.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground">
                  {module.title}
                </h3>
                <p className="mt-2 text-muted-foreground text-sm">
                  {module.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
