import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Server, 
  Settings, 
  RefreshCw, 
  LayoutGrid,
  CheckCircle,
  ArrowRight,
  Shield,
  Eye,
  GitBranch,
  Boxes
} from "lucide-react";

const sustentacaoContent: Record<string, {
  title: string;
  description: string;
  icon: React.ElementType;
  sections: Array<{
    title: string;
    content: string;
    items?: string[];
    highlight?: boolean;
  }>;
}> = {
  "plataforma": {
    title: "Plataforma Padrão (OpenShift)",
    description: "Red Hat OpenShift como plataforma corporativa padrão para containers e orquestração.",
    icon: Server,
    sections: [
      {
        title: "Red Hat OpenShift",
        content: "O OpenShift é a plataforma corporativa padrão da ANA para execução de aplicações containerizadas:",
        items: [
          "Kubernetes enterprise-grade com suporte Red Hat",
          "Segurança integrada desde o desenvolvimento até produção",
          "Observabilidade nativa com métricas e logs centralizados",
          "Automação de deployments e rollbacks"
        ],
        highlight: true
      },
      {
        title: "Benefícios da Plataforma",
        content: "Vantagens de utilizar o OpenShift como plataforma padrão:",
        items: [
          "Governança centralizada de containers e imagens",
          "Suporte corporativo 24x7 da Red Hat",
          "Integração nativa com ferramentas de CI/CD",
          "Escalabilidade horizontal automática"
        ]
      },
      {
        title: "Ambientes Disponíveis",
        content: "Clusters OpenShift disponíveis para as equipes:",
        items: [
          "Desenvolvimento/Homologação (dev-hmg): Testes e validações",
          "Produção (prd): Aplicações em operação",
          "OKD nos provedores de nuvem (OCI, AWS)"
        ]
      }
    ]
  },
  "modelo-operacional": {
    title: "Modelo Operacional (SRE/DevSecOps)",
    description: "Modelo operacional baseado em SRE e DevSecOps para alta disponibilidade e segurança.",
    icon: Settings,
    sections: [
      {
        title: "SRE - Site Reliability Engineering",
        content: "Práticas de SRE adotadas pela ANA para garantir confiabilidade:",
        items: [
          "SLOs e SLIs definidos para serviços críticos",
          "Error budgets para balancear inovação e estabilidade",
          "Postmortems sem culpa para aprendizado contínuo",
          "Automação de tarefas operacionais repetitivas"
        ],
        highlight: true
      },
      {
        title: "DevSecOps",
        content: "Segurança integrada em todo o ciclo de desenvolvimento:",
        items: [
          "Análise de vulnerabilidades em imagens (Quay)",
          "Políticas de segurança com ACS (Advanced Cluster Security)",
          "Scan de código e dependências automatizado",
          "Compliance como código"
        ]
      },
      {
        title: "Observabilidade Centralizada",
        content: "Stack de observabilidade para monitoramento proativo:",
        items: [
          "Prometheus para coleta de métricas",
          "Grafana para dashboards e visualização",
          "Alertmanager para gestão de alertas",
          "Logging centralizado com ELK/Loki"
        ]
      },
      {
        title: "Automação e GitOps",
        content: "Ferramentas de automação adotadas:",
        items: [
          "Ansible para automação de infraestrutura",
          "ArgoCD para deployments GitOps",
          "Tekton para pipelines de CI/CD",
          "Helm para empacotamento de aplicações"
        ]
      }
    ]
  },
  "ciclo-vida": {
    title: "Ciclo de Vida das Aplicações",
    description: "Gestão completa do ciclo de vida das aplicações na plataforma.",
    icon: RefreshCw,
    sections: [
      {
        title: "Provisionamento",
        content: "Processo de criação e configuração de novas aplicações:",
        items: [
          "Solicitação via catálogo de serviços",
          "Provisionamento automatizado de namespaces",
          "Configuração de quotas e limites",
          "Integração com repositórios Git"
        ],
        highlight: true
      },
      {
        title: "Operação",
        content: "Atividades de operação contínua das aplicações:",
        items: [
          "Monitoramento de saúde e performance",
          "Gestão de configurações e secrets",
          "Escalabilidade sob demanda",
          "Backup e recuperação de dados"
        ]
      },
      {
        title: "Atualizações",
        content: "Processo de atualização e manutenção:",
        items: [
          "Rolling updates sem downtime",
          "Canary deployments para validação gradual",
          "Rollback automatizado em caso de falhas",
          "Janelas de manutenção planejadas"
        ]
      },
      {
        title: "Monitoramento",
        content: "Acompanhamento contínuo das aplicações:",
        items: [
          "Dashboards de performance em tempo real",
          "Alertas configuráveis por severidade",
          "Análise de logs e traces",
          "Relatórios de disponibilidade (SLA)"
        ]
      },
      {
        title: "Descomissionamento",
        content: "Processo de descontinuação de aplicações:",
        items: [
          "Avaliação de dependências e impactos",
          "Backup de dados e configurações",
          "Remoção controlada de recursos",
          "Documentação de lições aprendidas"
        ]
      }
    ]
  },
  "catalogo-servicos": {
    title: "Catálogo de Serviços de Plataforma",
    description: "Self-service para desenvolvedores com templates e ambientes padronizados.",
    icon: LayoutGrid,
    sections: [
      {
        title: "Self-Service para Desenvolvedores",
        content: "Portal de autoatendimento para equipes de desenvolvimento:",
        items: [
          "Criação de projetos e namespaces",
          "Solicitação de recursos computacionais",
          "Provisionamento de bancos de dados",
          "Configuração de pipelines CI/CD"
        ],
        highlight: true
      },
      {
        title: "Templates Padronizados",
        content: "Templates disponíveis para acelerar o desenvolvimento:",
        items: [
          "Aplicações Java/Spring Boot",
          "Aplicações Python/FastAPI",
          "Aplicações Node.js/Express",
          "Microsserviços com Quarkus"
        ]
      },
      {
        title: "Ambientes Controlados",
        content: "Características dos ambientes provisionados:",
        items: [
          "Isolamento por namespace e projeto",
          "Políticas de rede configuradas",
          "Integração com AD/LDAP corporativo",
          "Auditoria de acessos e operações"
        ]
      },
      {
        title: "Serviços Disponíveis",
        content: "Serviços de plataforma que podem ser solicitados:",
        items: [
          "PostgreSQL como serviço",
          "Redis para cache distribuído",
          "RabbitMQ/Kafka para mensageria",
          "Elasticsearch para busca e logs"
        ]
      }
    ]
  }
};

