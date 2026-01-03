import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AutomotiveOils from "./pages/AutomotiveOils";
import IndustrialOils from "./pages/IndustrialOils";
import GreasesPage from "./pages/GreasesPage";
import AntifreezePage from "./pages/AntifreezePage";
import SubCategoryPage from "./pages/SubCategoryPage";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/products/automotive-oils" element={<AutomotiveOils />} />
            <Route path="/products/industrial-oils" element={<IndustrialOils />} />
            <Route path="/products/greases" element={<GreasesPage />} />
            <Route path="/products/antifreeze" element={<AntifreezePage />} />
            <Route path="/products/:categorySlug/:subCategorySlug" element={<SubCategoryPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
