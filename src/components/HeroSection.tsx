import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Zap } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";
export function HeroSection() {
  return <section className="relative min-h-screen flex items-center overflow-hidden gradient-hero">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img src={heroBanner} alt="Tecnologia e recursos hídricos" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-ana-blue-dark/90 via-ana-blue/80 to-ana-blue-light/70" />
      </div>

      {/* Animated Wave Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute bottom-0 left-0 w-full h-48 text-background/10" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path className="animate-wave" fill="currentColor" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
        </svg>
        <svg className="absolute bottom-0 left-0 w-full h-32 text-background/5" viewBox="0 0 1440 320" preserveAspectRatio="none" style={{
        animationDelay: "0.5s"
      }}>
          <path className="animate-wave" fill="currentColor" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,106.7C672,117,768,171,864,176C960,181,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
        </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 rounded-full text-primary-foreground text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              Portal Interno de Desenvolvedores
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-up" style={{
          animationDelay: "0.1s"
        }}>Portal de Tecnologias
da ANA<span className="block text-ana-blue-bright">da ANA</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-up" style={{
          animationDelay: "0.2s"
        }}>
            Tecnologia, Inovação e Governança a Serviço dos Recursos Hídricos do Brasil. Acesse documentações, APIs, padrões e ferramentas de desenvolvimento.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{
          animationDelay: "0.3s"
        }}>
            <Button variant="hero" size="xl" asChild>
              <Link to="/desenvolvimento/guias-rapidos">
                <BookOpen className="w-5 h-5" />
                Explorar Documentações
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/apis/catalogo">
                Guias Rápidos
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Wave Transition */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-24 text-background" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,50 C360,100 1080,0 1440,50 L1440,100 L0,100 Z" />
        </svg>
      </div>
    </section>;
}