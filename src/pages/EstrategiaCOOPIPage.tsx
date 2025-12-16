import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Compass, 
  Target,
  Rocket,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Quote,
  Lightbulb,
  Shield,
  Zap,
  DollarSign,
  Clock,
  Users,
  Award
} from "lucide-react";

const estrategiaContent: Record<string, {
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  sections: Array<{
    title: string;
    content: string;
    items?: string[];
    cards?: Array<{ icon: React.ElementType; title: string; description: string }>;
    highlight?: boolean;
    quote?: string;
  }>;
}> = {
  "contexto": {
    title: "Contexto Estratégico",
    description: "O cenário que fundamenta a estratégia da COOPI para a infraestrutura de TI da ANA.",
    icon: Compass,
    color: "from-indigo-600 to-indigo-800",
    sections: [
      {
        title: "Evolução Tecnológica da ANA",
        content: "A Agência Nacional de Águas e Saneamento Básico passa por um momento de transformação digital, onde a tecnologia é fundamental para cumprir sua missão institucional.",
        items: [
          "Crescimento exponencial do volume de dados hídricos e ambientais",
          "Demanda por sistemas mais ágeis e escaláveis",
          "Necessidade de integração entre sistemas legados e modernos",
          "Pressão por maior eficiência no uso de recursos públicos"
        ],
        highlight: true
      },
      {
        title: "Desafios de Infraestrutura",
        content: "Os principais desafios que a COOPI enfrenta no cenário atual:",
        items: [
          "Ambiente heterogêneo com múltiplas tecnologias e fornecedores",
          "Sistemas legados que demandam modernização",
          "Crescimento dos custos de nuvem",
          "Escassez de profissionais especializados",
          "Requisitos crescentes de segurança e conformidade",
          "Necessidade de alta disponibilidade 24x7"
        ]
      },
      {
        title: "Necessidade de Modernização",
        content: "A modernização não é opcional, é imperativa para:",
        items: [
          "Garantir a continuidade dos serviços críticos",
          "Reduzir riscos operacionais e de segurança",
          "Otimizar o uso de recursos orçamentários",
          "Aumentar a agilidade nas entregas de TI",
          "Preparar a ANA para demandas futuras"
        ]
      }
    ]
  },
  "objetivos": {
    title: "Objetivos Estratégicos",
    description: "As metas que direcionam as ações da COOPI para os próximos anos.",
    icon: Target,
    color: "from-ana-green to-emerald-700",
    sections: [
      {
        title: "Objetivos Principais",
        content: "Os cinco pilares estratégicos da COOPI:",
        cards: [
          { icon: Shield, title: "Sustentação dos Serviços", description: "Garantir disponibilidade e continuidade de todos os sistemas críticos da ANA" },
          { icon: CheckCircle, title: "Segurança e Confiabilidade", description: "Proteger dados e sistemas contra ameaças, garantindo integridade" },
          { icon: DollarSign, title: "Otimização de Custos", description: "Reduzir gastos sem comprometer qualidade, aplicando FinOps" },
          { icon: Zap, title: "Agilidade nas Entregas", description: "Acelerar provisionamento e suporte às demandas das áreas" },
          { icon: Award, title: "Padronização Tecnológica", description: "Unificar plataformas e reduzir complexidade operacional" }
        ],
        highlight: true
      },
      {
        title: "Indicadores de Sucesso",
        content: "Métricas que demonstrarão o alcance dos objetivos:",
        items: [
          "Disponibilidade de sistemas críticos > 99,5%",
          "Redução de custos de nuvem em 30%",
          "Tempo médio de provisionamento < 24h",
          "Zero incidentes críticos de segurança",
          "100% dos workloads em plataforma padronizada"
        ]
      }
    ]
  },
  "iniciativas": {
    title: "Principais Iniciativas",
    description: "Os projetos e ações que materializam a estratégia da COOPI.",
    icon: Rocket,
    color: "from-orange-500 to-orange-700",
    sections: [
      {
        title: "OpenShift Corporativo",
        content: "Adoção do Red Hat OpenShift como plataforma padrão de containers:",
        items: [
          "Plataforma única para desenvolvimento e produção",
          "Clusters em OCI (OKD) e AWS (ROSA)",
          "Governança centralizada de workloads",
          "Suporte corporativo Red Hat",
          "Integração com pipelines CI/CD"
        ],
        highlight: true
      },
      {
        title: "Estratégia Multinuvem",
        content: "Uso inteligente e governado de múltiplos provedores:",
        items: [
          "OCI para sistemas críticos e EXADATA",
          "AWS para RDS, backup e dados abertos",
          "GCP para processamento geoespacial (Earth Engine)",
          "Azure para Data Lake e analytics",
          "Governança unificada de custos e recursos"
        ]
      },
      {
        title: "FinOps",
        content: "Gestão financeira da nuvem como disciplina:",
        items: [
          "Visibilidade total de custos por área e projeto",
          "Alertas de anomalias de consumo",
          "Rightsizing automático de recursos",
          "Reservas e savings plans otimizados",
          "Reports executivos mensais"
        ]
      },
      {
        title: "Backup Integrado",
        content: "Estratégia unificada de proteção de dados:",
        items: [
          "Política de backup 3-2-1 implementada",
          "Replicação cross-region para DR",
          "Testes regulares de recuperação",
          "Automação de rotinas de backup"
        ]
      },
      {
        title: "Segurança Zero Trust",
        content: "Modelo de segurança moderno e abrangente:",
        items: [
          "Autenticação multifator obrigatória",
          "Microsegmentação de rede",
          "Monitoramento contínuo de ameaças",
          "Gestão de vulnerabilidades automatizada",
          "Red Hat ACS para segurança de containers"
        ]
      },
      {
        title: "Observabilidade Unificada",
        content: "Visibilidade completa do ambiente:",
        items: [
          "Stack de monitoramento centralizado",
          "Métricas, logs e traces integrados",
          "Dashboards executivos e operacionais",
          "Alertas inteligentes e acionáveis"
        ]
      },
      {
        title: "Gestão Centralizada (GLPI)",
        content: "Sistema único para gestão de demandas:",
        items: [
          "Catálogo de serviços padronizado",
          "Workflows de aprovação automatizados",
          "SLAs monitorados e reportados",
          "Base de conhecimento integrada"
        ]
      }
    ]
  },
  "resultados": {
    title: "Resultados Esperados",
    description: "Os benefícios projetados com a implementação da estratégia.",
    icon: TrendingUp,
    color: "from-teal-600 to-teal-800",
    sections: [
      {
        title: "Benefícios Quantitativos",
        content: "Resultados mensuráveis esperados:",
        items: [
          "Redução de 30% nos custos operacionais de nuvem",
          "Aumento de 50% na velocidade de provisionamento",
          "Redução de 70% no tempo de resolução de incidentes",
          "Economia de 40% em licenciamento através de consolidação"
        ],
        highlight: true
      },
      {
        title: "Benefícios Qualitativos",
        content: "Ganhos intangíveis para a organização:",
        items: [
          "Aumento da maturidade operacional da TI",
          "Melhoria da governança e controle",
          "Maior integração entre áreas da STI",
          "Valorização da equipe técnica",
          "Reconhecimento institucional da COOPI"
        ]
      },
      {
        title: "Impacto para a ANA",
        content: "Como a estratégia beneficia a Agência como um todo:",
        items: [
          "Sistemas mais estáveis e confiáveis",
          "Melhor uso dos recursos públicos",
          "Maior agilidade para novas demandas",
          "Conformidade com requisitos de auditoria",
          "Base tecnológica para inovação"
        ]
      },
      {
        title: "Mensagem-Chave",
        content: "O lema que sintetiza nossa estratégia:",
        quote: "Prever para prover.",
        highlight: true
      }
    ]
  }
};

