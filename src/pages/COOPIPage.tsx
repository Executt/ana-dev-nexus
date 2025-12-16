import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  Heart
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
  }>;
}> = {
  "quem-somos": {
    title: "Quem Somos",
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
          "Atua como pilar de sustentação dos serviços digitais da Agência"
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
        title: "Compromisso com a Excelência",
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
          { icon: Network, title: "Redes e Telecom", description: "Gestão da conectividade, switches, firewalls e links de comunicação" },
          { icon: Database, title: "Banco de Dados e Servidores", description: "Administração de SGBDs, servidores físicos e virtuais" },
          { icon: Cloud, title: "Nuvem", description: "Gestão multinuvem: OCI, AWS, GCP e Azure" },
          { icon: Server, title: "Operações", description: "Monitoramento, incidentes e continuidade de serviços" },
          { icon: Shield, title: "Segurança", description: "Proteção de perímetro, gestão de vulnerabilidades" },
          { icon: HardDrive, title: "Backup", description: "Políticas de backup, retenção e recuperação de dados" },
          { icon: Eye, title: "Observabilidade", description: "Monitoramento, métricas, logs e alertas" },
          { icon: ClipboardList, title: "Gestão de Demandas", description: "GLPI, atendimento e controle de chamados" }
        ],
        highlight: true
      }
    ]
  },
  "responsabilidades": {
    title: "Responsabilidades Institucionais",
    description: "As responsabilidades formais da COOPI perante a ANA.",
    icon: Shield,
    color: "from-slate-700 to-slate-900",
    sections: [
      {
        title: "Governança de Infraestrutura",
        content: "Responsabilidades relacionadas à governança:",
        items: [
          "Definição de padrões e políticas de infraestrutura",
          "Arquitetura de referência para novos projetos",
          "Avaliação e aprovação de soluções tecnológicas",
          "Gestão do ciclo de vida de ativos de TI"
        ],
        highlight: true
      },
      {
        title: "Gestão de Contratos",
        content: "Acompanhamento técnico de contratos de TI:",
        items: [
          "Fiscalização de contratos de infraestrutura",
          "Gestão de SLAs com fornecedores",
          "Avaliação de propostas técnicas",
          "Acompanhamento de entregas e qualidade"
        ]
      },
      {
        title: "Gestão da Capacidade",
        content: "Planejamento e dimensionamento de recursos:",
        items: [
          "Monitoramento de uso de recursos",
          "Previsão de demanda e crescimento",
          "Otimização de custos de infraestrutura",
          "Planejamento de expansão"
        ]
      },
      {
        title: "Segurança da Informação",
        content: "Proteção dos ativos de informação:",
        items: [
          "Implementação de controles de segurança",
          "Gestão de acessos e identidades",
          "Resposta a incidentes de segurança",
          "Conformidade com normas e políticas"
        ]
      },
      {
        title: "Apoio às Coordenações",
        content: "Suporte às demais áreas da STI:",
        items: [
          "Provisionamento de ambientes",
          "Consultoria técnica em infraestrutura",
          "Suporte a deploys e releases",
          "Troubleshooting de problemas complexos"
        ]
      },
      {
        title: "Conformidade e Auditorias",
        content: "Atendimento a requisitos de conformidade:",
        items: [
          "Preparação para auditorias internas e externas",
          "Documentação de processos e procedimentos",
          "Atendimento a recomendações de órgãos de controle",
          "Aderência a frameworks de governança (ITIL, COBIT)"
        ]
      }
    ]
  }
};

const sidebarLinks = [
  { label: "Quem Somos", href: "/coopi/quem-somos", icon: Building2 },
  { label: "Missão, Visão e Valores", href: "/coopi/missao-visao-valores", icon: Target },
  { label: "Áreas de Atuação", href: "/coopi/areas-atuacao", icon: Briefcase },
  { label: "Responsabilidades", href: "/coopi/responsabilidades", icon: Shield },
];

export default function COOPIPage() {
  const { slug } = useParams<{ slug: string }>();
  const content = slug ? coopiContent[slug] : null;

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
              to="/coopi/quem-somos"
              className="text-accent hover:underline inline-flex items-center gap-2"
            >
              Ir para Quem Somos <ArrowRight className="w-4 h-4" />
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
                      const isActive = `/coopi/${slug}` === link.href;
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
                    
                    {section.quote && (
                      <blockquote className="border-l-4 border-accent pl-4 py-2 mb-4 bg-accent/5 rounded-r-lg">
                        <p className="text-foreground italic font-medium">{section.quote}</p>
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
                      <div className="grid sm:grid-cols-2 gap-4 mt-4">
                        {section.cards.map((card, i) => {
                          const CardIcon = card.icon;
                          return (
                            <div key={i} className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                              <div className="flex items-center gap-3 mb-2">
                                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                                  <CardIcon className="w-5 h-5 text-accent" />
                                </div>
                                <span className="font-medium text-foreground">{card.title}</span>
                              </div>
                              <p className="text-sm text-muted-foreground pl-13">
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
