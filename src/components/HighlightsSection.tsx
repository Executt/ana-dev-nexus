import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, Shield, Cloud } from "lucide-react";

const highlights = [
  {
    title: "Guia de Início Rápido",
    description:
      "Configure seu ambiente de desenvolvimento e faça seu primeiro deploy em minutos.",
    icon: Rocket,
    href: "/desenvolvimento/guias-rapidos",
    cta: "Começar agora",
  },
  {
    title: "Autenticação OAuth 2.0",
    description:
      "Aprenda a integrar autenticação segura em suas aplicações usando nosso Identity Provider.",
    icon: Shield,
    href: "/apis/autenticacao",
    cta: "Ver documentação",
  },
  {
    title: "Deploy no OpenShift",
    description:
      "Guia completo para deploy de aplicações no cluster Kubernetes da ANA.",
    icon: Cloud,
    href: "/devops/kubernetes",
    cta: "Explorar",
  },
];

export function HighlightsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comece por aqui
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recursos essenciais para acelerar seu desenvolvimento na ANA.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {highlights.map((item) => (
            <Card key={item.title} variant="feature" className="overflow-hidden">
              <CardContent className="p-0">
                <div className="p-8">
                  <div className="w-16 h-16 rounded-2xl gradient-hero flex items-center justify-center mb-6">
                    <item.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  <Button variant="outline" asChild>
                    <Link to={item.href}>
                      {item.cta}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
