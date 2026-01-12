import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Activity, 
  Monitor,
  Server,
  HardDrive,
  ClipboardList,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Settings,
  Database,
  Shield,
  Clock,
  FileText,
  Layers,
  ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";

const gestaoContent: Record<string, {
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  sections: Array<{
    title: string;
    content: string;
    items?: string[];
    cards?: Array<{ icon: React.ElementType; title: string; description: string; link?: string }>;
    highlight?: boolean;
    externalLink?: { url: string; label: string };
  }>;
}> = {
  "ativos": {
    title: "Gestão de Ativos e Configuração (SACM)",
    description: "Inventário completo de hardware, software e licenças de TIC da ANA.",
    icon: Layers,
    color: "from-blue-600 to-indigo-700",
    sections: [
      {
        title: "Gestão de Ativos de TI",
        content: "A COOPI mantém um inventário completo e atualizado de todos os ativos de tecnologia da informação da ANA, seguindo as melhores práticas ITIL para Gestão de Configuração e Ativos de Serviço (SACM).",
        items: [
          "Inventário de hardware: servidores, estações, equipamentos de rede",
          "Catálogo de software: sistemas operacionais, aplicações, ferramentas",
          "Gestão de licenças: conformidade, renovações, otimização de custos",
          "Rastreabilidade de ativos: localização, responsáveis, ciclo de vida"
        ],
        highlight: true
      },
      {
        title: "Base de Dados de Configuração (CMDB)",
        content: "O CMDB centraliza todas as informações sobre itens de configuração e seus relacionamentos:",
        items: [
          "Mapeamento de dependências entre sistemas e infraestrutura",
          "Histórico de mudanças e atualizações",
          "Integração com gestão de incidentes e problemas",
          "Suporte à análise de impacto de mudanças"
        ]
      },
      {
        title: "Conformidade e Auditoria",
        content: "Controles para garantir conformidade e facilitar auditorias:",
        items: [
          "Verificação contínua de licenciamento",
          "Relatórios para órgãos de controle",
          "Evidências de gestão patrimonial de TI",
          "Suporte a processos de contratação"
        ]
      }
    ]
  },
  "monitoramento": {
    title: "Monitoramento e Observabilidade",
    description: "Zabbix para coleta de métricas e Grafana para dashboards executivos e técnicos.",
    icon: Monitor,
    color: "from-green-600 to-emerald-700",
    sections: [
      {
        title: "Stack de Monitoramento",
        content: "Infraestrutura completa de monitoramento para visibilidade total do ambiente:",
        cards: [
          { icon: Activity, title: "Zabbix", description: "Coleta de métricas de disponibilidade, performance e capacidade de servidores, redes e aplicações." },
          { icon: BarChart3, title: "Grafana", description: "Dashboards executivos e técnicos para visualização de métricas, tendências e alertas." }
        ],
        highlight: true
      },
      {
        title: "Métricas Coletadas",
        content: "Indicadores monitorados continuamente pela equipe de operações:",
        items: [
          "Disponibilidade de serviços e sistemas críticos",
          "Utilização de CPU, memória e disco",
          "Latência e throughput de rede",
          "Health checks de aplicações",
          "Métricas de banco de dados (conexões, queries, locks)"
        ]
      },
      {
        title: "Dashboards Executivos",
        content: "Painéis de controle para diferentes públicos:",
        items: [
          "Visão geral de saúde da infraestrutura",
          "SLAs e indicadores de disponibilidade",
          "Tendências de consumo e capacidade",
          "Alertas e incidentes em andamento"
        ]
      },
      {
        title: "Alertas e Notificações",
        content: "Sistema de alertas configurado para resposta rápida:",
        items: [
          "Alertas por severidade (crítico, alto, médio, baixo)",
          "Notificações via e-mail, SMS e Telegram",
          "Escalação automática para equipes de plantão",
          "Integração com GLPI para abertura de chamados"
        ]
      }
    ]
  },
  "backup": {
    title: "Gestão de Backup e Proteção de Dados",
    description: "Veritas NetBackup com arquitetura e política baseada em tiering por tipo de serviço.",
    icon: HardDrive,
    color: "from-emerald-600 to-teal-700",
    sections: [
      {
        title: "Plataforma de Backup",
        content: "A ANA utiliza o Veritas NetBackup como solução corporativa de backup e recuperação de dados, garantindo proteção abrangente de todo o ambiente.",
        items: [
          "Backup de servidores físicos e virtuais",
          "Proteção de bancos de dados (Oracle, PostgreSQL, SQL Server)",
          "Backup de sistemas em nuvem (OCI, AWS, Azure)",
          "Integração com ambientes OpenShift e containers"
        ],
        highlight: true
      },
      {
        title: "Estratégia de Tiering",
        content: "Política de backup diferenciada por tipo de serviço para otimizar recursos de storage:",
        cards: [
          { icon: Shield, title: "Tier 1 - Crítico", description: "Backup diário, retenção 90 dias, replicação cross-site, RPO 4h / RTO 2h" },
          { icon: Database, title: "Tier 2 - Importante", description: "Backup diário, retenção 60 dias, cópia off-site, RPO 8h / RTO 4h" },
          { icon: FileText, title: "Tier 3 - Padrão", description: "Backup semanal, retenção 30 dias, RPO 24h / RTO 8h" }
        ]
      },
      {
        title: "RTO e RPO",
        content: "Definição clara de objetivos de recuperação:",
        items: [
          "RPO (Recovery Point Objective): tempo máximo de perda de dados aceitável",
          "RTO (Recovery Time Objective): tempo máximo para restauração do serviço",
          "Testes regulares de recuperação para validar SLAs",
          "Documentação de procedimentos de restore"
        ]
      },
      {
        title: "Recuperação de Desastres (DR)",
        content: "Estratégia para continuidade de negócios:",
        items: [
          "Site secundário para sistemas críticos",
          "Replicação assíncrona de dados",
          "Planos de contingência documentados",
          "Exercícios de DR periódicos"
        ]
      }
    ]
  },
  "central-servicos": {
    title: "Central de Serviços (GLPI)",
    description: "Ferramenta central de gestão de demandas, CMDB e catálogo de serviços alinhado ao ITIL.",
    icon: ClipboardList,
    color: "from-purple-600 to-violet-700",
    sections: [
      {
        title: "GLPI como Central de Serviços",
        content: "A unificação das solicitações em uma única Central de Serviços, implementada pela COOPI, alinhou a operação com as melhores práticas de ITIL da própria STI, garantindo rastreabilidade, SLAs definidos e uma base de dados de gerenciamento de configuração (CMDB) fidedigna.",
        items: [
          "Ponto único de contato para todas as demandas de TI",
          "Catálogo de serviços padronizado",
          "Workflow de aprovação e atendimento",
          "Métricas de desempenho e satisfação"
        ],
        highlight: true
      },
      {
        title: "Processos ITIL Implementados",
        content: "Processos formalizados seguindo as melhores práticas:",
        cards: [
          { icon: ClipboardList, title: "Gestão de Incidentes", description: "Registro, classificação, diagnóstico e resolução de incidentes." },
          { icon: Settings, title: "Gestão de Mudanças", description: "Controle de alterações na infraestrutura com análise de risco." },
          { icon: FileText, title: "Gestão de Problemas", description: "Análise de causa raiz e prevenção de recorrência." },
          { icon: Layers, title: "CMDB Integrado", description: "Base de configuração unificada com inventário de ativos." }
        ]
      },
      {
        title: "SLAs Definidos",
        content: "Acordos de nível de serviço por categoria de chamado:",
        items: [
          "Crítico: resposta em 15 min, resolução em 2h",
          "Alto: resposta em 30 min, resolução em 4h",
          "Médio: resposta em 2h, resolução em 8h",
          "Baixo: resposta em 4h, resolução em 24h"
        ]
      },
      {
        title: "Acesso ao GLPI",
        content: "A Central de Serviços está disponível para todos os colaboradores da ANA:",
        externalLink: {
          url: "https://glpi.ana.gov.br",
          label: "Acessar GLPI"
        }
      }
    ]
  }
};

