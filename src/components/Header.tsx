import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface MenuItem {
  label: string;
  href: string;
}

interface MenuCategory {
  title: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    title: "Multinuvem",
    items: [
      { label: "Oracle Cloud (OCI)", href: "/multinuvem/oci" },
      { label: "Amazon Web Services (AWS)", href: "/multinuvem/aws" },
      { label: "Google Cloud Platform (GCP)", href: "/multinuvem/gcp" },
      { label: "Microsoft Azure", href: "/multinuvem/azure" },
      { label: "Otimização e FinOps", href: "/multinuvem/otimizacao" },
    ],
  },
  {
    title: "Segurança Cibernética",
    items: [
      { label: "Visão Geral", href: "/seguranca/visao-geral" },
      { label: "Trend Vision One (XDR)", href: "/seguranca/xdr" },
      { label: "Wazuh (SIEM)", href: "/seguranca/siem" },
      { label: "DevSecOps", href: "/seguranca/devsecops" },
    ],
  },
  {
    title: "Gestão de Infra e Ops",
    items: [
      { label: "Gestão de Ativos (SACM)", href: "/gestao-infra/ativos" },
      { label: "Monitoramento (Zabbix/Grafana)", href: "/gestao-infra/monitoramento" },
      { label: "Gestão de Backup", href: "/gestao-infra/backup" },
      { label: "Central de Serviços (GLPI)", href: "/gestao-infra/central-servicos" },
    ],
  },
  {
    title: "Plataforma e Sustentação",
    items: [
      { label: "Plataforma OpenShift/OKD", href: "/sustentacao/plataforma" },
      { label: "Modelo SRE/DevSecOps", href: "/sustentacao/modelo-operacional" },
      { label: "Ciclo de Vida das Aplicações", href: "/sustentacao/ciclo-vida" },
      { label: "Catálogo de Serviços", href: "/sustentacao/catalogo-servicos" },
    ],
  },
  {
    title: "COOPI",
    items: [
      { label: "Sobre a COOPI", href: "/coopi/sobre" },
      { label: "Missão, Visão e Valores", href: "/coopi/missao-visao-valores" },
      { label: "Áreas de Atuação", href: "/coopi/areas-atuacao" },
      { label: "Estratégia da COOPI", href: "/coopi/estrategia" },
      { label: "Sumário Executivo", href: "/coopi/sumario-executivo" },
      { label: "Iniciativas Estratégicas", href: "/coopi/iniciativas" },
    ],
  },
  {
    title: "Desenvolvimento",
    items: [
      { label: "Guias Rápidos", href: "/desenvolvimento/guias-rapidos" },
      { label: "Padrões de Código", href: "/desenvolvimento/padroes-codigo" },
      { label: "Arquitetura de Software", href: "/desenvolvimento/arquitetura" },
      { label: "Frameworks Utilizados", href: "/desenvolvimento/frameworks" },
      { label: "Boas Práticas ANA", href: "/desenvolvimento/boas-praticas" },
    ],
  },
  {
    title: "APIs e Integrações",
    items: [
      { label: "Catálogo de APIs", href: "/apis/catalogo" },
      { label: "APIs Internas", href: "/apis/internas" },
      { label: "Autenticação e Segurança", href: "/apis/autenticacao" },
      { label: "Exemplos de Consumo", href: "/apis/exemplos" },
    ],
  },
  {
    title: "Governança de Dados",
    items: [
      { label: "Catálogo de Dados Corporativo", href: "/governanca/catalogo-dados" },
      { label: "Política de Dados da ANA", href: "/governanca/politica" },
      { label: "Data Lineage", href: "/governanca/lineage" },
      { label: "LGPD Institucional", href: "/governanca/lgpd" },
      { label: "Acesso e Segurança", href: "/governanca/seguranca" },
    ],
  },
  {
    title: "IA",
    items: [
      { label: "Governança de IA", href: "/ia/governanca" },
      { label: "Arquitetura de IA", href: "/ia/arquitetura" },
      { label: "Casos de Uso de IA", href: "/ia/casos-uso" },
      { label: "IA Generativa", href: "/ia/generativa" },
      { label: "Catálogo de Soluções de IA", href: "/ia/catalogo" },
    ],
  },
];

export function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    };
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-ana-md"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              alt="ANA - Agência Nacional de Águas e Saneamento Básico"
              className="h-12 w-auto opacity-100 border-ana-blue border-none rounded border"
              src="/lovable-uploads/c370993d-d5c1-498b-97b7-f228cbc9c3aa.png"
            />
          </Link>

          {/* Navigation */}
          <nav ref={menuRef} className="hidden lg:flex items-center gap-1">
            {menuData.map((category) => (
              <div key={category.title} className="relative">
                <button
                  onClick={() =>
                    setOpenMenu(
                      openMenu === category.title ? null : category.title
                    )
                  }
                  className={cn(
                    "flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                    isScrolled
                      ? "text-foreground hover:bg-muted"
                      : "text-primary-foreground hover:bg-primary-foreground/10",
                    openMenu === category.title &&
                      (isScrolled ? "bg-muted" : "bg-primary-foreground/10")
                  )}
                >
                  {category.title}
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform duration-200",
                      openMenu === category.title && "rotate-180"
                    )}
                  />
                </button>

                {/* Dropdown */}
                {openMenu === category.title && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-card rounded-xl shadow-ana-xl border border-border animate-slide-down overflow-hidden">
                    <div className="py-2">
                      {category.items.map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          className="block px-4 py-3 text-sm text-foreground hover:bg-muted hover:text-accent transition-colors duration-150"
                          onClick={() => setOpenMenu(null)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button className="lg:hidden p-2 rounded-lg hover:bg-muted">
            <svg
              className={cn(
                "w-6 h-6",
                isScrolled ? "text-foreground" : "text-primary-foreground"
              )}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
