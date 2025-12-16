import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Shield, 
  Network, 
  Lightbulb, 
  Sparkles, 
  FolderOpen,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  ExternalLink
} from "lucide-react";

const aiContent: Record<string, {
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
  "governanca": {
    title: "Governança de IA",
    description: "Diretrizes institucionais para uso responsável de Inteligência Artificial na ANA.",
    icon: Shield,
    sections: [
      {
        title: "Princípios Fundamentais",
        content: "A ANA adota princípios rigorosos para garantir o uso ético e responsável da IA:",
        items: [
          "Ética: Respeito aos direitos fundamentais e valores institucionais",
          "Transparência: Decisões de IA devem ser explicáveis e auditáveis",
          "Rastreabilidade: Registro completo do ciclo de vida dos modelos",
          "Supervisão Humana: Humanos sempre no controle de decisões críticas"
        ],
        highlight: true
      },
      {
        title: "Gestão do Ciclo de Vida",
        content: "Fases do ciclo de vida de soluções de IA na ANA:",
        items: [
          "Planejamento: Definição de escopo, requisitos e viabilidade",
          "Desenvolvimento: Construção, treinamento e validação de modelos",
          "Validação: Testes de qualidade, viés e conformidade",
          "Implantação: Deploy controlado com monitoramento ativo",
          "Monitoramento: Acompanhamento contínuo de performance e deriva"
        ]
      },
      {
        title: "Conformidade e Regulamentação",
        content: "Todas as soluções de IA devem estar em conformidade com:",
        items: [
          "Lei Geral de Proteção de Dados (LGPD)",
          "Estratégia Brasileira de Inteligência Artificial (EBIA)",
          "Políticas internas de segurança da informação",
          "Diretrizes do Governo Federal para uso de IA"
        ]
      }
    ]
  },
  "arquitetura": {
    title: "Arquitetura de IA",
    description: "Padrões arquiteturais e infraestrutura para soluções de Inteligência Artificial.",
    icon: Network,
    sections: [
      {
        title: "Padrões Arquiteturais",
        content: "A arquitetura de IA da ANA segue padrões modernos e escaláveis:",
        items: [
          "Arquitetura orientada a microsserviços para modelos de ML",
          "Containers gerenciados via OpenShift para escalabilidade",
          "APIs RESTful para exposição de modelos",
          "Pipelines de MLOps para CI/CD de modelos"
        ],
        highlight: true
      },
      {
        title: "Integração com Ecossistema",
        content: "Pontos de integração da arquitetura de IA:",
        items: [
          "Data Lake institucional para acesso a dados brutos",
          "APIs corporativas para consumo de serviços",
          "Microsserviços de negócio para orquestração",
          "Plataformas de visualização para dashboards"
        ]
      },
      {
        title: "Stack Tecnológica",
        content: "Tecnologias homologadas para desenvolvimento de IA:",
        items: [
          "Python como linguagem principal",
          "TensorFlow, PyTorch e Scikit-learn para ML",
          "MLflow para gerenciamento de experimentos",
          "Kubernetes/OpenShift para orquestração de containers"
        ]
      }
    ]
  },
  "casos-uso": {
    title: "Casos de Uso de IA",
    description: "Aplicações práticas de Inteligência Artificial nos processos da ANA.",
    icon: Lightbulb,
    sections: [
      {
        title: "Apoio à Tomada de Decisão",
        content: "Soluções que auxiliam gestores em decisões estratégicas:",
        items: [
          "Análise preditiva de disponibilidade hídrica",
          "Previsão de demanda de recursos",
          "Identificação de padrões em séries históricas",
          "Alertas inteligentes baseados em indicadores"
        ],
        highlight: true
      },
      {
        title: "Automação de Processos",
        content: "Automação inteligente de tarefas operacionais:",
        items: [
          "Classificação automática de documentos",
          "Extração de informações de relatórios",
          "Triagem e roteamento de demandas",
          "Validação automática de dados cadastrais"
        ]
      },
      {
        title: "Monitoramento Ambiental e Hídrico",
        content: "Aplicações de IA para gestão de recursos hídricos:",
        items: [
          "Detecção de anomalias em séries de vazão",
          "Previsão de eventos hidrológicos extremos",
          "Análise de imagens de satélite para monitoramento",
          "Modelagem de qualidade da água"
        ]
      },
      {
        title: "Classificação por Uso",
        content: "Os casos de uso são classificados conforme seu escopo:",
        items: [
          "Uso Interno: Apoio às equipes técnicas da ANA",
          "Uso Institucional: Suporte aos processos finalísticos",
          "Uso Estratégico: Subsídio à alta gestão e políticas públicas"
        ]
      }
    ]
  },
  "generativa": {
    title: "IA Generativa",
    description: "Diretrizes e boas práticas para uso de IA Generativa na ANA.",
    icon: Sparkles,
    sections: [
      {
        title: "Diretrizes de Uso",
        content: "Regras para utilização de IA generativa no ambiente institucional:",
        items: [
          "Uso permitido apenas em ferramentas homologadas pela STI",
          "Proibido inserir dados sensíveis ou classificados em prompts",
          "Revisão humana obrigatória para conteúdos gerados",
          "Documentação de casos de uso e resultados"
        ],
        highlight: true
      },
      {
        title: "Segurança da Informação",
        content: "Controles de segurança para IA generativa:",
        items: [
          "Não utilizar dados pessoais ou sigilosos",
          "Evitar informações estratégicas ou não publicadas",
          "Verificar política de privacidade das ferramentas",
          "Manter logs de interações para auditoria"
        ]
      },
      {
        title: "Boas Práticas de Prompts",
        content: "Recomendações para criação de prompts eficazes:",
        items: [
          "Seja específico e contextualizado nas instruções",
          "Divida tarefas complexas em etapas menores",
          "Solicite formato de saída desejado",
          "Valide e revise sempre os resultados gerados"
        ]
      }
    ]
  },
  "catalogo": {
    title: "Catálogo de Soluções de IA",
    description: "Repositório institucional de soluções de Inteligência Artificial da ANA.",
    icon: FolderOpen,
    sections: [
      {
        title: "Sobre o Catálogo",
        content: "O Catálogo de Soluções de IA centraliza todas as iniciativas de IA da ANA:",
        items: [
          "Registro de modelos desenvolvidos e em operação",
          "Documentação técnica e de negócio",
          "Informações de propriedade e responsabilidade",
          "Histórico de versões e atualizações"
        ],
        highlight: true
      },
      {
        title: "Benefícios do Reuso",
        content: "Vantagens de utilizar soluções catalogadas:",
        items: [
          "Redução de retrabalho e custos de desenvolvimento",
          "Compartilhamento de conhecimento entre unidades",
          "Padronização de abordagens e tecnologias",
          "Aceleração do time-to-market de novas soluções"
        ]
      },
      {
        title: "Como Contribuir",
        content: "Processo para incluir novas soluções no catálogo:",
        items: [
          "Preencher formulário de registro de solução",
          "Documentar requisitos e dependências",
          "Submeter para avaliação da equipe de IA",
          "Publicar após aprovação técnica"
        ]
      }
    ]
  }
};

