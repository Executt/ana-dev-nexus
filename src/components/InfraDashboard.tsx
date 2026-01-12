import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import {
  Cloud,
  Shield,
  Server,
  HardDrive,
  Activity,
  Database,
  ClipboardList,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const pillars = [
  {
    title: "Nuvem",
    description: "OCI, AWS, GCP e Azure com governança unificada e estratégia FinOps.",
    icon: Cloud,
    href: "/multinuvem/oci",
    color: "from-orange-500 to-red-600",
    stats: "4 provedores ativos",
  },
  {
    title: "Segurança Cibernética",
    description: "Trend Vision One (XDR), Wazuh (SIEM) e proteção Zero Trust.",
    icon: Shield,
    href: "/seguranca/visao-geral",
    color: "from-red-600 to-rose-700",
    stats: "Monitoramento 24x7",
  },
  {
    title: "Gestão de Infra e Operações",
    description: "SACM, Zabbix, Grafana e monitoramento centralizado.",
    icon: Activity,
    href: "/gestao-infra/ativos",
    color: "from-blue-600 to-indigo-700",
    stats: "500+ ativos gerenciados",
  },
  {
    title: "Plataforma OpenShift",
    description: "Containers, DevSecOps, ACS, Quay e automação com Ansible.",
    icon: Server,
    href: "/sustentacao/plataforma",
    color: "from-ana-blue to-ana-blue-dark",
    stats: "6 clusters K8s",
  },
  {
    title: "Gestão de Backup",
    description: "Veritas NetBackup com tiering e política por tipo de serviço.",
    icon: HardDrive,
    href: "/gestao-infra/backup",
    color: "from-emerald-600 to-teal-700",
    stats: "RPO/RTO otimizados",
  },
  {
    title: "Central de Serviços",
    description: "GLPI como ferramenta central de demandas, CMDB e catálogo ITIL.",
    icon: ClipboardList,
    href: "/gestao-infra/central-servicos",
    color: "from-purple-600 to-violet-700",
    stats: "SLAs definidos",
  },
];

export function InfraDashboard() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-accent text-sm font-medium mb-4">
            <Database className="w-4 h-4" />
            Infraestrutura Tecnológica
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Pilares da Infraestrutura de TIC
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Visão executiva dos principais domínios de infraestrutura, operações e segurança da ANA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <Link key={pillar.title} to={pillar.href} className="group">
              <Card variant="hover" className="h-full overflow-hidden">
                <CardContent className="p-0">
                  <div className={cn("h-2 bg-gradient-to-r", pillar.color)} />
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={cn(
                          "w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br",
                          pillar.color
                        )}
                      >
                        <pillar.icon className="w-7 h-7 text-white" />
                      </div>
                      <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded">
                        {pillar.stats}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {pillar.description}
                    </p>
                    <span className="inline-flex items-center text-sm font-medium text-accent group-hover:gap-2 transition-all">
                      Explorar
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
