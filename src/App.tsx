import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import BirthChart from "./pages/BirthChart";
import Madhav from "./pages/Madhav";
import Pricing from "./pages/Pricing";
import Payment from "./pages/Payment";
import PayPerQuery from "./pages/PayPerQuery";
import NotFound from "./pages/NotFound";
import Horoscope from "./pages/Horoscope";
import ZodiacHoroscope from "./pages/ZodiacHoroscope";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/birth-chart" element={<BirthChart />} />
          <Route path="/madhav" element={<Madhav />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/pay-per-query" element={<PayPerQuery />} />
          <Route path="/horoscope" element={<Horoscope />} />
          <Route path="/horoscope/:sign" element={<ZodiacHoroscope />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
