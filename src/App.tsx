import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import Weather from "./pages/Weather";
import CropAdvisor from "./pages/CropAdvisor";
import Marketplace from "./pages/Marketplace";
import CropCalendar from "./pages/CropCalendar";
import Schemes from "./pages/Schemes";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout><Dashboard /></AppLayout>} />
          <Route path="/weather" element={<AppLayout><Weather /></AppLayout>} />
          <Route path="/crop-advisor" element={<AppLayout><CropAdvisor /></AppLayout>} />
          <Route path="/marketplace" element={<AppLayout><Marketplace /></AppLayout>} />
          <Route path="/calendar" element={<AppLayout><CropCalendar /></AppLayout>} />
          <Route path="/schemes" element={<AppLayout><Schemes /></AppLayout>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
