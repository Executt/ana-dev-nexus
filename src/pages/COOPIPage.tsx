import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { COOPIStrategyDiagram } from "@/components/COOPIStrategyDiagram";
import { 
  Building2, 
  Users,
  Target,
  Briefcase,
  Shield,
  Network,
  Database,
  Cloud,
  Server,
  Eye,
  HardDrive,
  ClipboardList,
  CheckCircle,
  ArrowRight,
  Compass,
  Rocket,
  TrendingUp,
  Lightbulb,
  Quote,
  Zap,
  DollarSign,
  Award,
  Cpu,
  Globe,
  Lock
} from "lucide-react";

const coopiContent: Record<string, {
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
    showDiagram?: boolean;
  }>;
}> = {
  "sobre": {
    title: "Sobre a COOPI",
    description: "Conheça a Coordenação de Infraestrutura e Operações de TI da ANA.",
    icon: Building2,
    color: "from-ana-blue to-ana-dark-blue",
    sections: [
      {
        title: "A COOPI",
        content: "A Coordenação de Infraestrutura e Operações de TI (COOPI) é uma unidade estratégica da Superintendência de Tecnologia da Informação (STI) da Agência Nacional de Águas e Saneamento Básico (ANA).",
        items: [
          "Unidade responsável pela infraestrutura tecnológica da ANA",
          "Vinculada à Superintendência de Tecnologia da Informação (STI)",
          "Atua como pilar de sustentação dos serviços digitais da Agência",
          "Atuação transversal em todas as áreas da ANA"
        ],
        highlight: true
      },
      {
        title: "Papel Institucional",
        content: "A COOPI é responsável por garantir a disponibilidade, segurança e desempenho de toda a infraestrutura de TI da ANA, atuando em diversas frentes:",
        items: [
          "Gestão da infraestrutura de servidores e redes",
          "Administração de bancos de dados corporativos",
          "Operação e governança de ambientes de nuvem",
          "Sustentação de serviços críticos para a missão da ANA",
          "Gerenciamento de backup e recuperação de desastres",
          "Monitoramento e observabilidade de sistemas"
        ]
      },
      {
        title: "Responsabilidade pela Sustentação Tecnológica",
        content: "Nossa equipe trabalha continuamente para:",
        items: [
          "Manter os sistemas disponíveis 24x7",
          "Garantir a segurança dos dados institucionais",
          "Modernizar a infraestrutura tecnológica",
          "Apoiar as demais coordenações da STI",
          "Implementar melhores práticas de mercado"
        ]
      }
    ]
  },
  "missao-visao-valores": {
    title: "Missão, Visão e Valores",
    description: "Os pilares que orientam a atuação da COOPI.",
    icon: Target,
    color: "from-ana-green to-emerald-700",
    sections: [
      {
        title: "Missão",
        content: "Garantir a segurança, disponibilidade e sustentação tecnológica dos serviços de TI da ANA, provendo infraestrutura confiável e moderna para suportar a missão institucional da Agência.",
        highlight: true,
        quote: "Prover infraestrutura segura, disponível e sustentável para a transformação digital da ANA."
      },
      {
        title: "Visão",
        content: "Ser referência em gestão de infraestrutura de TI na Administração Pública Federal, reconhecida pela excelência operacional, inovação tecnológica e compromisso com resultados.",
        items: [
          "Reconhecimento como centro de excelência em infraestrutura",
          "Modelo de governança para outros órgãos públicos",
          "Pioneirismo na adoção de tecnologias modernas"
        ]
      },
      {
        title: "Valores",
        content: "Os valores que guiam todas as nossas ações e decisões:",
        items: [
          "Integridade: agir com ética e transparência em todas as situações",
          "Compromisso: dedicação total à missão da ANA e aos usuários",
          "Transparência: comunicação clara e prestação de contas",
          "Excelência técnica: busca contínua pela qualidade e inovação",
          "Cooperação: trabalho em equipe e parceria com outras áreas"
        ]
      }
    ]
  },
  "areas-atuacao": {
    title: "Áreas de Atuação",
    description: "Conheça as áreas de competência da COOPI.",
    icon: Briefcase,
    color: "from-purple-600 to-purple-800",
    sections: [
      {
        title: "Competências Técnicas",
        content: "A COOPI atua em diversas frentes para garantir a operação contínua da infraestrutura de TI:",
        cards: [
          { icon: Cloud, title: "Nuvem e Multinuvem", description: "Gestão de OCI, AWS, GCP e Azure com governança unificada" },
          { icon: Server, title: "Infraestrutura e Servidores", description: "Servidores físicos, virtuais e plataforma OpenShift" },
          { icon: Database, title: "Banco de Dados", description: "Administração de SGBDs Oracle, PostgreSQL e SQL Server" },
          { icon: Network, title: "Redes e Telecom", description: "Conectividade, switches, firewalls e links" },
          { icon: Shield, title: "Segurança da Informação", description: "Proteção de perímetro, gestão de vulnerabilidades e Zero Trust" },
          { icon: HardDrive, title: "Backup e Continuidade", description: "Políticas 3-2-1, retenção e recuperação de desastres" },
          { icon: Eye, title: "Observabilidade", description: "Monitoramento, métricas, logs e alertas centralizados" },
          { icon: Cpu, title: "Operações e Sustentação", description: "NOC, incidentes e continuidade de serviços 24x7" },
          { icon: ClipboardList, title: "Gestão de Demandas (GLPI)", description: "Atendimento, controle de chamados e catálogo de serviços" }
        ],
        highlight: true
      }
    ]
  },
  "estrategia": {
    title: "Estratégia da COOPI",
    description: "Contexto estratégico, desafios institucionais e direcionadores de evolução tecnológica.",
    icon: Compass,
    color: "from-indigo-600 to-indigo-800",
    sections: [
      {
        title: "Diagrama Estratégico",
        content: "Visão integrada das camadas estratégicas, capacidades, execução e resultados esperados da COOPI.",
        showDiagram: true,
        highlight: true
      },
      {
        title: "Contexto Estratégico",
        content: "A ANA passa por um momento de transformação digital, onde a tecnologia é fundamental para cumprir sua missão institucional.",
        items: [
          "Crescimento exponencial do volume de dados hídricos e ambientais",
          "Demanda por sistemas mais ágeis e escaláveis",
          "Necessidade de integração entre sistemas legados e modernos",
          "Pressão por maior eficiência no uso de recursos públicos"
        ]
      },
      {
        title: "Desafios Institucionais",
        content: "Os principais desafios que a COOPI enfrenta no cenário atual:",
        items: [
          "Ambiente heterogêneo com múltiplas tecnologias e fornecedores",
          "Sistemas legados que demandam modernização",
          "Crescimento dos custos de nuvem",
          "Escassez de profissionais especializados",
          "Requisitos crescentes de segurança e conformidade"
        ]
      },
      {
        title: "Direcionadores de Evolução",
        content: "Princípios que orientam a evolução tecnológica:",
        items: [
          "Governança: controle centralizado de recursos e políticas",
          "Eficiência: otimização de custos e processos",
          "Segurança: proteção em todas as camadas",
          "Sustentabilidade: visão de longo prazo",
          "Não dependência de fornecedor: evitar vendor lock-in"
        ]
      }
    ]
  },
  "sumario-executivo": {
    title: "Sumário Executivo da Estratégia",
    description: "Visão executiva, clara e acessível da estratégia da COOPI para toda a STI.",
    icon: Lightbulb,
    color: "from-teal-600 to-teal-800",
    sections: [
      {
        title: "Objetivos Estratégicos",
        content: "Os cinco pilares estratégicos da COOPI:",
        cards: [
          { icon: Shield, title: "Sustentação dos Serviços", description: "Garantir disponibilidade e continuidade de todos os sistemas críticos da ANA" },
          { icon: Lock, title: "Segurança e Confiabilidade", description: "Proteger dados e sistemas contra ameaças, garantindo integridade" },
          { icon: DollarSign, title: "Otimização de Custos", description: "Reduzir gastos sem comprometer qualidade, aplicando FinOps" },
          { icon: Zap, title: "Agilidade nas Entregas", description: "Acelerar provisionamento e suporte às demandas das áreas" },
          { icon: Award, title: "Padronização Tecnológica", description: "Unificar plataformas e reduzir complexidade operacional" }
        ],
        highlight: true
      },
      {
        title: "Resultados Esperados",
        content: "Benefícios projetados com a implementação da estratégia:",
        items: [
          "Redução de 30% nos custos operacionais de nuvem",
          "Aumento de 50% na velocidade de provisionamento",
          "Disponibilidade de sistemas críticos > 99,5%",
          "100% dos workloads em plataforma padronizada",
          "Maior integração entre áreas da STI"
        ]
      },
      {
        title: "Mensagem-Chave",
        content: "O lema que sintetiza nossa estratégia e compromisso com a ANA:",
        quote: "Prever para prover.",
        highlight: true
      }
    ]
  },
  "iniciativas": {
    title: "Iniciativas Estratégicas",
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
        title: "Padronização Tecnológica",
        content: "Consolidação de tecnologias e processos:",
        items: [
          "Catálogo de tecnologias homologadas",
          "Templates padronizados para provisionamento",
          "Documentação técnica centralizada",
          "Capacitação contínua da equipe"
        ]
      },
      {
        title: "Sustentação de Sistemas Críticos",
        content: "Garantia de operação dos sistemas essenciais:",
        items: [
          "SLAs definidos e monitorados",
          "Planos de contingência atualizados",
          "Equipe de plantão 24x7",
          "Gestão de incidentes ITIL"
        ]
      }
    ]
  }
};

