import { cn } from "@/lib/utils";

interface COOPIStrategyDiagramProps {
  className?: string;
}

export function COOPIStrategyDiagram({ className }: COOPIStrategyDiagramProps) {
  return (
    <div className={cn("w-full", className)}>
      <svg
        viewBox="0 0 800 600"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="coreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0066B3" />
            <stop offset="100%" stopColor="#004080" />
          </linearGradient>
          <linearGradient id="strategicGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#228B22" />
            <stop offset="100%" stopColor="#1a6b1a" />
          </linearGradient>
          <linearGradient id="capabilitiesGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0099CC" />
            <stop offset="100%" stopColor="#007AA3" />
          </linearGradient>
          <linearGradient id="executionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#666666" />
            <stop offset="100%" stopColor="#4d4d4d" />
          </linearGradient>
          <linearGradient id="resultsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#228B22" />
            <stop offset="100%" stopColor="#1a6b1a" />
          </linearGradient>
          
          {/* Shadow filter */}
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.2" />
          </filter>
        </defs>

        {/* Background */}
        <rect width="800" height="600" fill="#f8fafc" />

        {/* Title */}
        <text x="400" y="35" textAnchor="middle" className="fill-foreground" fontSize="18" fontWeight="bold">
          Estratégia COOPI – Visão Integrada
        </text>

        {/* Strategic Layer (Top) */}
        <g filter="url(#shadow)">
          <rect x="50" y="55" width="700" height="70" rx="8" fill="url(#strategicGradient)" />
          <text x="400" y="80" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
            CAMADA ESTRATÉGICA
          </text>
          
          {/* Strategic items */}
          <g fill="white" fontSize="10">
            <rect x="70" y="90" width="80" height="28" rx="4" fill="rgba(255,255,255,0.2)" />
            <text x="110" y="108" textAnchor="middle">Missão</text>
            
            <rect x="160" y="90" width="80" height="28" rx="4" fill="rgba(255,255,255,0.2)" />
            <text x="200" y="108" textAnchor="middle">Visão</text>
            
            <rect x="250" y="90" width="80" height="28" rx="4" fill="rgba(255,255,255,0.2)" />
            <text x="290" y="108" textAnchor="middle">Valores</text>
            
            <rect x="380" y="90" width="100" height="28" rx="4" fill="rgba(255,255,255,0.2)" />
            <text x="430" y="108" textAnchor="middle">Governança</text>
            
            <rect x="490" y="90" width="100" height="28" rx="4" fill="rgba(255,255,255,0.2)" />
            <text x="540" y="108" textAnchor="middle">Segurança</text>
            
            <rect x="600" y="90" width="130" height="28" rx="4" fill="rgba(255,255,255,0.2)" />
            <text x="665" y="108" textAnchor="middle">Não Dependência</text>
          </g>
        </g>

        {/* Core (Center) */}
        <g filter="url(#shadow)">
          <ellipse cx="400" cy="220" rx="180" ry="55" fill="url(#coreGradient)" />
          <text x="400" y="212" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
            COOPI
          </text>
          <text x="400" y="232" textAnchor="middle" fill="white" fontSize="11">
            Infraestrutura e Operações de TI
          </text>
        </g>

        {/* Capabilities Layer (Middle) */}
        <g filter="url(#shadow)">
          <rect x="50" y="290" width="700" height="90" rx="8" fill="url(#capabilitiesGradient)" />
          <text x="400" y="310" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
            CAMADA DE CAPACIDADES
          </text>
          
          {/* Capabilities items - Row 1 */}
          <g fill="white" fontSize="9">
            <rect x="60" y="320" width="78" height="24" rx="4" fill="rgba(255,255,255,0.2)" />
            <text x="99" y="336" textAnchor="middle">Multinuvem</text>
            
            <rect x="145" y="320" width="78" height="24" rx="4" fill="rgba(255,255,255,0.2)" />
            <text x="184" y="336" textAnchor="middle">OpenShift</text>
            
            <rect x="230" y="320" width="88" height="24" rx="4" fill="rgba(255,255,255,0.2)" />
            <text x="274" y="336" textAnchor="middle">Infraestrutura</text>
            
            <rect x="325" y="320" width="88" height="24" rx="4" fill="rgba(255,255,255,0.2)" />
            <text x="369" y="336" textAnchor="middle">Banco de Dados</text>
            
            <rect x="420" y="320" width="68" height="24" rx="4" fill="rgba(255,255,255,0.2)" />
            <text x="454" y="336" textAnchor="middle">Redes</text>
            
            <rect x="495" y="320" width="68" height="24" rx="4" fill="rgba(255,255,255,0.2)" />
            <text x="529" y="336" textAnchor="middle">Backup</text>
            
            <rect x="570" y="320" width="88" height="24" rx="4" fill="rgba(255,255,255,0.2)" />
            <text x="614" y="336" textAnchor="middle">Observabilidade</text>
            
            <rect x="665" y="320" width="75" height="24" rx="4" fill="rgba(255,255,255,0.2)" />
            <text x="702" y="336" textAnchor="middle">Operações</text>
          </g>
          
          {/* Row 2 */}
          <g fill="white" fontSize="9">
            <rect x="200" y="350" width="100" height="24" rx="4" fill="rgba(255,255,255,0.2)" />
            <text x="250" y="366" textAnchor="middle">Telecom</text>
            
            <rect x="310" y="350" width="100" height="24" rx="4" fill="rgba(255,255,255,0.2)" />
            <text x="360" y="366" textAnchor="middle">Segurança</text>
            
            <rect x="420" y="350" width="130" height="24" rx="4" fill="rgba(255,255,255,0.2)" />
            <text x="485" y="366" textAnchor="middle">Gestão de Demandas</text>
          </g>
        </g>

        {/* Execution Layer (Base) */}
        <g filter="url(#shadow)">
          <rect x="50" y="395" width="700" height="70" rx="8" fill="url(#executionGradient)" />
          <text x="400" y="418" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
            CAMADA DE EXECUÇÃO
          </text>
          
          {/* Execution items */}
          <g fill="white" fontSize="9">
            <rect x="60" y="428" width="105" height="26" rx="4" fill="rgba(255,255,255,0.2)" />
            <text x="112" y="445" textAnchor="middle">Sustentação</text>
            
            <rect x="175" y="428" width="90" height="26" rx="4" fill="rgba(255,255,255,0.2)" />
            <text x="220" y="445" textAnchor="middle">DevSecOps</text>
            
            <rect x="275" y="428" width="70" height="26" rx="4" fill="rgba(255,255,255,0.2)" />
            <text x="310" y="445" textAnchor="middle">FinOps</text>
            
            <rect x="355" y="428" width="100" height="26" rx="4" fill="rgba(255,255,255,0.2)" />
            <text x="405" y="445" textAnchor="middle">Gestão Demandas</text>
            
            <rect x="465" y="428" width="100" height="26" rx="4" fill="rgba(255,255,255,0.2)" />
            <text x="515" y="445" textAnchor="middle">Monitoramento</text>
            
            <rect x="575" y="428" width="90" height="26" rx="4" fill="rgba(255,255,255,0.2)" />
            <text x="620" y="445" textAnchor="middle">Automação</text>
            
            <rect x="675" y="428" width="65" height="26" rx="4" fill="rgba(255,255,255,0.2)" />
            <text x="707" y="445" textAnchor="middle">SRE</text>
          </g>
        </g>

        {/* Results Layer (Footer) */}
        <g filter="url(#shadow)">
          <rect x="50" y="480" width="700" height="65" rx="8" fill="url(#resultsGradient)" />
          <text x="400" y="503" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
            RESULTADOS ESPERADOS
          </text>
          
          {/* Results items */}
          <g fill="white" fontSize="9">
            <rect x="60" y="512" width="100" height="24" rx="4" fill="rgba(255,255,255,0.2)" />
            <text x="110" y="528" textAnchor="middle">Redução Custos</text>
            
            <rect x="170" y="512" width="110" height="24" rx="4" fill="rgba(255,255,255,0.2)" />
            <text x="225" y="528" textAnchor="middle">Alta Disponibilidade</text>
            
            <rect x="290" y="512" width="80" height="24" rx="4" fill="rgba(255,255,255,0.2)" />
            <text x="330" y="528" textAnchor="middle">Segurança</text>
            
            <rect x="380" y="512" width="80" height="24" rx="4" fill="rgba(255,255,255,0.2)" />
            <text x="420" y="528" textAnchor="middle">Agilidade</text>
            
            <rect x="470" y="512" width="105" height="24" rx="4" fill="rgba(255,255,255,0.2)" />
            <text x="522" y="528" textAnchor="middle">Sustentabilidade</text>
            
            <rect x="585" y="512" width="100" height="24" rx="4" fill="rgba(255,255,255,0.2)" />
            <text x="635" y="528" textAnchor="middle">Conformidade</text>
            
            <rect x="695" y="512" width="45" height="24" rx="4" fill="rgba(255,255,255,0.2)" />
            <text x="718" y="528" textAnchor="middle">TCU</text>
          </g>
        </g>

        {/* Connection arrows */}
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#0066B3" />
          </marker>
        </defs>
        
        {/* Vertical connectors */}
        <line x1="400" y1="125" x2="400" y2="165" stroke="#0066B3" strokeWidth="2" markerEnd="url(#arrowhead)" />
        <line x1="400" y1="275" x2="400" y2="288" stroke="#0066B3" strokeWidth="2" markerEnd="url(#arrowhead)" />
        <line x1="400" y1="380" x2="400" y2="393" stroke="#0066B3" strokeWidth="2" markerEnd="url(#arrowhead)" />
        <line x1="400" y1="465" x2="400" y2="478" stroke="#0066B3" strokeWidth="2" markerEnd="url(#arrowhead)" />

        {/* Footer text */}
        <text x="400" y="570" textAnchor="middle" fontSize="11" fill="#666">
          "Prever para prover." – Lema COOPI
        </text>
        <text x="400" y="588" textAnchor="middle" fontSize="9" fill="#999">
          STI / ANA – Coordenação de Infraestrutura e Operações de TI
        </text>
      </svg>
    </div>
  );
}
