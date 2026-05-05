import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import logo from "@/assets/kimold-logo.png";
import hero from "@/assets/kimold-2.png";
import heroAlt1 from "@/assets/kimold-1.png";
import heroAlt2 from "@/assets/kimold-3.png";
import {
  Activity, Dumbbell, HeartPulse, Stethoscope, Bone, Sparkles,
  MapPin, Phone, Clock, Instagram, Star, ChevronRight, ShieldCheck, Users, Trophy
} from "lucide-react";

const services = [
  { icon: Bone, title: "Rehabilitación de Lesiones", desc: "Recuperación post-quirúrgica, lumbalgias, tendinitis y patologías articulares." },
  { icon: Dumbbell, title: "Kinesiología Deportiva", desc: "Vuelta al deporte segura, prevención de lesiones y readaptación funcional." },
  { icon: Activity, title: "Tratamiento del Dolor", desc: "Abordaje integral de dolor crónico, contracturas y molestias persistentes." },
  { icon: HeartPulse, title: "Terapia Manual", desc: "Técnicas manuales avanzadas para liberar tensión y restaurar el movimiento." },
  { icon: Stethoscope, title: "Evaluación Postural", desc: "Diagnóstico funcional preciso para diseñar tu plan de recuperación." },
  { icon: Sparkles, title: "Punción Seca y Electroterapia", desc: "Tecnología y técnicas de vanguardia para acelerar tu recuperación." },
];

