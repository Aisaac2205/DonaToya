import { useState } from "react";
import { ShoppingCart, Menu, X, MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/hooks/useCart";
import logoImg from "@/assets/logo_original.jpg";

interface HeaderProps {
  onCartClick: () => void;
}

const Header = ({ onCartClick }: HeaderProps) => {
  const { getItemCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const itemCount = getItemCount();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src={logoImg}
              alt="Doña Toya - Pupusería y comida típica"
              className="h-10 w-10 rounded-full object-cover"
            />
            <div>
              <h1 className="text-xl font-bold text-primary">Doña Toya</h1>
              <p className="text-xs text-muted-foreground">El mejor sazón de la región</p>
            </div>
          </div>

          {/* Info rápida - Desktop */}
          <div className="hidden lg:flex items-center space-x-6 text-sm">
            <div className="flex items-center space-x-1 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Aldea El Jocote, Jutiapa</span>
            </div>
            <div className="flex items-center space-x-1 text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>+502 3652-5443</span>
            </div>
            <div className="flex items-center space-x-1 text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>6:00 AM - 8:00 PM</span>
            </div>
          </div>

          {/* Navegación Desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection('menu')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Menú
            </button>
            {/* Botón Combos ocultado temporalmente */}
            {/* Botón Testimonios eliminado */}
            <button
              onClick={() => scrollToSection('contacto')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contacto
            </button>
          </nav>

          {/* Carrito y menú móvil */}
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={onCartClick}
              className="relative"
            >
              <ShoppingCart className="h-4 w-4" />
              {itemCount > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-primary text-primary-foreground text-xs">
                  {itemCount}
                </Badge>
              )}
            </Button>

            {/* Menú móvil */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Menú móvil expandido */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-background py-4 animate-slide-up">
            <nav className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection('menu')}
                className="text-left py-2 text-foreground hover:text-primary transition-colors"
              >
                Menú de Pupusas
              </button>
              {/* Botón Combos ocultado en menú móvil */}
              {/* Botón Testimonios eliminado en menú móvil */}
              <button
                onClick={() => scrollToSection('contacto')}
                className="text-left py-2 text-foreground hover:text-primary transition-colors"
              >
                Contacto y Ubicación
              </button>
              <div className="pt-3 border-t">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground py-1">
                  <Phone className="h-4 w-4" />
                  <span>+502 3652-5443</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground py-1">
                  <Clock className="h-4 w-4" />
                  <span>Martes a Domingo: 6:00 PM - 9:00 PM</span>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;