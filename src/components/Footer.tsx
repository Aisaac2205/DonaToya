import { Heart, MapPin, Phone, Clock } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

// Horario: martes a domingo de 18:00 a 21:00 hora de Guatemala
function useGuatemalaOpenStatus() {
  const [isOpen, setIsOpen] = useState(false);
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(interval);
  }, []);

  const status = useMemo(() => {
    const guatemalaTime = new Date(
      now.toLocaleString('en-US', { timeZone: 'America/Guatemala' })
    );
    const day = guatemalaTime.getDay();
    const hour = guatemalaTime.getHours();
    const min = guatemalaTime.getMinutes();
    const isOpenDay = day !== 1;
    const isOpenHour = (hour > 18 || (hour === 18 && min >= 0)) && (hour < 21);
    return isOpenDay && isOpenHour;
  }, [now]);

  useEffect(() => {
    setIsOpen(status);
  }, [status]);

  return isOpen;
}

const Footer = () => {
  const isOpen = useGuatemalaOpenStatus();
  
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 mb-12">
          
          {/* Información de la Empresa */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-3xl font-bold mb-4 text-primary">Doña Toya</h3>
            <h4 className="text-xl font-medium mb-4">La Pupusería</h4>
            
            <p className="text-background/80 mb-6 leading-relaxed">
              Desde 1999 sirviendo las mejores pupusas tradicionales de Guatemala. 
              Una tradición familiar que pasa de generación en generación.
            </p>
            
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <Heart className="h-4 w-4 text-primary" />
              <span className="text-sm">Hecho con amor en Jutiapa</span>
            </div>
            
            <blockquote className="text-sm text-primary/80 italic border-l-2 border-primary pl-3">
              "Las mejores pupusas se hacen con amor, tiempo y la receta de la abuela"
              <footer className="text-xs mt-1">— Doña Toya</footer>
            </blockquote>
          </div>

          {/* Información de Contacto */}
          <div className="flex-1 text-center">
            <h4 className="text-xl font-semibold mb-6">Contacto</h4>
            
            <div className="space-y-4">
              <div className="flex flex-col items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <div className="text-sm text-background/80 leading-relaxed">
                  <div>Aldea El Jocote, Quesada</div>
                  <div>Jutiapa, Guatemala</div>
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <div className="text-sm text-background/80">
                  <div className="font-medium">+502 3652-5443</div>
                  <div className="text-xs mt-1">WhatsApp disponible</div>
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <div className="text-sm text-background/80">
                  <div className="mb-1">
                    {isOpen ? (
                      <span className="text-green-500 font-semibold">● Abierto ahora</span>
                    ) : (
                      <span className="text-red-500 font-semibold">● Cerrado</span>
                    )}
                  </div>
                  <div>Martes a Domingo</div>
                  <div>6:00 PM - 9:00 PM</div>
                </div>
              </div>
            </div>
          </div>

          {/* Navegación */}
          <div className="flex-1 text-center md:text-right">
            <h4 className="text-xl font-semibold mb-6">Menú</h4>
            
            <nav className="space-y-3">
              <a 
                href="#menu" 
                className="block text-background/80 hover:text-primary transition-colors duration-200 hover:underline"
              >
                Nuestro Menú
              </a>
              <a 
                href="#contacto" 
                className="block text-background/80 hover:text-primary transition-colors duration-200 hover:underline"
              >
                Ubicación
              </a>
            </nav>
            
            <div className="mt-8">
              <h5 className="text-sm font-medium mb-3 text-primary">Pedidos</h5>
              <p className="text-xs text-background/60 leading-relaxed">
                Llama o envía WhatsApp para<br />
                realizar tu pedido
              </p>
            </div>
          </div>
        </div>

        {/* Línea divisoria y copyright */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
            <p>© 2025 Doña Toya La Pupusería. Todos los derechos reservados.</p>
            <p>Tradición familiar Jutiapaneca desde 1999</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;