const sidebarLinks = [
  { label: "Governança de IA", href: "/ia/governanca", icon: Shield },
  { label: "Arquitetura de IA", href: "/ia/arquitetura", icon: Network },
  { label: "Casos de Uso de IA", href: "/ia/casos-uso", icon: Lightbulb },
  { label: "IA Generativa", href: "/ia/generativa", icon: Sparkles },
  { label: "Catálogo de Soluções de IA", href: "/ia/catalogo", icon: FolderOpen },
];

export default function AIPage() {
  const { slug } = useParams<{ slug: string }>();
  const content = slug ? aiContent[slug] : null;

  if (!content) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4 text-center">
            <Brain className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
            <h1 className="text-2xl font-bold text-foreground mb-2">
              Conteúdo não encontrado
            </h1>
            <p className="text-muted-foreground mb-6">
              A página solicitada não está disponível.
            </p>
            <Link
              to="/ia/governanca"
              className="text-accent hover:underline inline-flex items-center gap-2"
            >
              Ir para Governança de IA <ArrowRight className="w-4 h-4" />
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
              Inteligência Artificial
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
                    <Brain className="w-5 h-5 text-accent" />
                    Inteligência Artificial
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <nav className="flex flex-col">
                    {sidebarLinks.map((link) => {
                      const LinkIcon = link.icon;
                      const isActive = `/ia/${slug}` === link.href;
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

              {/* Important Notice */}
              <Card className="border-amber-500/50 bg-amber-500/10">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">
                        Atenção
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        O uso de Inteligência Artificial na ANA deve seguir as diretrizes 
                        institucionais e estar em conformidade com a LGPD e demais normativas 
                        aplicáveis. Em caso de dúvidas, consulte a equipe de Governança de IA.
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