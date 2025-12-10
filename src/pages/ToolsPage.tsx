import { Link, useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Globe,
  Wrench,
  GitBranch,
  TestTube,
  CheckCircle,
  ExternalLink,
  Star,
} from "lucide-react";

const toolsContent = {
  portais: {
    title: "Portais Internos",
    description: "Portais e sistemas internos da área de TI.",
    icon: Globe,
    portals: [
      {
        name: "Portal de Serviços STI",
        description: "Central de solicitações e chamados de TI.",
        url: "#",
        featured: true,
      },
      {
        name: "Wiki Técnica",
        description: "Documentação colaborativa de projetos e procedimentos.",
        url: "#",
        featured: false,
      },
      {
        name: "Dashboard de Sistemas",
        description: "Monitoramento de disponibilidade dos sistemas.",
        url: "#",
        featured: false,
      },
      {
        name: "Portal de Indicadores",
        description: "KPIs e métricas de desenvolvimento.",
        url: "#",
        featured: false,
      },
    ],
  },
  dev: {
    title: "Ferramentas Dev",
    description: "Ferramentas e ambientes de desenvolvimento.",
    icon: Wrench,
    tools: [
      {
        name: "GitLab ANA",
        description: "Repositórios de código e CI/CD.",
        category: "Versionamento",
        url: "#",
      },
      {
        name: "SonarQube",
        description: "Análise de qualidade de código.",
        category: "Qualidade",
        url: "#",
      },
      {
        name: "Nexus Repository",
        description: "Gerenciador de artefatos e pacotes.",
        category: "Artefatos",
        url: "#",
      },
      {
        name: "Swagger Hub",
        description: "Documentação interativa de APIs.",
        category: "Documentação",
        url: "#",
      },
      {
        name: "Vault",
        description: "Gerenciamento de secrets e credenciais.",
        category: "Segurança",
        url: "#",
      },
      {
        name: "Harbor",
        description: "Registry de imagens Docker.",
        category: "Container",
        url: "#",
      },
    ],
  },
  repositorios: {
    title: "Repositórios",
    description: "Organização e acesso aos repositórios de código.",
    icon: GitBranch,
    sections: [
      {
        title: "Estrutura de Grupos",
        items: [
          "ana/frontend - aplicações web",
          "ana/backend - microserviços e APIs",
          "ana/infra - infraestrutura como código",
          "ana/data - pipelines de dados",
          "ana/mobile - aplicações móveis",
        ],
      },
      {
        title: "Templates Disponíveis",
        items: [
          "template-react-app - SPA com React",
          "template-spring-boot - API Java",
          "template-fastapi - API Python",
          "template-helm-chart - deploy K8s",
        ],
      },
      {
        title: "Boas Práticas",
        items: [
          "Branch protection ativado",
          "Code review obrigatório",
          "Pipeline de CI configurado",
          "README.md documentado",
        ],
      },
    ],
  },
  testes: {
    title: "Ambiente de Testes",
    description: "Ambientes para validação e homologação.",
    icon: TestTube,
    environments: [
      {
        name: "DEV",
        description: "Ambiente de desenvolvimento integrado.",
        status: "Disponível",
        refresh: "Contínuo",
      },
      {
        name: "HML",
        description: "Homologação para validação de releases.",
        status: "Disponível",
        refresh: "Semanal",
      },
      {
        name: "SANDBOX",
        description: "Ambiente isolado para experimentações.",
        status: "Disponível",
        refresh: "On-demand",
      },
      {
        name: "PERF",
        description: "Testes de performance e carga.",
        status: "Sob demanda",
        refresh: "Por solicitação",
      },
    ],
  },
};

const ToolsPage = () => {
  const { slug } = useParams();
  const content =
    toolsContent[slug as keyof typeof toolsContent] || toolsContent["portais"];
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
                Ferramentas
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
                  {Object.entries(toolsContent).map(([key, item]) => (
                    <Link
                      key={key}
                      to={`/ferramentas/${key}`}
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
            <div className="lg:col-span-2 space-y-6">
              {slug === "portais" &&
                "portals" in content &&
                content.portals?.map((portal, index) => (
                  <Card
                    key={index}
                    variant="feature"
                    className={portal.featured ? "border-accent/50" : ""}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="flex items-center gap-2 mb-2">
                            {portal.featured && (
                              <Star className="w-4 h-4 text-accent fill-accent" />
                            )}
                            {portal.name}
                          </CardTitle>
                          <p className="text-muted-foreground text-sm">
                            {portal.description}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={portal.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Acessar Portal
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}

              {slug === "dev" &&
                "tools" in content &&
                content.tools && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {content.tools.map((tool, index) => (
                      <Card key={index} variant="hover">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-3">
                            <h3 className="font-semibold text-foreground">
                              {tool.name}
                            </h3>
                            <Badge variant="secondary">{tool.category}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-4">
                            {tool.description}
                          </p>
                          <Button variant="ghost" size="sm" asChild>
                            <a
                              href={tool.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Acessar
                              <ExternalLink className="w-4 h-4 ml-2" />
                            </a>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}

              {slug === "repositorios" &&
                "sections" in content &&
                content.sections?.map((section, index) => (
                  <Card key={index} variant="feature">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <GitBranch className="w-5 h-5 text-accent" />
                        {section.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {section.items.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="flex items-start gap-3 text-muted-foreground font-mono text-sm"
                          >
                            <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}

              {slug === "testes" &&
                "environments" in content &&
                content.environments?.map((env, index) => (
                  <Card key={index} variant="feature">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="flex items-center gap-2 mb-2">
                            <TestTube className="w-5 h-5 text-accent" />
                            {env.name}
                          </CardTitle>
                          <p className="text-muted-foreground text-sm">
                            {env.description}
                          </p>
                        </div>
                        <Badge
                          variant={
                            env.status === "Disponível" ? "default" : "secondary"
                          }
                        >
                          {env.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        <strong>Refresh:</strong> {env.refresh}
                      </p>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ToolsPage;
