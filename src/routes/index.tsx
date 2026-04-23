import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import hugoPhoto from "@/assets/hugo.png";
import logoSocialLab from "@/assets/logo-social-lab.png";
import {
  ArrowRight,
  Check,
  Shield,
  Phone,
  PhoneCall,
  Sparkles,
  Quote,
  Inbox,
  Megaphone,
  Handshake,
  MapPin,
  MessageCircle,
  Video,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Social Lab — Prospects qualifiés clé en main pour cuisinistes" },
      {
        name: "description",
        content:
          "Social Lab livre aux cuisinistes les coordonnées de prospects qualifiés issus de Meta Ads. Vous recevez les numéros, vous appelez, vous signez. Zéro gestion marketing.",
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
      <HowItWorks />
      <About />
      <Offer />
      <WinWin />
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
          <div className="h-8 w-8 rounded-md bg-foreground flex items-center justify-center">
            <Sparkles className="h-4 w-4 text-background" />
          </div>
          <span className="font-display text-lg font-semibold">Social Lab</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#fonctionnement" className="hover:text-foreground transition-colors">Fonctionnement</a>
          <a href="#qui-je-suis" className="hover:text-foreground transition-colors">Qui je suis</a>
          <a href="#offre" className="hover:text-foreground transition-colors">Offre</a>
          <a href="#gagnant-gagnant" className="hover:text-foreground transition-colors">Gagnant-gagnant</a>
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
    <section
      id="top"
      className="relative pt-32 pb-24 overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-12 flex justify-center">
          <img
            src={logoSocialLab}
            alt="Hugo Bonny — Social Lab"
            className="w-full max-w-md rounded-2xl shadow-elegant"
          />
        </div>
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium text-muted-foreground mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-brown animate-pulse" />
            Livraison de prospects clé en main — cuisinistes
          </div>

          <h1 className="font-display text-5xl md:text-7xl leading-[1.05] tracking-tight text-balance">
            Recevez les <em className="text-brown not-italic font-display">numéros</em> de
            prospects qualifiés. <span className="italic">Appelez. Signez.</span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Nous lançons et gérons vos publicités Meta. Dès qu'un prospect se manifeste,
            <strong className="text-foreground"> son numéro vous arrive directement</strong>.
            Vous n'avez rien à gérer côté marketing : vous appelez, vous démarrez le devis.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90 h-12 px-6">
              <a href="#contact">
                Recevoir mes premiers prospects <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 px-6 border-foreground/20">
              <a href="#fonctionnement">Comment ça marche</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      icon: Megaphone,
      title: "Nous diffusons les pubs Meta",
      desc: "Meta, c'est Facebook et Instagram. Création, ciblage, budget, optimisation : tout est géré chez nous. Vous n'avez rien à toucher.",
    },
    {
      icon: Inbox,
      title: "Vous recevez les coordonnées",
      desc: "Dès qu'un prospect intéressé se manifeste, son numéro vous arrive directement, en temps réel.",
    },
    {
      icon: PhoneCall,
      title: "Vous appelez et vous signez",
      desc: "Vous reprenez votre métier : vous appelez, vous fixez le rendez-vous, vous démarrez le devis.",
    },
  ];
  return (
    <section id="fonctionnement" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-brown uppercase tracking-wider mb-3">Fonctionnement</p>
          <h2 className="font-display text-4xl md:text-5xl text-balance">
            Une livraison de prospects, simple comme un appel.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="rounded-2xl border border-border bg-card p-8 shadow-soft"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="h-11 w-11 rounded-lg bg-secondary flex items-center justify-center">
                  <s.icon className="h-5 w-5 text-brown" />
                </div>
                <span className="font-display text-3xl text-muted-foreground/40">0{i + 1}</span>
              </div>
              <h3 className="font-display text-xl mb-2">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const points = [
    {
      icon: MapPin,
      title: "Basé en Haute-Savoie",
      desc: "Indépendant installé en Haute-Savoie, j'accompagne des cuisinistes partout en France.",
    },
    {
      icon: MessageCircle,
      title: "Suivi par WhatsApp",
      desc: "Toute la communication passe par WhatsApp : réactif, fluide, sans rendez-vous inutile.",
    },
    {
      icon: Video,
      title: "Visio quand il le faut",
      desc: "Besoin d'échanger de vive voix ? Je reste disponible en visioconférence sur Google Meet.",
    },
  ];
  return (
    <section id="qui-je-suis" className="py-28 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-5 gap-12 items-start">
        <div className="lg:col-span-2">
          <div className="mb-8 relative mx-auto w-fit">
            <div
              className="absolute -inset-3 rounded-full opacity-60 blur-2xl"
              style={{ background: "var(--gradient-warm)" }}
            />
            <img
              src={hugoPhoto}
              alt="Hugo Bonny, fondateur de Social Lab"
              className="relative rounded-full w-48 h-48 md:w-56 md:h-56 object-cover shadow-elegant border border-border"
            />
          </div>
          <p className="text-sm font-medium text-brown uppercase tracking-wider mb-3">Qui je suis</p>
          <h2 className="font-display text-4xl md:text-5xl text-balance leading-tight">
            Hugo Bonny, <span className="italic text-brown">spécialiste cuisinistes</span>.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Indépendant basé en Haute-Savoie, je travaille <strong className="text-foreground">exclusivement avec des cuisinistes</strong>.
            Cette spécialisation me permet de connaître votre marché, vos clients et vos cycles de
            vente — et de livrer des prospects réellement qualifiés.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            À l'ère du digital, plus besoin de se déplacer : tout le suivi se fait à distance,
            partout en France. Et quand un échange en direct s'impose, on bascule en visio.
          </p>
        </div>

        <div className="lg:col-span-3 grid sm:grid-cols-1 gap-4">
          {points.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-soft flex items-start gap-4"
            >
              <div className="h-11 w-11 rounded-lg bg-brown/10 flex items-center justify-center shrink-0">
                <p.icon className="h-5 w-5 text-brown" />
              </div>
              <div>
                <h3 className="font-display text-lg mb-1">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Offer() {
  const features = [
    "Publicités Meta entièrement gérées par Social Lab",
    "Numéros des prospects livrés directement, en temps réel",
    "Aucune compétence ni outil marketing requis de votre côté",
    "Prospects qualifiés : projet de cuisine, zone géographique, budget",
    "Budget publicitaire estimé entre 350€ et 800€/mois en fonction de votre budget et de vos besoins",
    "Commission de 6% uniquement sur le CA généré par les clients issus des publicités",
  ];
  return (
    <section id="offre" className="py-28 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-brown uppercase tracking-wider mb-3">Notre offre</p>
          <h2 className="font-display text-4xl md:text-5xl text-balance">
            Vous recevez les contacts. Nous gérons le reste.
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 rounded-2xl border border-border bg-card p-10 shadow-soft">
            <h3 className="font-display text-2xl mb-6">Ce qui est inclus</h3>
            <ul className="space-y-4">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full bg-brown/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-brown" strokeWidth={3} />
                  </div>
                  <span className="text-foreground/90">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="lg:col-span-2 rounded-2xl p-10 text-white relative overflow-hidden"
            style={{ background: "var(--gradient-warm)", boxShadow: "var(--shadow-elegant)" }}
          >
            <div className="relative">
              <p className="text-sm uppercase tracking-wider opacity-80">Tarification</p>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="font-display text-6xl font-medium">6%</span>
                <span className="opacity-80 ml-2">du CA généré</span>
              </div>
              <p className="mt-4 text-white/90 text-sm leading-relaxed">
                Uniquement sur les clients signés issus des publicités. Aucun frais fixe.
              </p>

              <div className="my-8 h-px bg-white/20" />

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="opacity-80">Frais fixes</span>
                  <span className="font-medium">Aucun</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-80">Budget pub estimé</span>
                  <span className="font-medium">350€ – 800€ / mois</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-80">Commission</span>
                  <span className="font-medium">6% du CA signé</span>
                </div>
              </div>

              <Button asChild size="lg" className="w-full mt-8 bg-white text-brown-deep hover:bg-white/95">
                <a href="#contact">Démarrer maintenant</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WinWin() {
  return (
    <section id="gagnant-gagnant" className="py-28">
      <div className="mx-auto max-w-4xl px-6">
        <div className="rounded-2xl bg-card border border-border p-10 md:p-14 text-center shadow-soft">
          <div className="inline-flex h-16 w-16 rounded-2xl bg-brown/10 items-center justify-center mb-6">
            <Handshake className="h-8 w-8 text-brown" />
          </div>
          <p className="text-sm font-medium text-brown uppercase tracking-wider mb-3">Gagnant-gagnant</p>
          <h2 className="font-display text-4xl md:text-5xl text-balance leading-tight">
            Pas de client signé ?
            <br />
            <span className="italic text-brown">Je ne suis pas payé.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Aucun frais fixe, aucun abonnement. Je ne touche ma commission de 6%
            que sur le <strong className="text-foreground">CA réellement signé</strong> grâce
            aux prospects que je vous livre. Mes intérêts sont alignés avec les vôtres :
            si vous ne gagnez pas, je ne gagne pas.
          </p>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    {
      quote:
        "Je reçois les numéros directement sur mon téléphone, j'appelle dans la foulée. Plus simple, ça n'existe pas.",
      author: "Marc L.",
      role: "Cuisiniste — Lyon",
    },
    {
      quote:
        "Zéro gestion marketing de mon côté. Je me concentre sur les rendez-vous et les devis, c'est tout.",
      author: "Sophie B.",
      role: "Showroom — Bordeaux",
    },
    {
      quote:
        "Les contacts sont chauds et qualifiés. Quand j'appelle, le projet de cuisine est déjà concret.",
      author: "Karim T.",
      role: "Cuisiniste — Lille",
    },
  ];
  return (
    <section id="temoignages" className="py-28 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-brown uppercase tracking-wider mb-3">Témoignages</p>
          <h2 className="font-display text-4xl md:text-5xl text-balance">
            Ils reçoivent leurs prospects avec Social Lab.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl border border-border bg-card p-8 shadow-soft hover:shadow-elegant transition-shadow"
            >
              <Quote className="h-6 w-6 text-brown/40 mb-4" />
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
          <p className="text-sm font-medium text-brown uppercase tracking-wider mb-3">Contact</p>
          <h2 className="font-display text-4xl md:text-5xl text-balance leading-tight">
            Recevez vos premiers prospects.
          </h2>
          <p className="mt-6 text-background/70 leading-relaxed">
            Un appel de 20 minutes pour valider votre zone, votre capacité de production
            et lancer la livraison de prospects sous 7 jours.
          </p>
          <div className="mt-10 space-y-3 text-sm text-background/70">
            <div className="flex items-center gap-2">✉️ atelierdigital.hb@gmail.com</div>
            <div className="flex items-center gap-2"><Phone className="h-4 w-4" /> 07 69 98 28 80</div>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="space-y-4 bg-background/5 border border-background/10 rounded-2xl p-8"
        >
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
          <Button type="submit" disabled={loading} size="lg" className="w-full bg-brown hover:bg-brown-deep text-white">
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
        <div>© {new Date().getFullYear()} Social Lab. Tous droits réservés.</div>
        <div>Livraison de prospects clé en main pour cuisinistes — France</div>
      </div>
    </footer>
  );
}
