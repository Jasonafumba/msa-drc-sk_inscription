import { Sidebar } from "@/components/sidebar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Search,
  Bell,
  Users,
  MessageCircle,
  Heart,
  Share2,
  TrendingUp,
  Clock,
} from "lucide-react"

const discussions = [
  {
    id: 1,
    author: "Dr. Sophie Laurent",
    avatar: "SL",
    role: "Cardiologue",
    title: "Nouvelles recommandations ESC 2026 sur l'insuffisance cardiaque",
    content: "Quelles sont vos impressions sur les nouvelles guidelines ? Notamment concernant les seuils de BNP pour l'initiation du traitement...",
    category: "Cardiologie",
    replies: 24,
    likes: 56,
    time: "Il y a 2h",
    trending: true,
  },
  {
    id: 2,
    author: "Pr. Marc Dubois",
    avatar: "MD",
    role: "Médecin généraliste",
    title: "Cas clinique : Douleur thoracique atypique chez patient jeune",
    content: "Patient de 28 ans, sportif, consulte pour douleur thoracique intermittente depuis 1 semaine. ECG normal, troponines négatives. Vos avis ?",
    category: "Cas Clinique",
    replies: 18,
    likes: 32,
    time: "Il y a 4h",
    trending: false,
  },
  {
    id: 3,
    author: "Dr. Claire Moreau",
    avatar: "CM",
    role: "Neurologue",
    title: "Retour d'expérience : Formation échographie au point de soins",
    content: "Je viens de terminer la certification POCUS. Excellente formation, je recommande vivement. Voici mon retour détaillé...",
    category: "Retour d'expérience",
    replies: 12,
    likes: 45,
    time: "Il y a 6h",
    trending: true,
  },
  {
    id: 4,
    author: "Dr. Thomas Bernard",
    avatar: "TB",
    role: "Réanimateur",
    title: "Question : Protocole sédation en réanimation",
    content: "Quels protocoles utilisez-vous pour la sédation-analgésie des patients intubés ? Nous réfléchissons à passer au RASS...",
    category: "Question",
    replies: 31,
    likes: 28,
    time: "Il y a 8h",
    trending: false,
  },
  {
    id: 5,
    author: "Dr. Isabelle Roux",
    avatar: "IR",
    role: "Dermatologue",
    title: "Partage : Atlas dermatologique des urgences",
    content: "Je partage avec vous un atlas que j'ai constitué sur les urgences dermatologiques. 150 photos commentées...",
    category: "Partage",
    replies: 42,
    likes: 89,
    time: "Hier",
    trending: true,
  },
]

const topContributors = [
  { name: "Dr. Sophie Laurent", avatar: "SL", specialty: "Cardiologie", posts: 156 },
  { name: "Pr. Marc Dubois", avatar: "MD", specialty: "Médecine Générale", posts: 134 },
  { name: "Dr. Claire Moreau", avatar: "CM", specialty: "Neurologie", posts: 98 },
  { name: "Dr. Thomas Bernard", avatar: "TB", specialty: "Réanimation", posts: 87 },
]

const categories = ["Tous", "Cardiologie", "Cas Clinique", "Question", "Partage", "Retour d'expérience"]

export default function CommunautePage() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      
      <main className="lg:pl-64">
        {/* Header */}
        <header className="sticky top-0 z-30 flex items-center justify-between gap-4 px-6 py-4 bg-background/80 backdrop-blur-sm border-b border-border">
          <div className="flex-1 max-w-md ml-12 lg:ml-0">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Rechercher une discussion..."
                className="pl-10 bg-secondary border-border"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
            </Button>
            <div className="hidden sm:flex items-center gap-3">
              <div className="text-right">
                <p className="text-sm font-medium text-foreground">Dr. Martin</p>
                <p className="text-xs text-muted-foreground">Premium</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-sm font-semibold text-primary-foreground">DM</span>
              </div>
            </div>
          </div>
        </header>

        <div className="p-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Page Title */}
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-foreground">Communauté</h1>
                  <p className="text-muted-foreground mt-2">
                    Échangez avec vos confrères
                  </p>
                </div>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Nouvelle discussion
                </Button>
              </div>

              {/* Category Filter */}
              <div className="flex items-center gap-3 flex-wrap">
                {categories.map((category) => (
                  <Badge
                    key={category}
                    variant={category === "Tous" ? "default" : "outline"}
                    className={
                      category === "Tous"
                        ? "bg-primary text-primary-foreground cursor-pointer"
                        : "cursor-pointer hover:bg-secondary"
                    }
                  >
                    {category}
                  </Badge>
                ))}
              </div>

              {/* Discussions */}
              <div className="space-y-4">
                {discussions.map((discussion) => (
                  <Card
                    key={discussion.id}
                    className="bg-card border-border hover:border-primary/50 transition-colors cursor-pointer"
                  >
                    <CardContent className="p-6">
                      {/* Author */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                            <span className="text-sm font-semibold text-primary">
                              {discussion.avatar}
                            </span>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-foreground">
                              {discussion.author}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {discussion.role}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {discussion.trending && (
                            <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30">
                              <TrendingUp className="h-3 w-3 mr-1" />
                              Tendance
                            </Badge>
                          )}
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {discussion.time}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline" className="text-xs">
                            {discussion.category}
                          </Badge>
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">
                          {discussion.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {discussion.content}
                        </p>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-6 pt-4 border-t border-border">
                        <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                          <MessageCircle className="h-4 w-4" />
                          {discussion.replies} réponses
                        </button>
                        <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-rose-400 transition-colors">
                          <Heart className="h-4 w-4" />
                          {discussion.likes}
                        </button>
                        <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                          <Share2 className="h-4 w-4" />
                          Partager
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Community Stats */}
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    Communauté
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Membres</span>
                      <span className="text-sm font-medium text-foreground">12,847</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Discussions</span>
                      <span className="text-sm font-medium text-foreground">3,256</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Réponses</span>
                      <span className="text-sm font-medium text-foreground">28,491</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Top Contributors */}
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Top contributeurs
                  </h3>
                  <div className="space-y-4">
                    {topContributors.map((contributor, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                          <span className="text-xs font-semibold text-primary">
                            {contributor.avatar}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-foreground truncate">
                            {contributor.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {contributor.specialty}
                          </p>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {contributor.posts} posts
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* CTA */}
              <Card className="bg-gradient-to-br from-primary/20 to-primary/5 border-primary/30">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-foreground mb-2">
                    Rejoignez la discussion
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Partagez vos cas cliniques et échangez avec la communauté.
                  </p>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Créer un post
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
