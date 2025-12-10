import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ana-blue-bright/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-ana-blue-light/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 rounded-full text-primary-foreground text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Precisa de ajuda?
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Dúvidas ou sugestões?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-10 leading-relaxed">
            Nossa equipe está disponível para auxiliar desenvolvedores com
            dúvidas técnicas, sugestões de melhorias ou novos recursos para o
            portal.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <a href="mailto:sti@ana.gov.br">
                Entrar em Contato
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/ferramentas/repositorios">Ver Repositórios</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
