import { Link, useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Map,
  BarChart3,
  Plug2,
  Clock,
  CheckCircle,
  ExternalLink,
  Droplets,
} from "lucide-react";

const resourcesContent = {
  mapas: {
    title: "Mapas e Geoprocessamento",
    description: "Recursos de geoinformação e mapas interativos.",
    icon: Map,
    sections: [
      {
        title: "Serviços de Mapas",
        items: [
          "WMS (Web Map Service) institucional",
          "WFS (Web Feature Service) para dados vetoriais",
          "API de geocodificação",
          "Camadas de bacias hidrográficas",
          "Mapas de estações de monitoramento",
        ],
      },
      {
        title: "Ferramentas GIS",
        items: [
          "GeoServer como servidor de mapas",
          "PostGIS para dados espaciais",
          "QGIS para análises locais",
          "Leaflet/OpenLayers para web maps",
        ],
      },
    ],
    links: [
      { title: "Portal de Mapas ANA", url: "https://mapas.ana.gov.br" },
      { title: "Documentação WMS", url: "#" },
    ],
  },
  dados: {
    title: "Dados Hidrológicos",
    description: "Acesso a séries históricas e dados de monitoramento.",
    icon: BarChart3,
    sections: [
      {
        title: "Tipos de Dados",
        items: [
          "Vazão (m³/s) - séries históricas",
          "Nível (cm) - monitoramento contínuo",
          "Precipitação (mm)",
          "Qualidade da água (IQA)",
          "Sedimentos",
        ],
      },
      {
        title: "Formatos Disponíveis",
        items: [
          "JSON/REST para APIs",
          "CSV para downloads",
          "NetCDF para dados científicos",
          "Shapefiles para GIS",
        ],
      },
    ],
    links: [
      { title: "Portal HidroWeb", url: "https://www.snirh.gov.br/hidroweb" },
      { title: "API de Dados", url: "/apis/catalogo" },
    ],
  },
  integracoes: {
    title: "Integrações com Sistemas",
    description: "Conectores e integrações com sistemas da ANA.",
    icon: Plug2,
    systems: [
      {
        name: "SNIRH",
        description: "Sistema Nacional de Informações sobre Recursos Hídricos",
        status: "Ativo",
        type: "REST API",
      },
      {
        name: "CNARH",
        description: "Cadastro Nacional de Usuários de Recursos Hídricos",
        status: "Ativo",
        type: "REST API",
      },
      {
        name: "SNIS",
        description: "Sistema Nacional de Informações sobre Saneamento",
        status: "Ativo",
        type: "REST API",
      },
      {
        name: "SAR",
        description: "Sistema de Acompanhamento de Reservatórios",
        status: "Ativo",
        type: "REST/WS",
      },
      {
        name: "SIGBM",
        description: "Sistema de Gestão de Segurança de Barragens",
        status: "Ativo",
        type: "REST API",
      },
    ],
  },
  legados: {
    title: "Sistemas Legados",
    description: "Documentação e integrações com sistemas legados.",
    icon: Clock,
    sections: [
      {
        title: "Sistemas em Manutenção",
        items: [
          "HidroWeb Classic - consultas históricas",
          "REGLA - regulação de recursos hídricos",
          "FISCALIZA - gestão de fiscalização",
        ],
      },
      {
        title: "Estratégia de Migração",
        items: [
          "API wrappers para sistemas antigos",
          "ETL para consolidação de dados",
          "Deprecação gradual com avisos",
          "Documentação de equivalências",
        ],
      },
    ],
  },
};

const ResourcesPage = () => {
  const { slug } = useParams();
  const content =
    resourcesContent[slug as keyof typeof resourcesContent] ||
    resourcesContent["mapas"];
  const Icon = content.icon;

  const isIntegrationsPage = slug === "integracoes";

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
              <Droplets className="w-8 h-8 text-primary-foreground" />
            </div>
            <div>
              <p className="text-primary-foreground/70 text-sm font-medium">
                Recursos Hídricos e Tecnologia
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
                  {Object.entries(resourcesContent).map(([key, item]) => (
                    <Link
                      key={key}
                      to={`/recursos/${key}`}
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
              {isIntegrationsPage ? (
                // Systems list for integrations page
                <div className="space-y-4">
                  {(
                    content as typeof resourcesContent.integracoes
                  ).systems?.map((system, index) => (
                    <Card key={index} variant="feature">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="flex items-center gap-2 mb-2">
                              {system.name}
                              <Badge variant="outline">{system.type}</Badge>
                            </CardTitle>
                            <p className="text-muted-foreground text-sm">
                              {system.description}
                            </p>
                          </div>
                          <Badge variant="default">{system.status}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex gap-3">
                          <Button variant="outline" size="sm">
                            Ver Documentação
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            Exemplos
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                // Regular sections content
                <>
                  {"sections" in content &&
                    content.sections?.map((section, index) => (
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

                  {"links" in content && (content as typeof resourcesContent.mapas).links && (
                    <Card variant="hover">
                      <CardHeader>
                        <CardTitle className="text-lg">Links Úteis</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-3">
                          {(content as typeof resourcesContent.mapas).links?.map((link, index) => (
                            <Button
                              key={index}
                              variant="outline"
                              size="sm"
                              asChild
                            >
                              <a
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {link.title}
                                <ExternalLink className="w-4 h-4 ml-2" />
                              </a>
                            </Button>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ResourcesPage;
