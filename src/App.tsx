import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import DevelopmentPage from "./pages/DevelopmentPage";
import APIPage from "./pages/APIPage";
import DevOpsPage from "./pages/DevOpsPage";
import GovernancePage from "./pages/GovernancePage";
import ResourcesPage from "./pages/ResourcesPage";
import ToolsPage from "./pages/ToolsPage";
import AIPage from "./pages/AIPage";
import SustentacaoPage from "./pages/SustentacaoPage";
import CloudPage from "./pages/CloudPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Development Routes */}
          <Route path="/desenvolvimento/:slug" element={<DevelopmentPage />} />
          
          {/* APIs Routes */}
          <Route path="/apis/:slug" element={<APIPage />} />
          
          {/* DevOps Routes (legacy) */}
          <Route path="/devops/:slug" element={<DevOpsPage />} />
          
          {/* Inteligência Artificial Routes */}
          <Route path="/ia/:slug" element={<AIPage />} />
          
          {/* Sustentação de Sistemas Routes */}
          <Route path="/sustentacao/:slug" element={<SustentacaoPage />} />
          
          {/* Governance Routes */}
          <Route path="/governanca/:slug" element={<GovernancePage />} />
          
          {/* Multinuvem Routes */}
          <Route path="/multinuvem/:slug" element={<CloudPage />} />
          
          {/* Resources Routes */}
          <Route path="/recursos/:slug" element={<ResourcesPage />} />
          
          {/* Tools Routes */}
          <Route path="/ferramentas/:slug" element={<ToolsPage />} />
          
          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
