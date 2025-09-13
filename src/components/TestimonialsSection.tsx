import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "María González",
    location: "Jutiapa",
    text: "Las mejores pupusas de toda la región. Doña Toya mantiene esa sazón tradicional que tanto nos gusta. ¡Siempre regreso por más!",
    rating: 5,
    avatar: "MG"
  },
  {
    id: 2,
    name: "Carlos Mendoza",
    location: "Guatemala",
    text: "Cada vez que voy a Jutiapa, es parada obligatoria en Doña Toya. Las pupusas revueltas son espectaculares y el trato es muy familiar.",
    rating: 5,
    avatar: "CM"
  },
  {
    id: 3,
    name: "Ana Herrera",
    location: "El Progreso",
    text: "Probé las pupusas hace un mes y desde entonces he venido 3 veces más. La calidad es excelente y los precios muy justos.",
    rating: 5,
    avatar: "AH"
  },
  {
    id: 4,
    name: "Roberto Silva",
    location: "Aldea El Jocote",
    text: "Soy del pueblo y puedo decir que Doña Toya es una institución. Sus pupusas son las que comía de niño, puro sabor tradicional.",
    rating: 5,
    avatar: "RS"
  },
  {
    id: 5,
    name: "Lucía Castillo",
    location: "Asunción Mita",
    text: "Excelente atención y las pupusas están deliciosas. El combo familiar es perfecto para compartir. ¡Altamente recomendado!",
    rating: 5,
    avatar: "LC"
  },
  {
    id: 6,
    name: "Jorge Morales",
    location: "Jalapa",
    text: "Vine por recomendación y no me decepcionó. Las pupusas tienen ese sabor auténtico que ya es difícil de encontrar. ¡Volveré pronto!",
    rating: 5,
    avatar: "JM"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonios" className="py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Lo que dicen nuestros{" "}
            <span className="text-golden">Clientes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            La satisfacción de nuestros clientes es nuestro mayor orgullo. 
            Estas son algunas de sus experiencias en Doña Toya.
          </p>
          
          <div className="flex items-center justify-center space-x-2 mt-6">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-lg font-semibold text-primary">5.0</span>
            <span className="text-muted-foreground">• 150+ reseñas</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className="pupusa-card golden-glow group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Avatar y nombre */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex space-x-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Testimonio */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  "{testimonial.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Estadísticas */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">38+</div>
            <p className="text-sm text-muted-foreground">Años de experiencia</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">5000+</div>
            <p className="text-sm text-muted-foreground">Clientes satisfechos</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">15k+</div>
            <p className="text-sm text-muted-foreground">Pupusas vendidas</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <p className="text-sm text-muted-foreground">Ingredientes naturales</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;