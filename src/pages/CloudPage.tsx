import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Cloud, 
  Database,
  Server,
  Globe,
  HardDrive,
  CheckCircle,
  ArrowRight,
  ExternalLink
} from "lucide-react";

const cloudContent: Record<string, {
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  sections: Array<{
    title: string;
    content: string;
    items?: string[];
    highlight?: boolean;
  }>;
}> = {
  "oci": {
    title: "Oracle Cloud Infrastructure (OCI)",
    description: "Infraestrutura Oracle para sistemas críticos e ambientes controlados.",
    icon: Database,
    color: "from-red-600 to-red-800",
    sections: [
      {
        title: "Serviços Utilizados",
        content: "Principais serviços OCI em uso na ANA:",
        items: [
          "EXACS (Exadata Cloud Service) para bancos de dados críticos",
          "OKE (Oracle Kubernetes Engine) para containers",
          "Object Storage para armazenamento de objetos",
          "Networking para conectividade segura"
        ],
        highlight: true
      },
      {
        title: "Clusters Kubernetes (OKD)",
        content: "Ambientes Kubernetes disponíveis na OCI:",
        items: [
          "Cluster dev-hmg: Desenvolvimento e homologação",
          "Cluster prd: Ambiente de produção",
          "Integração com OpenShift on-premise"
        ]
      },
      {
        title: "Finalidade",
        content: "Casos de uso principais na OCI:",
        items: [
          "Sistemas críticos com alta disponibilidade",
          "Bancos de dados Oracle com performance otimizada",
          "Ambientes controlados e auditáveis",
          "Workloads que requerem EXADATA"
        ]
      }
    ]
  },
  "aws": {
    title: "Amazon Web Services (AWS)",
    description: "Serviços AWS para bancos de dados, backup e aplicações de dados abertos.",
    icon: Cloud,
    color: "from-orange-500 to-orange-700",
    sections: [
      {
        title: "Serviços de Banco de Dados",
        content: "Serviços RDS em uso na ANA:",
        items: [
          "RDS SQL Server para aplicações legadas",
          "RDS PostgreSQL para novas aplicações",
          "Backups automatizados e replicação",
          "Multi-AZ para alta disponibilidade"
        ],
        highlight: true
      },
      {
        title: "Clusters Kubernetes (ROSA)",
        content: "Red Hat OpenShift Service on AWS:",
        items: [
          "Cluster dev-hmg: Desenvolvimento e homologação",
          "Cluster prd: Ambiente de produção",
          "Gerenciado pela Red Hat e AWS",
          "Integração nativa com serviços AWS"
        ]
      },
      {
        title: "Outros Serviços",
        content: "Serviços complementares utilizados:",
        items: [
          "S3 para repositório de backup",
          "EC2 para workloads específicos",
          "CloudFront para dados abertos",
          "Route 53 para DNS"
        ]
      },
      {
        title: "Aplicações Hospedadas",
        content: "Tipos de aplicações na AWS:",
        items: [
          "Portais de dados abertos",
          "APIs públicas de metadados",
          "Sistemas de backup e DR",
          "Aplicações web de baixa criticidade"
        ]
      }
    ]
  },
  "gcp": {
    title: "Google Cloud Platform (GCP)",
    description: "Plataforma Google para processamento geoespacial e dados ambientais.",
    icon: Globe,
    color: "from-blue-500 to-green-500",
    sections: [
      {
        title: "Google Earth Engine API",
        content: "Principal serviço GCP utilizado pela ANA:",
        items: [
          "Acesso à API do Google Earth Engine",
          "Processamento de imagens de satélite em escala",
          "Análise de séries temporais de dados ambientais",
          "Integração com dados do INPE e outras fontes"
        ],
        highlight: true
      },
      {
        title: "Processamento Geoespacial",
        content: "Aplicações de geoprocessamento:",
        items: [
          "Monitoramento de corpos d'água",
          "Análise de uso e cobertura do solo",
          "Detecção de mudanças ambientais",
          "Modelagem hidrológica espacializada"
        ]
      },
      {
        title: "Dados Ambientais e Hídricos",
        content: "Tipos de dados processados:",
        items: [
          "Imagens de satélite multiespectrais",
          "Dados de precipitação e evapotranspiração",
          "Índices de vegetação e água",
          "Modelos digitais de elevação"
        ]
      }
    ]
  },
  "azure": {
    title: "Microsoft Azure",
    description: "Plataforma Azure para Data Lake institucional e máquinas virtuais.",
    icon: HardDrive,
    color: "from-blue-600 to-cyan-500",
    sections: [
      {
        title: "Data Lake Institucional",
        content: "Azure como base do Data Lake da ANA:",
        items: [
          "Azure Data Lake Storage Gen2",
          "Armazenamento hierárquico de dados brutos",
          "Integração com ferramentas de analytics",
          "Governança de dados centralizada"
        ],
        highlight: true
      },
      {
        title: "Máquinas Virtuais",
        content: "VMs Azure em uso:",
        items: [
          "Workloads de processamento de dados",
          "Ambientes de desenvolvimento especializados",
          "Servidores de aplicação temporários",
          "Ambientes de teste e POC"
        ]
      },
      {
        title: "Integração com Ecossistema",
        content: "Integrações com outros serviços:",
        items: [
          "Azure Synapse para analytics",
          "Power BI para visualização",
          "Azure DevOps para CI/CD",
          "Active Directory para autenticação"
        ]
      }
    ]
  },
  "otimizacao": {
    title: "Otimização de Nuvem (COOPI)",
    description: "Estratégia institucional de otimização, racionalização e evolução do uso de serviços de nuvem na ANA.",
    icon: Server,
    color: "from-ana-blue to-ana-dark-blue",
    sections: [
      {
        title: "Visão Geral",
        content: "A nuvem é um dos pilares fundamentais da Transformação Digital da ANA. A COOPI lidera a governança, eficiência e sustentabilidade dos custos de nuvem, garantindo que os investimentos em tecnologia estejam alinhados aos objetivos estratégicos da Agência.",
        items: [
          "Nuvem como habilitador da modernização institucional",
          "Governança centralizada sob coordenação da COOPI",
          "Foco em eficiência operacional e financeira",
          "Alinhamento com a estratégia de TI da ANA"
        ],
        highlight: true
      },
      {
        title: "Princípios de Otimização",
        content: "Os princípios que norteiam a estratégia de otimização de nuvem:",
        items: [
          "Eficiência operacional: fazer mais com menos recursos",
          "Escalabilidade: crescer de forma sustentável conforme a demanda",
          "Segurança: proteção de dados e conformidade regulatória",
          "Governança: controle e visibilidade sobre todos os recursos",
          "Redução de custos: eliminar desperdícios e otimizar gastos",
          "Evitar vendor lock-in: manter flexibilidade entre provedores"
        ]
      },
      {
        title: "Linhas de Ação",
        content: "Principais iniciativas para otimização do ambiente de nuvem:",
        items: [
          "Consolidação e unificação de bancos de dados",
          "Containerização de workloads legados",
          "Migração gradual e planejada para plataformas modernas",
          "Uso preferencial de serviços gerenciados",
          "Redução de EC2 isoladas e recursos ociosos",
          "Adoção de OpenShift como plataforma padrão"
        ]
      },
      {
        title: "FinOps",
        content: "Práticas de gestão financeira de nuvem adotadas pela ANA:",
        items: [
          "Transparência de custos: visibilidade total dos gastos por área",
          "Pagamento por uso: modelo flexível de alocação de recursos",
          "Previsibilidade orçamentária: planejamento financeiro assertivo",
          "Otimização contínua: revisão periódica de recursos",
          "Apoio à tomada de decisão: dados para gestores e líderes"
        ]
      },
      {
        title: "Benefícios Esperados",
        content: "Resultados projetados com a implementação da estratégia:",
        items: [
          "Redução significativa de custos operacionais",
          "Simplificação do ambiente tecnológico",
          "Melhoria de desempenho das aplicações",
          "Aumento da confiabilidade dos serviços",
          "Sustentação tecnológica de longo prazo"
        ]
      }
    ]
  }
};

