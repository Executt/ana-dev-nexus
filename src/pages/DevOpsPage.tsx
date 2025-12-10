import { Link, useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  GitBranch,
  Container,
  Rocket,
  Activity,
  Server,
  CheckCircle,
  ExternalLink,
} from "lucide-react";

const devopsContent = {
  pipelines: {
    title: "Pipelines (CI/CD)",
    description: "Configuração e gerenciamento de pipelines de integração e deploy contínuo.",
    icon: GitBranch,
    sections: [
      {
        title: "Estrutura do Pipeline",
        items: [
          "Build: compilação e validação de código",
          "Test: execução de testes unitários e integração",
          "Security Scan: análise de vulnerabilidades",
          "Package: criação de imagens Docker",
          "Deploy: publicação em ambiente alvo",
        ],
      },
      {
        title: "Ferramentas Utilizadas",
        items: [
          "GitLab CI/CD para orquestração",
          "SonarQube para análise de qualidade",
          "Trivy para scan de containers",
          "Nexus para artefatos",
          "ArgoCD para GitOps",
        ],
      },
    ],
  },
  kubernetes: {
    title: "Kubernetes no OpenShift",
    description: "Guia de deploy e gerenciamento de aplicações no cluster OpenShift da ANA.",
    icon: Container,
    sections: [
      {
        title: "Recursos Básicos",
        items: [
          "Pods e Deployments",
          "Services e Routes",
          "ConfigMaps e Secrets",
          "Persistent Volumes",
          "Resource Quotas",
        ],
      },
      {
        title: "Boas Práticas",
        items: [
          "Health checks (liveness/readiness)",
          "Resource limits obrigatórios",
          "Labels e annotations padronizados",
          "Network policies configuradas",
          "Pod disruption budgets",
        ],
      },
    ],
  },
  deploy: {
    title: "Deploy Automatizado",
    description: "Processo padronizado de deploy em ambientes da ANA.",
    icon: Rocket,
    sections: [
      {
        title: "Ambientes",
        items: [
          "Desenvolvimento (DEV): deploy automático a cada push",
          "Homologação (HML): deploy via merge request aprovado",
          "Produção (PRD): deploy via tag versionada + aprovação",
        ],
      },
      {
        title: "Estratégias de Deploy",
        items: [
          "Rolling Update como padrão",
          "Blue-Green para sistemas críticos",
          "Canary para releases de alto impacto",
          "Rollback automático em caso de falha",
        ],
      },
    ],
  },
  observabilidade: {
    title: "Observabilidade",
    description: "Monitoramento, logs e métricas das aplicações.",
    icon: Activity,
    sections: [
      {
        title: "Stack de Monitoramento",
        items: [
          "Prometheus para coleta de métricas",
          "Grafana para dashboards",
          "Alertmanager para alertas",
          "Elasticsearch para logs centralizados",
          "Jaeger para tracing distribuído",
        ],
      },
      {
        title: "Métricas Obrigatórias",
        items: [
          "Request rate (requisições/segundo)",
          "Error rate (taxa de erros)",
          "Latency (p50, p95, p99)",
          "Saturation (CPU, memória)",
          "Custom business metrics",
        ],
      },
    ],
  },
  iac: {
    title: "Infraestrutura como Código",
    description: "Provisionamento automatizado de infraestrutura.",
    icon: Server,
    sections: [
      {
        title: "Ferramentas",
        items: [
          "Terraform para provisionamento cloud",
          "Ansible para configuração de servidores",
          "Helm para templates Kubernetes",
          "Kustomize para customizações",
        ],
      },
      {
        title: "Princípios",
        items: [
          "Versionamento de toda infraestrutura",
          "Ambientes definidos em código",
          "Revisão via merge requests",
          "Estado gerenciado remotamente",
          "Módulos reutilizáveis",
        ],
      },
    ],
  },
};

const DevOpsPage = () => {
  const { slug } = useParams();
  const content =
    devopsContent[slug as keyof typeof devopsContent] ||
    devopsContent["pipelines"];
  const Icon = content.icon;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-hero">
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 mb-6"
            asChild
          >
            <Link to="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao início
            </Link>
          </Button>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-2xl bg-primary-foreground/10 flex items-center justify-center">
              <Icon className="w-8 h-8 text-primary-foreground" />
            </div>
            <div>
              <p className="text-primary-foreground/70 text-sm font-medium">
                DevOps
              </p>
              <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground">
                {content.title}
              </h1>
            </div>
          </div>
          <p className="text-lg text-primary-foreground/80 max-w-2xl">
            {content.description}
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <Card variant="hover" className="sticky top-24">
                <CardHeader>
                  <CardTitle className="text-lg">Navegação</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {Object.entries(devopsContent).map(([key, item]) => (
                    <Link
                      key={key}
                      to={`/devops/${key}`}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                        slug === key
                          ? "bg-accent text-accent-foreground"
                          : "hover:bg-muted text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="text-sm font-medium">{item.title}</span>
                    </Link>
                  ))}
                </CardContent>
              </Card>
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {content.sections.map((section, index) => (
                <Card key={index} variant="feature">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon className="w-5 h-5 text-accent" />
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {section.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-start gap-3 text-muted-foreground"
                        >
                          <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}

              {/* Quick Actions */}
              <Card variant="hover">
                <CardHeader>
                  <CardTitle className="text-lg">Ações Rápidas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href="https://gitlab.ana.gov.br"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitLab ANA
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href="https://grafana.ana.gov.br"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Grafana
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href="https://openshift.ana.gov.br"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        OpenShift Console
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DevOpsPage;
