import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SearchResults from "./pages/SearchResults";
import PackageDetails from "./pages/PackageDetails";
import BookingFlow from "./pages/BookingFlow";
import UserDashboard from "./pages/UserDashboard";
import BookingHistory from "./pages/BookingHistory";
import Itinerary from "./pages/Itinerary";
import AdminDashboard from "./pages/AdminDashboard";
import PackageManagement from "./pages/PackageManagement";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/search" element={<SearchResults />} />
              <Route path="/package/:id" element={<PackageDetails />} />
              <Route path="/booking" element={<BookingFlow />} />
              <Route path="/dashboard" element={<UserDashboard />} />
              <Route path="/bookings" element={<BookingHistory />} />
              <Route path="/itinerary" element={<Itinerary />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/admin/packages" element={<PackageManagement />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
