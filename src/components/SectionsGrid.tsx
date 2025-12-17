import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import {
  Code2,
  Plug,
  Database,
  Droplets,
  Wrench,
  Brain,
  Server,
  Cloud,
  ArrowRight,
  Building2,
} from "lucide-react";
import { cn } from "@/lib/utils";

const sections = [
  {
    title: "Padrões e Boas Práticas",
    description:
      "Guias de estilo, arquitetura e padrões de código adotados pela ANA.",
    icon: Code2,
    href: "/desenvolvimento/padroes-codigo",
    color: "bg-ana-blue-dark",
  },
  {
    title: "APIs Institucionais",
    description:
      "Catálogo de APIs internas e externas com documentação completa.",
    icon: Plug,
    href: "/apis/catalogo",
    color: "bg-ana-blue",
  },
  {
    title: "Inteligência Artificial",
    description:
      "Governança, arquitetura e catálogo de soluções de IA da ANA.",
    icon: Brain,
    href: "/ia/governanca",
    color: "bg-gradient-to-br from-purple-600 to-blue-600",
  },
  {
    title: "Sustentação de Sistemas",
    description:
      "OpenShift, DevSecOps, SRE e catálogo de serviços de plataforma.",
    icon: Server,
    href: "/sustentacao/plataforma",
    color: "bg-ana-blue-light",
  },
  {
    title: "Governança de Dados",
    description:
      "Catálogo de dados (OpenMetadata), políticas e conformidade LGPD.",
    icon: Database,
    href: "/governanca/catalogo-dados",
    color: "bg-secondary",
  },
  {
    title: "Multinuvem",
    description:
      "OCI, AWS, GCP, Azure e estratégia de otimização de nuvem.",
    icon: Cloud,
    href: "/multinuvem/oci",
    color: "bg-gradient-to-br from-orange-500 to-red-600",
  },
  {
    title: "COOPI",
    description:
      "Coordenação de Infraestrutura e Operações: estratégia, iniciativas e governança.",
    icon: Building2,
    href: "/coopi/sobre",
    color: "bg-gradient-to-br from-ana-blue to-ana-dark-blue",
  },
  {
    title: "Recursos Hídricos",
    description:
      "Mapas, dados hidrológicos e integrações com sistemas da ANA.",
    icon: Droplets,
    href: "/recursos/mapas",
    color: "bg-accent",
  },
  {
    title: "Ferramentas Internas",
    description:
      "Repositórios, portais e ambiente de desenvolvimento e testes.",
    icon: Wrench,
    href: "/ferramentas/dev",
    color: "bg-ana-blue-dark",
  },
];

export function SectionsGrid() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Explore nossos recursos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Documentação completa, APIs, ferramentas e guias para desenvolvedores
            da ANA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sections.map((section, index) => (
            <Link
              key={section.title}
              to={section.href}
              className="group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card variant="feature" className="h-full">
                <CardContent className="p-6">
                  <div
                    className={cn(
                      "w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110",
                      section.color
                    )}
                  >
                    <section.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {section.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {section.description}
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-accent group-hover:gap-2 transition-all">
                    Acessar
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
