import { Link, useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Code2,
  Building2,
  Layers,
  CheckCircle,
  ArrowLeft,
  FileCode,
  ExternalLink,
} from "lucide-react";

const developmentContent = {
  "guias-rapidos": {
    title: "Guias Rápidos",
    description: "Comece a desenvolver rapidamente com nossos guias de início.",
    icon: BookOpen,
    sections: [
      {
        title: "Configuração do Ambiente",
        items: [
          "Instalação do Node.js e npm",
          "Configuração do Git e acesso aos repositórios",
          "Setup do VS Code com extensões recomendadas",
          "Configuração de variáveis de ambiente",
        ],
      },
      {
        title: "Primeiro Projeto",
        items: [
          "Criando projeto com template ANA",
          "Estrutura de pastas padrão",
          "Configuração de linting e formatação",
          "Primeiro commit e push",
        ],
      },
      {
        title: "Deploy Básico",
        items: [
          "Build da aplicação",
          "Configuração do pipeline CI/CD",
          "Deploy em ambiente de desenvolvimento",
          "Verificação e logs",
        ],
      },
    ],
  },
  "padroes-codigo": {
    title: "Padrões de Código",
    description: "Convenções e padrões de codificação adotados pela ANA.",
    icon: Code2,
    sections: [
      {
        title: "Convenções de Nomenclatura",
        items: [
          "CamelCase para variáveis e funções",
          "PascalCase para classes e componentes",
          "SCREAMING_SNAKE_CASE para constantes",
          "Prefixos para interfaces (I) e types (T)",
        ],
      },
      {
        title: "Estrutura de Arquivos",
        items: [
          "Organização por feature/domínio",
          "Componentes em /components",
          "Serviços em /services",
          "Utilitários em /utils",
        ],
      },
      {
        title: "Documentação de Código",
        items: [
          "JSDoc para funções públicas",
          "README.md obrigatório",
          "Changelog atualizado",
          "Comentários explicativos quando necessário",
        ],
      },
    ],
  },
  arquitetura: {
    title: "Arquitetura de Software",
    description: "Padrões arquiteturais e decisões de design utilizados.",
    icon: Building2,
    sections: [
      {
        title: "Arquitetura de Referência",
        items: [
          "Microserviços como padrão principal",
          "API Gateway centralizado",
          "Event-driven para comunicação assíncrona",
          "CQRS para serviços complexos",
        ],
      },
      {
        title: "Padrões de Design",
        items: [
          "Repository Pattern para acesso a dados",
          "Service Layer para lógica de negócio",
          "DTO para transferência de dados",
          "Factory para criação de objetos",
        ],
      },
      {
        title: "Comunicação entre Serviços",
        items: [
          "REST para comunicação síncrona",
          "Apache Kafka para eventos",
          "gRPC para alta performance",
          "GraphQL para agregação",
        ],
      },
    ],
  },
  frameworks: {
    title: "Frameworks Utilizados",
    description: "Stack tecnológica padrão da ANA.",
    icon: Layers,
    sections: [
      {
        title: "Frontend",
        items: [
          "React 18+ com TypeScript",
          "Next.js para SSR/SSG",
          "Tailwind CSS para estilização",
          "React Query para estado servidor",
        ],
      },
      {
        title: "Backend",
        items: [
          "Java 17+ com Spring Boot",
          "Python 3.11+ com FastAPI",
          "Node.js com NestJS",
          "Go para serviços de alta performance",
        ],
      },
      {
        title: "Dados e Infraestrutura",
        items: [
          "PostgreSQL como banco principal",
          "Redis para cache",
          "MongoDB para dados não-estruturados",
          "Elasticsearch para busca",
        ],
      },
    ],
  },
  "boas-praticas": {
    title: "Boas Práticas ANA",
    description: "Guia de boas práticas de desenvolvimento da instituição.",
    icon: CheckCircle,
    sections: [
      {
        title: "Qualidade de Código",
        items: [
          "Code review obrigatório",
          "Cobertura de testes mínima de 80%",
          "Análise estática com SonarQube",
          "Formatação automática (Prettier)",
        ],
      },
      {
        title: "Segurança",
        items: [
          "OWASP Top 10 como referência",
          "Secrets em vault seguro",
          "Autenticação via OAuth 2.0/OIDC",
          "Logs de auditoria obrigatórios",
        ],
      },
      {
        title: "Performance",
        items: [
          "Lazy loading de componentes",
          "Otimização de queries",
          "Cache estratégico",
          "Monitoramento de métricas",
        ],
      },
    ],
  },
};

const DevelopmentPage = () => {
  const { slug } = useParams();
  const content =
    developmentContent[slug as keyof typeof developmentContent] ||
    developmentContent["guias-rapidos"];
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
                Desenvolvimento
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
                  {Object.entries(developmentContent).map(([key, item]) => (
                    <Link
                      key={key}
                      to={`/desenvolvimento/${key}`}
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
                      <FileCode className="w-5 h-5 text-accent" />
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

              {/* Related Links */}
              <Card variant="hover">
                <CardHeader>
                  <CardTitle className="text-lg">Recursos Relacionados</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/ferramentas/repositorios">
                        Repositórios
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/devops/pipelines">
                        Pipelines CI/CD
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/apis/catalogo">
                        Catálogo de APIs
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Link>
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

export default DevelopmentPage;
