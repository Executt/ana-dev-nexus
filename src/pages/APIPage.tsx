import { Link, useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Plug,
  Lock,
  FileCode,
  Globe,
  Copy,
  ExternalLink,
} from "lucide-react";

const apiContent = {
  catalogo: {
    title: "Catálogo de APIs",
    description: "Lista completa de APIs disponíveis para integração.",
    apis: [
      {
        name: "API de Recursos Hídricos",
        version: "v2.1",
        status: "Produção",
        description:
          "Acesso a dados de bacias hidrográficas, estações e medições.",
        endpoints: 45,
        auth: "OAuth 2.0",
      },
      {
        name: "API de Outorgas",
        version: "v1.8",
        status: "Produção",
        description:
          "Consulta e gerenciamento de outorgas de uso da água.",
        endpoints: 28,
        auth: "OAuth 2.0",
      },
      {
        name: "API de Qualidade da Água",
        version: "v1.5",
        status: "Beta",
        description:
          "Dados de monitoramento da qualidade da água em corpos hídricos.",
        endpoints: 18,
        auth: "API Key",
      },
      {
        name: "API de Saneamento",
        version: "v2.0",
        status: "Produção",
        description:
          "Indicadores e dados de saneamento básico por município.",
        endpoints: 32,
        auth: "OAuth 2.0",
      },
      {
        name: "API de Segurança de Barragens",
        version: "v1.2",
        status: "Produção",
        description:
          "Cadastro e informações de barragens fiscalizadas.",
        endpoints: 22,
        auth: "OAuth 2.0",
      },
    ],
  },
  internas: {
    title: "APIs Internas",
    description: "APIs de uso exclusivo para sistemas internos da ANA.",
    apis: [
      {
        name: "API de Usuários (IAM)",
        version: "v3.0",
        status: "Produção",
        description:
          "Gerenciamento de identidade e acesso dos usuários.",
        endpoints: 35,
        auth: "OAuth 2.0",
      },
      {
        name: "API de Notificações",
        version: "v1.4",
        status: "Produção",
        description:
          "Envio de notificações por email, SMS e push.",
        endpoints: 12,
        auth: "API Key",
      },
      {
        name: "API de Auditoria",
        version: "v2.0",
        status: "Produção",
        description:
          "Registro e consulta de logs de auditoria.",
        endpoints: 15,
        auth: "mTLS",
      },
      {
        name: "API de Documentos",
        version: "v1.6",
        status: "Beta",
        description:
          "Armazenamento e recuperação de documentos.",
        endpoints: 20,
        auth: "OAuth 2.0",
      },
    ],
  },
  autenticacao: {
    title: "Autenticação e Segurança",
    description: "Guia completo de autenticação para as APIs da ANA.",
    sections: [
      {
        title: "OAuth 2.0 / OpenID Connect",
        content:
          "Padrão principal de autenticação para APIs da ANA. Suporta Authorization Code, Client Credentials e PKCE.",
        code: `// Exemplo de autenticação OAuth 2.0
const tokenResponse = await fetch('https://auth.ana.gov.br/oauth/token', {
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body: new URLSearchParams({
    grant_type: 'client_credentials',
    client_id: 'SEU_CLIENT_ID',
    client_secret: 'SEU_CLIENT_SECRET',
    scope: 'api:read api:write'
  })
});`,
      },
      {
        title: "API Keys",
        content:
          "Para integrações simples e de baixo risco. Chaves devem ser rotacionadas periodicamente.",
        code: `// Exemplo de uso com API Key
const response = await fetch('https://api.ana.gov.br/v1/recursos', {
  headers: {
    'X-API-Key': 'SUA_API_KEY',
    'Content-Type': 'application/json'
  }
});`,
      },
      {
        title: "mTLS (Mutual TLS)",
        content:
          "Para integrações críticas que requerem autenticação bidirecional via certificados.",
        code: `// Configuração mTLS
const https = require('https');
const fs = require('fs');

const options = {
  hostname: 'api-secure.ana.gov.br',
  cert: fs.readFileSync('client-cert.pem'),
  key: fs.readFileSync('client-key.pem'),
  ca: fs.readFileSync('ca-cert.pem')
};`,
      },
    ],
  },
  exemplos: {
    title: "Exemplos de Consumo",
    description: "Exemplos práticos de integração com as APIs da ANA.",
    examples: [
      {
        title: "Consulta de Bacias Hidrográficas",
        language: "JavaScript",
        code: `// Exemplo: Listar bacias hidrográficas
const response = await fetch('https://api.ana.gov.br/v2/bacias', {
  headers: {
    'Authorization': \`Bearer \${accessToken}\`,
    'Content-Type': 'application/json'
  }
});

const bacias = await response.json();
console.log(bacias.data);`,
      },
      {
        title: "Dados de Estações",
        language: "Python",
        code: `# Exemplo: Consultar estações de monitoramento
import requests

response = requests.get(
    'https://api.ana.gov.br/v2/estacoes',
    headers={'Authorization': f'Bearer {access_token}'},
    params={'uf': 'DF', 'tipo': 'fluviometrica'}
)

estacoes = response.json()
print(estacoes['data'])`,
      },
      {
        title: "Cadastro de Outorga",
        language: "Java",
        code: `// Exemplo: Criar nova solicitação de outorga
HttpClient client = HttpClient.newHttpClient();
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("https://api.ana.gov.br/v1/outorgas"))
    .header("Authorization", "Bearer " + accessToken)
    .header("Content-Type", "application/json")
    .POST(HttpRequest.BodyPublishers.ofString(jsonBody))
    .build();

HttpResponse<String> response = client.send(request, 
    HttpResponse.BodyHandlers.ofString());`,
      },
    ],
  },
};

