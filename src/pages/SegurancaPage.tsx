import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Eye,
  Lock,
  AlertTriangle,
  FileSearch,
  Server,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Scan,
  Bug,
  ShieldCheck,
  Activity
} from "lucide-react";

const segurancaContent: Record<string, {
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
    externalLink?: { url: string; label: string };
  }>;
}> = {
  "visao-geral": {
    title: "Segurança Cibernética",
    description: "Visão geral da estratégia de segurança da informação e proteção contra ameaças.",
    icon: Shield,
    color: "from-red-600 to-rose-700",
    sections: [
      {
        title: "Estratégia de Segurança",
        content: "A COOPI adota uma abordagem em camadas para proteção da infraestrutura de TI da ANA, combinando ferramentas modernas de detecção e resposta com práticas de segurança Zero Trust.",
        items: [
          "Defesa em profundidade com múltiplas camadas de proteção",
          "Monitoramento contínuo de ameaças 24x7",
          "Resposta automatizada a incidentes de segurança",
          "Gestão de vulnerabilidades proativa",
          "Conformidade com normas e frameworks de segurança"
        ],
        highlight: true
      },
      {
        title: "Plataformas de Segurança",
        content: "Stack de ferramentas de segurança adotado pela ANA:",
        cards: [
          { icon: Eye, title: "Trend Vision One (XDR)", description: "Plataforma principal de detecção e resposta estendida, correlacionando eventos de múltiplas fontes." },
          { icon: Activity, title: "Wazuh (SIEM)", description: "Security Information and Event Management para monitoramento de logs e conformidade." },
          { icon: ShieldCheck, title: "Red Hat ACS", description: "Advanced Cluster Security para proteção de containers e Kubernetes." },
          { icon: Scan, title: "Trivy", description: "Scanner de vulnerabilidades para imagens de container e código." }
        ]
      },
      {
        title: "Modelo Zero Trust",
        content: "Princípios de segurança Zero Trust implementados:",
        items: [
          "Nunca confiar, sempre verificar",
          "Autenticação multifator obrigatória",
          "Microsegmentação de rede",
          "Privilégio mínimo para acessos",
          "Verificação contínua de conformidade"
        ]
      }
    ]
  },
  "xdr": {
    title: "Trend Vision One (XDR)",
    description: "Plataforma de detecção e resposta estendida para proteção contra ameaças avançadas.",
    icon: Eye,
    color: "from-red-600 to-orange-600",
    sections: [
      {
        title: "Detecção e Resposta Estendida",
        content: "O Trend Vision One é a plataforma principal de XDR (Extended Detection and Response) da ANA, oferecendo visibilidade unificada e resposta automatizada a ameaças.",
        items: [
          "Correlação de eventos de múltiplas fontes (endpoints, rede, cloud)",
          "Detecção de ameaças avançadas com IA e machine learning",
          "Resposta automatizada a incidentes de segurança",
          "Investigação forense e análise de causa raiz"
        ],
        highlight: true
      },
      {
        title: "Capacidades XDR",
        content: "Funcionalidades oferecidas pela plataforma:",
        cards: [
          { icon: Shield, title: "Endpoint Protection", description: "Proteção de endpoints contra malware, ransomware e ameaças avançadas." },
          { icon: Activity, title: "Network Detection", description: "Monitoramento de tráfego de rede para detecção de comportamentos anômalos." },
          { icon: Server, title: "Cloud Security", description: "Proteção de workloads em nuvem e containers." },
          { icon: FileSearch, title: "Threat Intelligence", description: "Inteligência de ameaças atualizada em tempo real." }
        ]
      },
      {
        title: "Benefícios",
        content: "Vantagens da adoção do Trend Vision One:",
        items: [
          "Visibilidade centralizada de todo o ambiente",
          "Redução do tempo de detecção e resposta (MTTD/MTTR)",
          "Automação de processos de segurança",
          "Conformidade com regulamentações",
          "Suporte especializado 24x7"
        ]
      },
      {
        title: "Acesso à Plataforma",
        content: "Console de gerenciamento do Trend Vision One:",
        externalLink: {
          url: "https://portal.xdr.trendmicro.com",
          label: "Acessar Trend Vision One"
        }
      }
    ]
  },
  "siem": {
    title: "Wazuh (SIEM)",
    description: "Security Information and Event Management para monitoramento de logs e conformidade.",
    icon: Activity,
    color: "from-blue-600 to-indigo-700",
    sections: [
      {
        title: "SIEM Corporativo",
        content: "O Wazuh é implementado como solução de SIEM da ANA, centralizando logs de segurança e fornecendo visibilidade sobre eventos de conformidade.",
        items: [
          "Coleta e correlação de logs de múltiplas fontes",
          "Detecção de intrusões e comportamentos suspeitos",
          "Monitoramento de integridade de arquivos (FIM)",
          "Avaliação de conformidade (PCI-DSS, GDPR, LGPD)"
        ],
        highlight: true
      },
      {
        title: "Funcionalidades",
        content: "Capacidades do Wazuh implementadas na ANA:",
        cards: [
          { icon: FileSearch, title: "Log Analysis", description: "Análise centralizada de logs de sistemas, aplicações e dispositivos de rede." },
          { icon: Bug, title: "Vulnerability Detection", description: "Detecção de vulnerabilidades em sistemas e aplicações." },
          { icon: Lock, title: "Compliance Monitoring", description: "Monitoramento contínuo de conformidade com políticas de segurança." },
          { icon: AlertTriangle, title: "Threat Detection", description: "Detecção de ameaças baseada em regras e machine learning." }
        ]
      },
      {
        title: "Integração com Infraestrutura",
        content: "O Wazuh está integrado com diversos componentes da infraestrutura:",
        items: [
          "Servidores Linux e Windows",
          "Clusters OpenShift e containers",
          "Firewalls e dispositivos de rede",
          "Sistemas em nuvem (OCI, AWS, Azure)",
          "Aplicações críticas da ANA"
        ]
      },
      {
        title: "Dashboards e Relatórios",
        content: "Visualizações disponíveis para equipes de segurança e gestão:",
        items: [
          "Dashboard de eventos de segurança em tempo real",
          "Relatórios de conformidade automatizados",
          "Alertas configuráveis por severidade",
          "Histórico de investigações e incidentes"
        ]
      }
    ]
  },
  "devsecops": {
    title: "Segurança de Pipeline (DevSecOps)",
    description: "Ferramentas de segurança integradas ao ciclo de desenvolvimento.",
    icon: Lock,
    color: "from-purple-600 to-violet-700",
    sections: [
      {
        title: "DevSecOps na ANA",
        content: "A segurança é integrada em todas as etapas do ciclo de desenvolvimento, desde o código até a produção, seguindo a filosofia de 'shift-left security'.",
        items: [
          "Análise de código estático (SAST)",
          "Scan de dependências e bibliotecas",
          "Verificação de imagens de container",
          "Políticas de segurança como código",
          "Gates de segurança em pipelines CI/CD"
        ],
        highlight: true
      },
      {
        title: "Ferramentas DevSecOps",
        content: "Stack de ferramentas de segurança integradas aos pipelines:",
        cards: [
          { icon: ShieldCheck, title: "Red Hat ACS", description: "Advanced Cluster Security para proteção de OpenShift e Kubernetes." },
          { icon: Bug, title: "SonarQube", description: "Análise de qualidade e segurança de código fonte." },
          { icon: Scan, title: "Trivy", description: "Scanner de vulnerabilidades para containers e IaC." },
          { icon: Server, title: "Quay", description: "Registry de imagens com scan de vulnerabilidades integrado." }
        ]
      },
      {
        title: "Red Hat Advanced Cluster Security (ACS)",
        content: "Plataforma de segurança para containers e Kubernetes:",
        items: [
          "Visibilidade de vulnerabilidades em tempo de build e runtime",
          "Políticas de segurança para deployments",
          "Detecção de anomalias em containers",
          "Conformidade com benchmarks de segurança",
          "Segmentação de rede para microsserviços"
        ]
      },
      {
        title: "Automação com Ansible",
        content: "Automação de configurações de segurança:",
        items: [
          "Hardening automatizado de servidores",
          "Aplicação de baselines de segurança",
          "Remediação automatizada de vulnerabilidades",
          "Playbooks para resposta a incidentes"
        ]
      }
    ]
  }
};

