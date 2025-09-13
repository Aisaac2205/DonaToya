import { MessageCircle } from "lucide-react";
import { Button } from "./button";

interface FloatingWhatsAppProps {
  phoneNumber: string;
  message?: string;
}

const FloatingWhatsApp = ({ phoneNumber, message = "Hola, me interesa hacer un pedido" }: FloatingWhatsAppProps) => {
  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Button
      onClick={handleClick}
      className="whatsapp-float animate-pulse-golden"
      size="lg"
      variant="default"
      style={{ backgroundColor: '#25D366' }}
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  );
};

export default FloatingWhatsApp;