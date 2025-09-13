import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import CombosSection from "@/components/CombosSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import FloatingWhatsApp from "@/components/ui/floating-whatsapp";

const Index = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header onCartClick={() => setIsCartOpen(true)} />
      <Hero />
      <MenuSection />
      <CombosSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
      />
      
      <FloatingWhatsApp 
        phoneNumber="50200000000"
        message="Hola Doña Toya, me interesa hacer un pedido de pupusas. ¿Podrían ayudarme?"
      />
    </div>
  );
};

export default Index;
