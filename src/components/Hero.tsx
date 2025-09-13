import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-pupuseria.jpg";

const Hero = () => {
  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Imagen de fondo con overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImg})`,
          filter: 'brightness(0.7)'
        }}
      />
      
      {/* Gradiente overlay */}
      <div className="absolute inset-0 hero-gradient opacity-80" />
      
      {/* Contenido */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          Bienvenidos a{" "}
          <span className="text-golden block mt-2">Doña Toya</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-4 opacity-90 animate-fade-in [animation-delay:0.2s]">
          Las pupusas más auténticas de
        </p>
        
        <p className="text-lg md:text-xl mb-8 font-medium animate-fade-in [animation-delay:0.4s]">
          Aldea El Jocote, Quesada, Jutiapa, Guatemala
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in [animation-delay:0.6s]">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground golden-glow font-semibold"
            onClick={scrollToMenu}
          >
            Ver Nuestro Menú
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-primary bg-white/10 backdrop-blur-sm"
          >
            Hacer Pedido
          </Button>
        </div>
        
        <div className="mt-12 text-center animate-bounce-gentle">
          <p className="text-sm opacity-75 mb-2">Tradición familiar desde 1985</p>
          <div className="flex items-center justify-center space-x-2 text-sm">
            <span>⭐⭐⭐⭐⭐</span>
            <span className="opacity-90">Calidad que se siente</span>
          </div>
        </div>
      </div>
      
      {/* Elementos decorativos flotantes */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-bounce-gentle" />
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-bounce-gentle [animation-delay:1s]" />
    </section>
  );
};

export default Hero;