const sidebarLinks = [
  { label: "Plataforma Padrão (OpenShift)", href: "/sustentacao/plataforma", icon: Server },
  { label: "Modelo Operacional (SRE/DevSecOps)", href: "/sustentacao/modelo-operacional", icon: Settings },
  { label: "Ciclo de Vida das Aplicações", href: "/sustentacao/ciclo-vida", icon: RefreshCw },
  { label: "Catálogo de Serviços", href: "/sustentacao/catalogo-servicos", icon: LayoutGrid },
];

export default function SustentacaoPage() {
  const { slug } = useParams<{ slug: string }>();
  const content = slug ? sustentacaoContent[slug] : null;

  if (!content) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4 text-center">
            <Server className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
            <h1 className="text-2xl font-bold text-foreground mb-2">
              Conteúdo não encontrado
            </h1>
            <p className="text-muted-foreground mb-6">
              A página solicitada não está disponível.
            </p>
            <Link
              to="/sustentacao/plataforma"
              className="text-accent hover:underline inline-flex items-center gap-2"
            >
              Ir para Plataforma Padrão <ArrowRight className="w-4 h-4" />
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
      <section className="pt-32 pb-16 bg-gradient-to-br from-ana-blue-dark via-ana-blue to-ana-blue-light">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-2xl bg-primary-foreground/20 flex items-center justify-center">
              <IconComponent className="w-8 h-8 text-primary-foreground" />
            </div>
            <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground border-0">
              Sustentação de Sistemas
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            {content.title}
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl">
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
                    <Boxes className="w-5 h-5 text-accent" />
                    Sustentação
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <nav className="flex flex-col">
                    {sidebarLinks.map((link) => {
                      const LinkIcon = link.icon;
                      const isActive = `/sustentacao/${slug}` === link.href;
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

              {/* Quick Info Card */}
              <Card className="mt-4 border-accent/30 bg-accent/5">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Shield className="w-5 h-5 text-accent" />
                    <span className="font-medium text-sm">DevSecOps</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Segurança integrada em todo o ciclo de vida das aplicações.
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