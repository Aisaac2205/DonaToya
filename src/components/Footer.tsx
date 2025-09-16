import { Heart, MapPin, Phone, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10 md:gap-0">
          {/* Columna 1: Logo y mensaje */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-2 text-primary">Doña Toya La Pupusería</h3>
            <p className="text-sm text-background/80 mb-3 max-w-xs">
              Desde 1999 sirviendo las mejores pupusas tradicionales de Guatemala.<br />
              Una tradición familiar que pasa de generación en generación.
            </p>
            <div className="flex items-center justify-center md:justify-start space-x-2 text-sm mb-2">
              <Heart className="h-4 w-4 text-primary" />
              <span>Hecho con amor en Jutiapa</span>
            </div>
            <p className="text-xs text-primary/80 italic mt-2">
              "Las mejores pupusas se hacen con amor, tiempo y la receta de la abuela"<br />- Doña Toya
            </p>
          </div>

          {/* Columna 2: Contacto */}
          <div className="flex-1 flex flex-col items-center md:items-center text-center md:text-center mb-8 md:mb-0">
            <h4 className="font-semibold mb-4 text-lg">Información de Contacto</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-center md:justify-center space-x-2">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-background/80">
                  Aldea El Jocote, Quesada<br />Jutiapa, Guatemala
                </span>
              </div>
              <div className="flex items-center justify-center md:justify-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-background/80">+502 3652-5443</span>
              </div>
              <div className="flex items-center justify-center md:justify-center space-x-2">
                <Clock className="h-4 w-4 text-primary" />
                <span className="text-background/80">6:00 PM - 9:00 PM</span>
              </div>
            </div>
            <div className="mt-6">
              <h5 className="font-medium mb-2 text-sm">Síguenos</h5>
              <p className="text-xs text-background/60">
                WhatsApp: +502 3652-5443<br />Para pedidos y consultas
              </p>
            </div>
          </div>

          {/* Columna 3: Enlaces */}
          <div className="flex-1 flex flex-col items-center md:items-end text-center md:text-right">
            <h4 className="font-semibold mb-4 text-lg">Enlaces Rápidos</h4>
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
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-background/20 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-background/60 gap-2">
            <p className="text-center md:text-left">
              © 2025 Doña Toya La Pupusería. Todos los derechos reservados.
            </p>
            <p className="text-center md:text-right">
              Tradición familiar Jutiapaneca desde 1999
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;