const reviews = [
  {
    name: "Álvaro Brito",
    text: "Excelente atención personalizada y acompañamiento en cada sesión. Vine por un problema de pata de ganso y meniscos que persistía hace 2 años, y con Franco logré recuperarme.",
    role: "Local Guide",
  },
  {
    name: "Denise Fuchilo",
    text: "Hace más de un año tenía dolor en ambos cuádriceps que no me dejaba moverme. Pasé por otros especialistas sin éxito, hasta que llegué a Kimold. ¡Resultados increíbles!",
    role: "Paciente",
  },
  {
    name: "Melina Moggia",
    text: "En solo 4 sesiones me salvaron de una tendinitis que no me dejaba mover el hombro. Son CRACKS en lo que hacen. 100% personalizado. ¡Súper recomendado!",
    role: "Local Guide",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <a href="#" className="flex items-center gap-3">
            <img src={logo} alt="Kimold logo" className="h-12 w-12 rounded-full object-cover shadow-card" />
            <div className="leading-tight">
              <div className="font-bold text-lg tracking-tight">Kimold</div>
              <div className="text-xs text-muted-foreground">Medicina Física y Rehabilitación</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#servicios" className="hover:text-primary transition-colors">Servicios</a>
            <a href="#nosotros" className="hover:text-primary transition-colors">Nosotros</a>
            <a href="#opiniones" className="hover:text-primary transition-colors">Opiniones</a>
            <a href="#contacto" className="hover:text-primary transition-colors">Contacto</a>
          </nav>
          <Button asChild variant="default" className="bg-gradient-cta hover:opacity-90 shadow-soft">
            <a href="https://wa.me/541178928722" target="_blank" rel="noopener">Reservar turno</a>
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-soft">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-secondary/10 blur-3xl" />
        <div className="container relative grid lg:grid-cols-2 gap-12 items-center py-20 lg:py-28">
          <div className="space-y-7">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card shadow-card border border-border text-sm">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>
              <span className="font-semibold">5.0</span>
              <span className="text-muted-foreground">· 213 opiniones en Google</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.05]">
              Movimiento <span className="text-gradient">sin dolor</span>, vida sin límites.
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              En Kimold te acompañamos en cada paso de tu recuperación. Kinesiología deportiva,
              rehabilitación de lesiones y atención 100% personalizada en Castelar.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild className="bg-gradient-cta hover:opacity-90 shadow-soft text-base h-14 px-8">
                <a href="https://wa.me/541178928722" target="_blank" rel="noopener">
                  Agendar mi sesión <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="h-14 px-8 text-base border-2">
                <a href="#servicios">Ver tratamientos</a>
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-6 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-secondary" /> +10 años de experiencia</div>
              <div className="flex items-center gap-2"><Users className="h-5 w-5 text-secondary" /> Atención personalizada</div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-cta rounded-[2rem] blur-2xl opacity-30" />
            <img
              src={hero}
              alt="Kinesiólogo realizando rehabilitación de rodilla en Kimold"
              width={1536}
              height={1024}
              className="relative rounded-[2rem] shadow-soft w-full h-auto object-cover aspect-[4/3]"
            />
            <Card className="absolute -bottom-6 -left-6 p-5 shadow-soft border-0 hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-cta flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-bold text-2xl">213+</div>
                  <div className="text-xs text-muted-foreground">Pacientes felices</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-24 container">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">Tratamientos</div>
          <h2 className="text-4xl lg:text-5xl font-extrabold">Especialistas en cada etapa de tu recuperación</h2>
          <p className="text-muted-foreground text-lg">
            Diseñamos planes únicos para vos, combinando técnica, ciencia y dedicación.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <Card key={s.title} className="group p-8 border-border hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 shadow-card hover:shadow-soft">
              <div className="w-14 h-14 rounded-2xl bg-gradient-cta flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <s.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-muted-foreground">{s.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* NOSOTROS */}
      <section id="nosotros" className="py-24 bg-gradient-soft">
        <div className="container grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-secondary/15 text-secondary text-sm font-semibold">Nosotros</div>
            <h2 className="text-4xl lg:text-5xl font-extrabold">
              Un equipo que <span className="text-gradient">entiende tu cuerpo</span>.
            </h2>
            <p className="text-lg text-muted-foreground">
              En Kimold creemos que cada paciente es único. Combinamos kinesiología deportiva,
              terapia manual y tecnología de vanguardia para devolverte el movimiento y la confianza.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { n: "5.0", l: "Calificación" },
                { n: "213+", l: "Opiniones" },
                { n: "10+", l: "Años" },
              ].map((stat) => (
                <div key={stat.l} className="text-center p-5 rounded-2xl bg-card shadow-card">
                  <div className="text-3xl font-extrabold text-gradient">{stat.n}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.l}</div>
                </div>
              ))}
            </div>
          </div>
          <Card className="p-10 border-0 shadow-soft bg-card">
            <h3 className="text-2xl font-bold mb-6">Por qué elegirnos</h3>
            <ul className="space-y-5">
              {[
                "Atención 100% personalizada en cada sesión",
                "Profesionales matriculados con formación continua",
                "Tecnología y técnicas avaladas por la evidencia",
                "Seguimiento real de tu evolución",
              ].map((item) => (
                <li key={item} className="flex gap-4 items-start">
                  <div className="mt-1 w-6 h-6 rounded-full bg-gradient-cta flex items-center justify-center shrink-0">
                    <ChevronRight className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      {/* OPINIONES */}
      <section id="opiniones" className="py-24 container">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">Opiniones reales</div>
          <h2 className="text-4xl lg:text-5xl font-extrabold">Lo que dicen nuestros pacientes</h2>
          <div className="flex justify-center items-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-secondary text-secondary" />
            ))}
            <span className="font-bold ml-2">5.0</span>
            <span className="text-muted-foreground">en Google</span>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <Card key={r.name} className="p-8 shadow-card hover:shadow-soft transition-shadow">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-foreground/90 mb-6 leading-relaxed">"{r.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-gradient-cta flex items-center justify-center text-primary-foreground font-bold">
                  {r.name[0]}
                </div>
                <div>
                  <div className="font-semibold">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA + CONTACTO */}
      <section id="contacto" className="py-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2),transparent_50%)]" />
        <div className="container relative grid lg:grid-cols-2 gap-12 items-center text-primary-foreground">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight">
              Empezá hoy tu camino hacia una mejor versión de vos.
            </h2>
            <p className="text-lg text-primary-foreground/90 max-w-lg">
              Reservá tu turno y dejá que nuestro equipo te acompañe a recuperar tu movilidad y bienestar.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild variant="secondary" className="h-14 px-8 text-base bg-card text-primary hover:bg-card/90">
                <a href="https://wa.me/541178928722" target="_blank" rel="noopener">
                  <Phone className="mr-2 h-5 w-5" /> 011 7892-8722
                </a>
              </Button>
              <Button size="lg" asChild variant="outline" className="h-14 px-8 text-base bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <a href="https://instagram.com" target="_blank" rel="noopener">
                  <Instagram className="mr-2 h-5 w-5" /> Instagram
                </a>
              </Button>
            </div>
          </div>
          <Card className="p-8 bg-card/95 backdrop-blur text-foreground border-0 shadow-soft space-y-5">
            <h3 className="text-2xl font-bold">Visitanos</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div>
                  <div className="font-semibold">Dirección</div>
                  <div className="text-muted-foreground text-sm">Almafuerte 2548, B1712 Castelar, Provincia de Buenos Aires</div>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div>
                  <div className="font-semibold">Horarios</div>
                  <div className="text-muted-foreground text-sm">Lunes a Viernes · Cierra a las 21:00 hs</div>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div>
                  <div className="font-semibold">Teléfono</div>
                  <div className="text-muted-foreground text-sm">011 7892-8722</div>
                </div>
              </div>
            </div>
            <Button asChild className="w-full bg-gradient-cta hover:opacity-90 h-12">
              <a href="https://maps.google.com/?q=Almafuerte+2548+Castelar" target="_blank" rel="noopener">
                Ver en Google Maps
              </a>
            </Button>
          </Card>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-border">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Kimold" className="h-8 w-8 rounded-full" />
            <span>© {new Date().getFullYear()} Kimold · Medicina Física y Rehabilitación</span>
          </div>
          <div>Almafuerte 2548, Castelar · Buenos Aires</div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