const sidebarLinks = [
  { label: "Gestão de Ativos (SACM)", href: "/gestao-infra/ativos", icon: Layers },
  { label: "Monitoramento", href: "/gestao-infra/monitoramento", icon: Monitor },
  { label: "Gestão de Backup", href: "/gestao-infra/backup", icon: HardDrive },
  { label: "Central de Serviços", href: "/gestao-infra/central-servicos", icon: ClipboardList },
];

export default function GestaoInfraPage() {
  const { slug } = useParams<{ slug: string }>();
  const content = slug ? gestaoContent[slug] : null;

  if (!content) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4 text-center">
            <Activity className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
            <h1 className="text-2xl font-bold text-foreground mb-2">
              Conteúdo não encontrado
            </h1>
            <p className="text-muted-foreground mb-6">
              A página solicitada não está disponível.
            </p>
            <Link
              to="/gestao-infra/ativos"
              className="text-accent hover:underline inline-flex items-center gap-2"
            >
              Ir para Gestão de Ativos <ArrowRight className="w-4 h-4" />
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
              Gestão de Infra e Ops
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
                    <Activity className="w-5 h-5 text-accent" />
                    Gestão de Infra
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <nav className="flex flex-col">
                    {sidebarLinks.map((link) => {
                      const LinkIcon = link.icon;
                      const isActive = `/gestao-infra/${slug}` === link.href;
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

              {/* Tools Card */}
              <Card className="mt-4 border-accent/30 bg-accent/5">
                <CardContent className="p-4">
                  <h4 className="font-medium text-sm mb-3 flex items-center gap-2">
                    <Monitor className="w-4 h-4 text-accent" />
                    Ferramentas
                  </h4>
                  <div className="space-y-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <img src="https://www.zabbix.com/img/favicon.ico" alt="Zabbix" className="w-4 h-4" />
                      <span>Zabbix</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <img src="https://grafana.com/favicon.ico" alt="Grafana" className="w-4 h-4" />
                      <span>Grafana</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <img src="https://glpi-project.org/wp-content/uploads/2021/09/cropped-glpi-favicon-32x32.png" alt="GLPI" className="w-4 h-4" />
                      <span>GLPI</span>
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
                            <div key={i} className="p-4 rounded-lg bg-muted/50 border border-border">
                              <div className="flex items-center gap-3 mb-2">
                                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                                  <CardIcon className="w-5 h-5 text-accent" />
                                </div>
                                <span className="font-medium text-foreground">{card.title}</span>
                              </div>
                              <p className="text-sm text-muted-foreground">{card.description}</p>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {section.externalLink && (
                      <div className="mt-4">
                        <Button variant="outline" asChild>
                          <a href={section.externalLink.url} target="_blank" rel="noopener noreferrer">
                            {section.externalLink.label}
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </a>
                        </Button>
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
