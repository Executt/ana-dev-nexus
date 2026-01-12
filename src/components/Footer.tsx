import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, ExternalLink } from "lucide-react";
import logoAnaVertical from "@/assets/logo-ana-vertical.png";
import logoSti from "@/assets/logo-sti.png";
export function Footer() {
  return <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-4 mb-6">
              <img src={logoAnaVertical} alt="ANA" className="h-16 w-auto brightness-0 invert" />
              
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed text-justify">Portal da Coordenação de Infraestrutura e Operações de Tecnologia da Agência Nacional de Águas e Saneamento Básico.  Tecnologia e Inovação a Serviço da ANA.</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Documentação</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/desenvolvimento/guias-rapidos" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                  Guias Rápidos
                </Link>
              </li>
              <li>
                <Link to="/apis/catalogo" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                  Catálogo de APIs
                </Link>
              </li>
              <li>
                <Link to="/devops/pipelines" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                  Pipelines CI/CD
                </Link>
              </li>
              <li>
                <Link to="/governanca/politica" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                  Governança de Dados
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Recursos</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/ferramentas/repositorios" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                  Repositórios
                </Link>
              </li>
              <li>
                <Link to="/ferramentas/dev" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                  Ferramentas Dev
                </Link>
              </li>
              <li>
                <a href="https://www.gov.br/ana/pt-br" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm inline-flex items-center gap-1">
                  Portal ANA
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://www.gov.br" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm inline-flex items-center gap-1">
                  Gov.br
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-primary-foreground/80">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  SPO Área 5, Quadra 3, Bloco L<br />
                  Brasília - DF, 70610-200
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>(61) 2109-5400</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>coopi@ana.gov.br</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/70">
            <p>
              © {new Date().getFullYear()} ANA - Agência Nacional de Águas e Saneamento Básico. 
              Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/privacidade" className="hover:text-primary-foreground transition-colors">
                Política de Privacidade
              </Link>
              <Link to="/acessibilidade" className="hover:text-primary-foreground transition-colors">
                Acessibilidade
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>;
}