const sidebarLinks = [
  { label: "Oracle Cloud (OCI)", href: "/multinuvem/oci", icon: Database },
  { label: "Amazon Web Services (AWS)", href: "/multinuvem/aws", icon: Cloud },
  { label: "Google Cloud Platform (GCP)", href: "/multinuvem/gcp", icon: Globe },
  { label: "Microsoft Azure", href: "/multinuvem/azure", icon: HardDrive },
  { label: "Otimização de Nuvem (COOPI)", href: "/multinuvem/otimizacao", icon: Server },
];

export default function CloudPage() {
  const { slug } = useParams<{ slug: string }>();
  const content = slug ? cloudContent[slug] : null;

  if (!content) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4 text-center">
            <Cloud className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
            <h1 className="text-2xl font-bold text-foreground mb-2">
              Conteúdo não encontrado
            </h1>
            <p className="text-muted-foreground mb-6">
              A página solicitada não está disponível.
            </p>
            <Link
              to="/multinuvem/oci"
              className="text-accent hover:underline inline-flex items-center gap-2"
            >
              Ir para Oracle Cloud (OCI) <ArrowRight className="w-4 h-4" />
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
              Multinuvem
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
                    <Cloud className="w-5 h-5 text-accent" />
                    Multinuvem
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <nav className="flex flex-col">
                    {sidebarLinks.map((link) => {
                      const LinkIcon = link.icon;
                      const isActive = `/multinuvem/${slug}` === link.href;
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

              {/* Cloud Overview */}
              <Card className="mt-4">
                <CardContent className="p-4">
                  <h4 className="font-medium text-sm mb-3">Visão Geral</h4>
                  <div className="space-y-2 text-xs text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Provedores ativos:</span>
                      <span className="font-medium text-foreground">4</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Clusters K8s:</span>
                      <span className="font-medium text-foreground">6</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Estratégia:</span>
                      <span className="font-medium text-foreground">Multinuvem</span>
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
                  </CardContent>
                </Card>
              ))}

              {/* Cloud Comparison */}
              <Card>
                <CardHeader>
                  <CardTitle>Distribuição de Workloads</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-muted/50">
                      <div className="flex items-center gap-2 mb-2">
                        <Database className="w-5 h-5 text-red-600" />
                        <span className="font-medium">OCI</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Sistemas críticos, EXADATA, bancos Oracle
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/50">
                      <div className="flex items-center gap-2 mb-2">
                        <Cloud className="w-5 h-5 text-orange-500" />
                        <span className="font-medium">AWS</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        RDS, backup, dados abertos, ROSA
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/50">
                      <div className="flex items-center gap-2 mb-2">
                        <Globe className="w-5 h-5 text-green-500" />
                        <span className="font-medium">GCP</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Earth Engine, geoprocessamento
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/50">
                      <div className="flex items-center gap-2 mb-2">
                        <HardDrive className="w-5 h-5 text-blue-500" />
                        <span className="font-medium">Azure</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Data Lake, analytics, Power BI
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </main>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}