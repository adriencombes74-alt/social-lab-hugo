import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import {
  ArrowRight,
  Check,
  Shield,
  TrendingUp,
  Users,
  Target,
  Sparkles,
  Quote,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cuisina Leads — Prospects qualifiés pour cuisinistes en France" },
      {
        name: "description",
        content:
          "Agence spécialisée en génération de leads pour cuisinistes : 5 à 10 prospects qualifiés par mois, 2 à 4 clients signés. Garantie résultats.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Toaster position="top-center" />
      <Nav />
      <Hero />
      <Stats />
      <Offer />
      <Guarantee />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-warm flex items-center justify-center">
            <Sparkles className="h-4 w-4 text-white" />
          </div>
          <span className="font-display text-lg font-semibold">Cuisina Leads</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#offre" className="hover:text-foreground transition-colors">Offre</a>
          <a href="#garantie" className="hover:text-foreground transition-colors">Garantie</a>
          <a href="#temoignages" className="hover:text-foreground transition-colors">Témoignages</a>
        </nav>
        <Button asChild size="sm" className="bg-foreground text-background hover:bg-foreground/90">
          <a href="#contact">Démarrer</a>
        </Button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div className="absolute top-20 right-0 h-96 w-96 rounded-full opacity-30 blur-3xl" style={{ background: "var(--terracotta)" }} />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 text-xs font-medium text-muted-foreground mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-terracotta animate-pulse" />
            Spécialiste cuisinistes — France entière
          </div>

          <h1 className="font-display text-5xl md:text-7xl leading-[1.05] tracking-tight text-balance">
            Des prospects <em className="text-terracotta not-italic font-display">qualifiés</em>,
            des cuisines <span className="italic">vendues.</span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Nous générons <strong className="text-foreground">5 à 10 prospects par mois</strong> pour votre showroom,
            avec <strong className="text-foreground">2 à 4 clients signés</strong>. Acquisition publicitaire ciblée,
            scénarios de relance, rendez-vous posés.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90 h-12 px-6">
              <a href="#contact">
                Réserver un appel <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 px-6 border-foreground/20">
              <a href="#offre">Voir l'offre</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { value: "5–10", label: "Prospects qualifiés / mois", icon: Users },
    { value: "2–4", label: "Clients signés / mois", icon: TrendingUp },
    { value: "100%", label: "Spécialisé cuisinistes", icon: Target },
  ];
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto max-w-6xl px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="flex items-start gap-4">
            <div className="h-11 w-11 rounded-lg bg-secondary flex items-center justify-center shrink-0">
              <s.icon className="h-5 w-5 text-terracotta" />
            </div>
            <div>
              <div className="font-display text-4xl font-medium tracking-tight">{s.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Offer() {
  const features = [
    "Campagnes publicitaires ciblées (Meta & Google)",
    "Landing page optimisée à votre marque",
    "Qualification téléphonique des prospects",
    "Scénarios de relance automatisés",
    "Reporting hebdomadaire transparent",
    "Accompagnement & ajustements continus",
  ];
  return (
    <section id="offre" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-terracotta uppercase tracking-wider mb-3">Notre offre</p>
          <h2 className="font-display text-4xl md:text-5xl text-balance">
            Un partenariat aligné sur vos résultats.
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 rounded-2xl border border-border bg-card p-10 shadow-soft">
            <h3 className="font-display text-2xl mb-6">Ce qui est inclus</h3>
            <ul className="space-y-4">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full bg-terracotta/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-terracotta" strokeWidth={3} />
                  </div>
                  <span className="text-foreground/90">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 rounded-2xl p-10 text-white relative overflow-hidden" style={{ background: "var(--gradient-warm)", boxShadow: "var(--shadow-elegant)" }}>
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
            <div className="relative">
              <p className="text-sm uppercase tracking-wider opacity-80">À partir de</p>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="font-display text-6xl font-medium">199€</span>
                <span className="opacity-80">/mois</span>
              </div>
              <p className="mt-4 text-white/90 text-sm leading-relaxed">
                + <strong>6%</strong> uniquement sur les clients signés grâce à nos prospects.
              </p>

              <div className="my-8 h-px bg-white/20" />

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="opacity-80">Budget publicitaire</span>
                  <span className="font-medium">400 – 800€</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-80">Engagement</span>
                  <span className="font-medium">3 mois</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-80">Mise en place</span>
                  <span className="font-medium">Offerte</span>
                </div>
              </div>

              <Button asChild size="lg" className="w-full mt-8 bg-white text-terracotta-deep hover:bg-white/95">
                <a href="#contact">Démarrer maintenant</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Guarantee() {
  return (
    <section id="garantie" className="py-28 bg-secondary/40">
      <div className="mx-auto max-w-4xl px-6">
        <div className="rounded-2xl bg-card border border-border p-10 md:p-14 text-center shadow-soft">
          <div className="inline-flex h-16 w-16 rounded-2xl bg-terracotta/10 items-center justify-center mb-6">
            <Shield className="h-8 w-8 text-terracotta" />
          </div>
          <p className="text-sm font-medium text-terracotta uppercase tracking-wider mb-3">Notre garantie</p>
          <h2 className="font-display text-4xl md:text-5xl text-balance leading-tight">
            Moins de 5 prospects ce mois-ci ?
            <br />
            <span className="italic text-terracotta">Le mois suivant est offert.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Si nous générons moins de 5 prospects qualifiés au mois N, le forfait fixe du mois N+1
            vous est <strong className="text-foreground">intégralement offert</strong>. Sans condition,
            sans paperasse.
          </p>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    {
      quote: "En 4 mois, nous avons signé 11 cuisines grâce à leurs prospects. Le ROI est imbattable.",
      author: "Marc L.",
      role: "Cuisiniste — Lyon",
    },
    {
      quote: "Enfin une agence qui comprend notre métier. Les leads sont chauds et qualifiés.",
      author: "Sophie B.",
      role: "Showroom — Bordeaux",
    },
    {
      quote: "Le système de relance fait toute la différence. On reçoit des RDV posés, pas des numéros.",
      author: "Karim T.",
      role: "Cuisiniste — Lille",
    },
  ];
  return (
    <section id="temoignages" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-terracotta uppercase tracking-wider mb-3">Témoignages</p>
          <h2 className="font-display text-4xl md:text-5xl text-balance">
            Ils ont fait confiance à Cuisina Leads.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl border border-border bg-card p-8 shadow-soft hover:shadow-elegant transition-shadow"
            >
              <Quote className="h-6 w-6 text-terracotta/40 mb-4" />
              <p className="text-foreground/90 leading-relaxed">"{t.quote}"</p>
              <div className="mt-6 pt-6 border-t border-border">
                <div className="font-medium">{t.author}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [loading, setLoading] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Message envoyé ! Nous vous recontactons sous 24h.");
    }, 700);
  }

  return (
    <section id="contact" className="py-28 bg-foreground text-background">
      <div className="mx-auto max-w-4xl px-6 grid md:grid-cols-2 gap-16 items-start">
        <div>
          <p className="text-sm font-medium text-terracotta uppercase tracking-wider mb-3">Contact</p>
          <h2 className="font-display text-4xl md:text-5xl text-balance leading-tight">
            Parlons de votre showroom.
          </h2>
          <p className="mt-6 text-background/70 leading-relaxed">
            Un appel de 20 minutes pour comprendre vos objectifs et vous dire honnêtement
            si nous pouvons vous aider.
          </p>
          <div className="mt-10 space-y-3 text-sm text-background/70">
            <div>📍 Paris, France</div>
            <div>✉️ contact@cuisinaleads.fr</div>
            <div>📞 01 23 45 67 89</div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="space-y-4 bg-background/5 border border-background/10 rounded-2xl p-8">
          <div>
            <Label htmlFor="name" className="text-background/80">Nom</Label>
            <Input id="name" required className="mt-1.5 bg-background/10 border-background/20 text-background placeholder:text-background/40" placeholder="Jean Dupont" />
          </div>
          <div>
            <Label htmlFor="company" className="text-background/80">Entreprise</Label>
            <Input id="company" required className="mt-1.5 bg-background/10 border-background/20 text-background placeholder:text-background/40" placeholder="Cuisines Dupont" />
          </div>
          <div>
            <Label htmlFor="email" className="text-background/80">Email</Label>
            <Input id="email" type="email" required className="mt-1.5 bg-background/10 border-background/20 text-background placeholder:text-background/40" placeholder="jean@exemple.fr" />
          </div>
          <div>
            <Label htmlFor="message" className="text-background/80">Message</Label>
            <Textarea id="message" rows={4} className="mt-1.5 bg-background/10 border-background/20 text-background placeholder:text-background/40" placeholder="Parlez-nous de votre showroom…" />
          </div>
          <Button type="submit" disabled={loading} size="lg" className="w-full bg-terracotta hover:bg-terracotta-deep text-white">
            {loading ? "Envoi…" : "Envoyer le message"}
          </Button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row justify-between gap-4 text-sm text-muted-foreground">
        <div>© {new Date().getFullYear()} Cuisina Leads. Tous droits réservés.</div>
        <div>Spécialiste génération de leads pour cuisinistes — France</div>
      </div>
    </footer>
  );
}
