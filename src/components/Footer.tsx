import { Heart, MapPin, Phone, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Información principal */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">Doña Toya La Pupusería</h3>
            <p className="text-sm text-background/80 mb-4">
              Desde 1999 sirviendo las mejores pupusas tradicionales de Guatemala. 
              Una tradición familiar que pasa de generación en generación.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <Heart className="h-4 w-4 text-primary" />
              <span>Hecho con amor en Jutiapa</span>
            </div>
          </div>

          {/* Contacto rápido */}
          <div>
            <h4 className="font-semibold mb-4">Información de Contacto</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-background/80">
                  Aldea El Jocote, Quesada<br />
                  Jutiapa, Guatemala
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-background/80">+502 3652-5443</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-primary" />
                <span className="text-background/80">6:00 PM - 9:00 PM</span>
              </div>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
            <div className="space-y-2 text-sm">
              <a href="#menu" className="block text-background/80 hover:text-primary transition-colors">
                Nuestro Menú
              </a>
              {/* Enlace a Combos ocultado temporalmente */}
              {/* Enlace a Testimonios removido */}
              <a href="#contacto" className="block text-background/80 hover:text-primary transition-colors">
                Ubicación y Contacto
              </a>
            </div>
            
            <div className="mt-6">
              <h5 className="font-medium mb-2 text-sm">Síguenos</h5>
              <p className="text-xs text-background/60">
                WhatsApp: +502 3652-5443<br />
                Para pedidos y consultas
              </p>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-background/20 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-background/60">
            <p>
              © 2025 Doña Toya La Pupusería. Todos los derechos reservados.
            </p>
            <p className="mt-2 md:mt-0">
              Tradición familiar Jutiapaneca desde 1999
            </p>
          </div>
        </div>

        {/* Mensaje especial */}
        <div className="mt-6 text-center">
          <p className="text-sm text-primary/80 italic">
            "Las mejores pupusas se hacen con amor, tiempo y la receta de la abuela" - Doña Toya
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;