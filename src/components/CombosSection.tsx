import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { combos } from "@/data/pupusas";

const CombosSection = () => {
  return (
    <section id="combos" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Combos{" "}
            <span className="text-golden">Especiales</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nuestras combinaciones más populares con precios especiales. 
            ¡Perfectos para compartir en familia!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {combos.map((combo, index) => (
            <Card 
              key={combo.id} 
              className="pupusa-card golden-glow group relative overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Badge de ahorro */}
              <Badge className="absolute top-3 right-3 z-10 bg-secondary text-secondary-foreground">
                Ahorro Q{(combo.originalPrice - combo.price).toFixed(2)}
              </Badge>

              <div className="relative overflow-hidden">
                <img
                  src={combo.image}
                  alt={combo.name}
                  className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-lg">{combo.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{combo.description}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Lista de items incluidos */}
                <div className="space-y-1">
                  <p className="text-sm font-medium text-secondary">Incluye:</p>
                  {combo.items.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Precios */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground line-through">
                      Q{combo.originalPrice.toFixed(2)}
                    </span>
                    <span className="text-lg font-bold text-primary">
                      Q{combo.price.toFixed(2)}
                    </span>
                  </div>
                  
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Ordenar Combo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Llamada a la acción */}
        <div className="mt-12 text-center">
          <div className="bg-primary/10 rounded-2xl p-8 max-w-2xl mx-auto border border-primary/20">
            <h3 className="text-xl font-bold mb-3 text-primary">
              ¿No encuentras lo que buscas?
            </h3>
            <p className="text-muted-foreground mb-4">
              ¡Podemos crear un combo personalizado para ti! Contáctanos y dinos qué te gustaría.
            </p>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Combo Personalizado
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CombosSection;