const APIPage = () => {
  const { slug } = useParams();
  const content =
    apiContent[slug as keyof typeof apiContent] || apiContent["catalogo"];

  const isAuthPage = slug === "autenticacao";
  const isExamplesPage = slug === "exemplos";

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
              <Plug className="w-8 h-8 text-primary-foreground" />
            </div>
            <div>
              <p className="text-primary-foreground/70 text-sm font-medium">
                APIs e Integrações
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
                  {Object.entries(apiContent).map(([key, item]) => (
                    <Link
                      key={key}
                      to={`/apis/${key}`}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                        slug === key
                          ? "bg-accent text-accent-foreground"
                          : "hover:bg-muted text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {key === "autenticacao" ? (
                        <Lock className="w-5 h-5" />
                      ) : key === "exemplos" ? (
                        <FileCode className="w-5 h-5" />
                      ) : (
                        <Globe className="w-5 h-5" />
                      )}
                      <span className="text-sm font-medium">{item.title}</span>
                    </Link>
                  ))}
                </CardContent>
              </Card>
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {isAuthPage ? (
                // Authentication content
                (content as typeof apiContent.autenticacao).sections?.map(
                  (section, index) => (
                    <Card key={index} variant="feature">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Lock className="w-5 h-5 text-accent" />
                          {section.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-muted-foreground">
                          {section.content}
                        </p>
                        <div className="relative">
                          <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                            <code>{section.code}</code>
                          </pre>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="absolute top-2 right-2"
                          >
                            <Copy className="w-4 h-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  )
                )
              ) : isExamplesPage ? (
                // Examples content
                (content as typeof apiContent.exemplos).examples?.map(
                  (example, index) => (
                    <Card key={index} variant="feature">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="flex items-center gap-2">
                            <FileCode className="w-5 h-5 text-accent" />
                            {example.title}
                          </CardTitle>
                          <Badge variant="secondary">{example.language}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="relative">
                          <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                            <code>{example.code}</code>
                          </pre>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="absolute top-2 right-2"
                          >
                            <Copy className="w-4 h-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  )
                )
              ) : (
                // API Catalog content
                (content as typeof apiContent.catalogo).apis?.map(
                  (api, index) => (
                    <Card key={index} variant="feature">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="flex items-center gap-2 mb-2">
                              {api.name}
                              <Badge variant="outline">{api.version}</Badge>
                            </CardTitle>
                            <p className="text-muted-foreground text-sm">
                              {api.description}
                            </p>
                          </div>
                          <Badge
                            variant={
                              api.status === "Produção"
                                ? "default"
                                : "secondary"
                            }
                          >
                            {api.status}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-6 text-sm text-muted-foreground">
                          <span className="flex items-center gap-2">
                            <Globe className="w-4 h-4" />
                            {api.endpoints} endpoints
                          </span>
                          <span className="flex items-center gap-2">
                            <Lock className="w-4 h-4" />
                            {api.auth}
                          </span>
                        </div>
                        <div className="flex gap-3 mt-4">
                          <Button variant="outline" size="sm">
                            Ver Documentação
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            Testar API
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  )
                )
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default APIPage;
