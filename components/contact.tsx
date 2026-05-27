import { Mail, MessageCircle } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-secondary scroll-mt-20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
          Contact
        </h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          Une question ? N&apos;hésitez pas à nous contacter.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="mailto:contact@formation-medicale.com"
            className="flex items-center gap-3 px-6 py-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div className="text-left">
              <p className="text-xs text-muted-foreground">Email</p>
              <p className="text-sm font-medium text-foreground">
                contact@formation-medicale.com
              </p>
            </div>
          </a>

          <a
            href="https://wa.me/33600000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-primary" />
            </div>
            <div className="text-left">
              <p className="text-xs text-muted-foreground">WhatsApp</p>
              <p className="text-sm font-medium text-foreground">
                +33 6 00 00 00 00
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
