const modules = [
  {
    id: 1,
    title: "Module 1 : INTRODUCTION",
    description:
      "",
    videoId: "BDgwq5KCJT4",
  },
  {
    id: 2,
    title: "Module 2 : COMPRENDRE LE CONTEXTE",
    description:
      "",
    videoId: "-WiIXUUi0d4",
  },
  {
    id: 3,
    title: "Module 3 : DE LA MSA-DRC à L'IFMSA",
    description:
      ".",
    videoId: "xYgiLQg9kWs",
  },
  {
    id: 4,
    title: "Module 4 : COMPRENDRE LE SYSTEME ET NOUS REJOINDRE",
    description:
      "",
    videoId: "lJ3G06c_CJY",
  },
]

export function Modules() {
  return (
    <section id="modules" className="py-20 px-4 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Modules de Présentation
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Parcourez les vidéos ci-dessous pour en savoir davantage sur nous avant de vous inscrire.
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
