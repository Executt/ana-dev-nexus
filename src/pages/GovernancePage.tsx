import { Link, useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Database,
  BookOpen,
  GitMerge,
  ShieldCheck,
  Lock,
  CheckCircle,
  ExternalLink,
  AlertTriangle,
} from "lucide-react";

const governanceContent = {
  politica: {
    title: "Política de Dados da ANA",
    description: "Diretrizes e normas para gestão de dados institucionais.",
    icon: BookOpen,
    sections: [
      {
        title: "Princípios Fundamentais",
        items: [
          "Dados como ativo estratégico institucional",
          "Qualidade e integridade dos dados",
          "Privacidade e segurança por design",
          "Interoperabilidade e padrões abertos",
          "Transparência e rastreabilidade",
        ],
      },
      {
        title: "Classificação de Dados",
        items: [
          "Público: dados abertos para cidadãos",
          "Interno: uso exclusivo da ANA",
          "Restrito: acesso controlado por área",
          "Confidencial: proteção máxima",
        ],
      },
    ],
  },
  "data-catalog": {
    title: "Data Catalog",
    description: "Catálogo centralizado de datasets e metadados da ANA.",
    icon: Database,
    sections: [
      {
        title: "Datasets Principais",
        items: [
          "Estações de Monitoramento (2.500+ registros)",
          "Bacias Hidrográficas (12 regiões)",
          "Outorgas de Uso da Água (150.000+ registros)",
          "Qualidade da Água (séries históricas)",
          "Indicadores de Saneamento (5.570 municípios)",
        ],
      },
      {
        title: "Metadados Obrigatórios",
        items: [
          "Nome e descrição do dataset",
          "Data owner e data steward",
          "Frequência de atualização",
          "Classificação de sensibilidade",
          "Linhagem (data lineage)",
        ],
      },
    ],
  },
  lineage: {
    title: "Data Lineage",
    description: "Rastreabilidade e fluxo de dados entre sistemas.",
    icon: GitMerge,
    sections: [
      {
        title: "Componentes",
        items: [
          "Origem dos dados (source systems)",
          "Transformações aplicadas",
          "Destino e consumidores",
          "Impacto de mudanças",
          "Histórico de versões",
        ],
      },
      {
        title: "Ferramentas",
        items: [
          "Apache Atlas para catálogo",
          "Data lineage automatizado",
          "Visualização de fluxos",
          "Alertas de impacto",
        ],
      },
    ],
  },
  lgpd: {
    title: "LGPD Institucional",
    description: "Conformidade com a Lei Geral de Proteção de Dados.",
    icon: ShieldCheck,
    alert: {
      type: "warning",
      message:
        "Todo tratamento de dados pessoais deve ser registrado no ROPA (Registro de Operações de Tratamento).",
    },
    sections: [
      {
        title: "Bases Legais Utilizadas",
        items: [
          "Cumprimento de obrigação legal (Art. 7º, II)",
          "Execução de políticas públicas (Art. 7º, III)",
          "Legítimo interesse (Art. 7º, IX)",
          "Consentimento quando aplicável (Art. 7º, I)",
        ],
      },
      {
        title: "Direitos dos Titulares",
        items: [
          "Acesso aos dados pessoais",
          "Correção de dados incompletos",
          "Anonimização quando possível",
          "Portabilidade",
          "Revogação de consentimento",
        ],
      },
    ],
  },
  seguranca: {
    title: "Acesso e Segurança",
    description: "Controle de acesso e proteção de dados.",
    icon: Lock,
    sections: [
      {
        title: "Controle de Acesso",
        items: [
          "RBAC (Role-Based Access Control)",
          "Princípio do menor privilégio",
          "Revisão periódica de acessos",
          "Segregação de ambientes",
          "Logs de auditoria",
        ],
      },
      {
        title: "Criptografia",
        items: [
          "TLS 1.3 para dados em trânsito",
          "AES-256 para dados em repouso",
          "Chaves gerenciadas em HSM",
          "Rotação automática de credenciais",
        ],
      },
    ],
  },
};

const GovernancePage = () => {
  const { slug } = useParams();
  const content =
    governanceContent[slug as keyof typeof governanceContent] ||
    governanceContent["politica"];
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
                Governança de Dados
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
                  {Object.entries(governanceContent).map(([key, item]) => (
                    <Link
                      key={key}
                      to={`/governanca/${key}`}
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
              {/* Alert for LGPD page */}
              {slug === "lgpd" && (
                <Card className="border-amber-500/50 bg-amber-50">
                  <CardContent className="flex items-start gap-4 p-4">
                    <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <p className="text-amber-800 text-sm">
                      Todo tratamento de dados pessoais deve ser registrado no ROPA (Registro de Operações de Tratamento).
                    </p>
                  </CardContent>
                </Card>
              )}

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

              {/* Resources */}
              <Card variant="hover">
                <CardHeader>
                  <CardTitle className="text-lg">
                    Recursos e Documentos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="outline" size="sm" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        Política de Dados (PDF)
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        Data Catalog Portal
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        ROPA Template
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

export default GovernancePage;
