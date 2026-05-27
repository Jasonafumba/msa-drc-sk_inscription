import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Users, Star, ArrowRight, Heart, Brain, Bone, Baby, Pill, Activity } from "lucide-react"

const courses = [
  {
    title: "Cardiologie Avancée",
    description: "Maîtrisez le diagnostic et le traitement des pathologies cardiovasculaires complexes.",
    icon: Heart,
    duration: "24h",
    students: "1,234",
    rating: 4.9,
    level: "Avancé",
    color: "bg-red-500/10 text-red-600",
  },
  {
    title: "Neurologie Clinique",
    description: "Approfondissez vos connaissances en neuroanatomie et sémiologie neurologique.",
    icon: Brain,
    duration: "18h",
    students: "892",
    rating: 4.8,
    level: "Intermédiaire",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    title: "Traumatologie et Orthopédie",
    description: "Les urgences traumatologiques et la prise en charge orthopédique.",
    icon: Bone,
    duration: "20h",
    students: "756",
    rating: 4.7,
    level: "Intermédiaire",
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    title: "Pédiatrie Essentielle",
    description: "Formation complète sur les soins pédiatriques de la naissance à l'adolescence.",
    icon: Baby,
    duration: "22h",
    students: "1,089",
    rating: 4.9,
    level: "Débutant",
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    title: "Pharmacologie Clinique",
    description: "Comprenez les interactions médicamenteuses et optimisez vos prescriptions.",
    icon: Pill,
    duration: "16h",
    students: "634",
    rating: 4.6,
    level: "Intermédiaire",
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    title: "Urgences Vitales",
    description: "Protocoles de réanimation et gestion des situations critiques.",
    icon: Activity,
    duration: "12h",
    students: "2,145",
    rating: 4.9,
    level: "Tous niveaux",
    color: "bg-rose-500/10 text-rose-600",
  },
]

export function CourseCards() {
  return (
    <section id="cours" className="py-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Cours Populaires</h2>
          <p className="mt-2 text-muted-foreground">
            Parcours structurés pour développer vos compétences
          </p>
        </div>
        <a
          href="#"
          className="hidden sm:inline-flex items-center text-sm font-medium text-primary hover:underline"
        >
          Explorer le catalogue →
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Card
            key={course.title}
            className="group flex flex-col hover:shadow-lg transition-shadow duration-300"
          >
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className={`p-3 rounded-lg ${course.color}`}>
                  <course.icon className="h-5 w-5" />
                </div>
                <Badge variant="outline" className="text-xs">
                  {course.level}
                </Badge>
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mt-4 group-hover:text-primary transition-colors">
                {course.title}
              </h3>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {course.description}
              </p>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <div className="w-full flex items-center justify-between text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {course.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <Users className="h-4 w-4" />
                  {course.students}
                </span>
                <span className="flex items-center gap-1.5">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  {course.rating}
                </span>
              </div>
              <Button variant="outline" className="w-full group/btn">
                <span>Voir le cours</span>
                <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <a
        href="#"
        className="mt-6 sm:hidden inline-flex items-center text-sm font-medium text-primary hover:underline"
      >
        Explorer le catalogue →
      </a>
    </section>
  )
}