const sidebarLinks = [
  { label: "Visão Geral", href: "/seguranca/visao-geral", icon: Shield },
  { label: "Trend Vision One (XDR)", href: "/seguranca/xdr", icon: Eye },
  { label: "Wazuh (SIEM)", href: "/seguranca/siem", icon: Activity },
  { label: "DevSecOps", href: "/seguranca/devsecops", icon: Lock },
];

export default function SegurancaPage() {
  const { slug } = useParams<{ slug: string }>();
  const content = slug ? segurancaContent[slug] : null;

  if (!content) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4 text-center">
            <Shield className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
            <h1 className="text-2xl font-bold text-foreground mb-2">
              Conteúdo não encontrado
            </h1>
            <p className="text-muted-foreground mb-6">
              A página solicitada não está disponível.
            </p>
            <Link
              to="/seguranca/visao-geral"
              className="text-accent hover:underline inline-flex items-center gap-2"
            >
              Ir para Visão Geral <ArrowRight className="w-4 h-4" />
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
              Segurança Cibernética
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
                    <Shield className="w-5 h-5 text-accent" />
                    Segurança
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <nav className="flex flex-col">
                    {sidebarLinks.map((link) => {
                      const LinkIcon = link.icon;
                      const isActive = `/seguranca/${slug}` === link.href;
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

              {/* Quick Links */}
              <Card className="mt-4 border-red-500/30 bg-red-500/5">
                <CardContent className="p-4">
                  <h4 className="font-medium text-sm mb-3 flex items-center gap-2">
                    <ExternalLink className="w-4 h-4 text-red-500" />
                    Links Úteis
                  </h4>
                  <div className="space-y-2">
                    <a 
                      href="https://portal.xdr.trendmicro.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs text-muted-foreground hover:text-accent flex items-center gap-1"
                    >
                      Trend Vision One
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <a 
                      href="https://wazuh.ana.gov.br" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs text-muted-foreground hover:text-accent flex items-center gap-1"
                    >
                      Wazuh Dashboard
                      <ExternalLink className="w-3 h-3" />
                    </a>
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