const sidebarLinks = [
  { label: "Contexto Estratégico", href: "/estrategia-coopi/contexto", icon: Compass },
  { label: "Objetivos Estratégicos", href: "/estrategia-coopi/objetivos", icon: Target },
  { label: "Principais Iniciativas", href: "/estrategia-coopi/iniciativas", icon: Rocket },
  { label: "Resultados Esperados", href: "/estrategia-coopi/resultados", icon: TrendingUp },
];

export default function EstrategiaCOOPIPage() {
  const { slug } = useParams<{ slug: string }>();
  const content = slug ? estrategiaContent[slug] : null;

  if (!content) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4 text-center">
            <Compass className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
            <h1 className="text-2xl font-bold text-foreground mb-2">
              Conteúdo não encontrado
            </h1>
            <p className="text-muted-foreground mb-6">
              A página solicitada não está disponível.
            </p>
            <Link
              to="/estrategia-coopi/contexto"
              className="text-accent hover:underline inline-flex items-center gap-2"
            >
              Ir para Contexto Estratégico <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const IconComponent = content.icon;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className={`pt-32 pb-16 bg-gradient-to-br ${content.color}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
              <IconComponent className="w-8 h-8 text-white" />
            </div>
            <Badge variant="secondary" className="bg-white/20 text-white border-0">
              Estratégia COOPI
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {content.title}
          </h1>
          <p className="text-xl text-white/80 max-w-3xl">
            {content.description}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-accent" />
                    Sumário Executivo
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <nav className="flex flex-col">
                    {sidebarLinks.map((link) => {
                      const LinkIcon = link.icon;
                      const isActive = `/estrategia-coopi/${slug}` === link.href;
                      return (
                        <Link
                          key={link.href}
                          to={link.href}
                          className={`flex items-center gap-3 px-6 py-3 text-sm transition-colors border-l-2 ${
                            isActive
                              ? "border-accent bg-accent/10 text-accent font-medium"
                              : "border-transparent hover:bg-muted hover:border-muted-foreground/30 text-muted-foreground"
                          }`}
                        >
                          <LinkIcon className="w-4 h-4" />
                          {link.label}
                        </Link>
                      );
                    })}
                  </nav>
                </CardContent>
              </Card>

              {/* Key Message */}
              <Card className="mt-4 bg-gradient-to-br from-ana-blue/10 to-ana-green/10 border-ana-blue/20">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Quote className="w-5 h-5 text-ana-blue" />
                    <h4 className="font-medium text-sm">Lema COOPI</h4>
                  </div>
                  <p className="text-lg font-bold text-ana-blue italic">
                    "Prever para prover."
                  </p>
                </CardContent>
              </Card>
            </aside>

            {/* Main Content */}
            <main className="lg:col-span-3 space-y-8">
              {content.sections.map((section, index) => (
                <Card key={index} className={section.highlight ? "border-accent/50 bg-accent/5" : ""}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      {section.highlight && <CheckCircle className="w-5 h-5 text-accent" />}
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{section.content}</p>
                    
                    {section.quote && (
                      <blockquote className="border-l-4 border-ana-blue pl-6 py-4 my-6 bg-gradient-to-r from-ana-blue/10 to-transparent rounded-r-lg">
                        <p className="text-2xl font-bold text-ana-blue italic flex items-center gap-3">
                          <Quote className="w-8 h-8 text-ana-blue/50" />
                          {section.quote}
                        </p>
                      </blockquote>
                    )}
                    
                    {section.items && (
                      <ul className="space-y-2">
                        {section.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <ArrowRight className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                            <span className="text-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.cards && (
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                        {section.cards.map((card, i) => {
                          const CardIcon = card.icon;
                          return (
                            <div key={i} className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                              <div className="flex items-center gap-3 mb-2">
                                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                                  <CardIcon className="w-5 h-5 text-accent" />
                                </div>
                              </div>
                              <h4 className="font-medium text-foreground mb-1">{card.title}</h4>
                              <p className="text-sm text-muted-foreground">
                                {card.description}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </main>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