const sidebarLinks = [
  { label: "Sobre a COOPI", href: "/coopi/sobre", icon: Building2 },
  { label: "Missão, Visão e Valores", href: "/coopi/missao-visao-valores", icon: Target },
  { label: "Áreas de Atuação", href: "/coopi/areas-atuacao", icon: Briefcase },
  { label: "Estratégia da COOPI", href: "/coopi/estrategia", icon: Compass },
  { label: "Sumário Executivo", href: "/coopi/sumario-executivo", icon: Lightbulb },
  { label: "Iniciativas Estratégicas", href: "/coopi/iniciativas", icon: Rocket },
];

// Redirect map for old URLs
const redirectMap: Record<string, string> = {
  "quem-somos": "sobre",
  "responsabilidades": "areas-atuacao"
};

export default function COOPIPage() {
  const { slug } = useParams<{ slug: string }>();
  
  // Handle redirects for old URLs
  const actualSlug = slug ? (redirectMap[slug] || slug) : null;
  const content = actualSlug ? coopiContent[actualSlug] : null;

  if (!content) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4 text-center">
            <Building2 className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
            <h1 className="text-2xl font-bold text-foreground mb-2">
              Conteúdo não encontrado
            </h1>
            <p className="text-muted-foreground mb-6">
              A página solicitada não está disponível.
            </p>
            <Link
              to="/coopi/sobre"
              className="text-accent hover:underline inline-flex items-center gap-2"
            >
              Ir para Sobre a COOPI <ArrowRight className="w-4 h-4" />
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
              COOPI
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
                    <Building2 className="w-5 h-5 text-accent" />
                    COOPI
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <nav className="flex flex-col">
                    {sidebarLinks.map((link) => {
                      const LinkIcon = link.icon;
                      const isActive = `/coopi/${actualSlug}` === link.href;
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

              {/* Quick Info */}
              <Card className="mt-4">
                <CardContent className="p-4">
                  <h4 className="font-medium text-sm mb-3">Contato</h4>
                  <div className="space-y-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>Equipe COOPI</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4" />
                      <span>STI / ANA</span>
                    </div>
                  </div>
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
                    
                    {section.showDiagram && (
                      <div className="my-6 p-4 bg-muted/30 rounded-xl">
                        <COOPIStrategyDiagram className="max-w-4xl mx-auto" />
                      </div>
                    )}
                    
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
