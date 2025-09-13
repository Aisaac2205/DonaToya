import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Pupusa } from "@/types";
import { useCart } from "@/hooks/useCart";
import { toast } from "@/hooks/use-toast";

interface PupusaCardProps {
  pupusa: Pupusa;
}

const PupusaCard = ({ pupusa }: PupusaCardProps) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(pupusa, quantity);
    toast({
      title: "¡Agregado al carrito!",
      description: `${quantity}x ${pupusa.name} agregado correctamente`,
    });
    setQuantity(1);
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  return (
    <Card className="pupusa-card golden-glow group overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={pupusa.image}
          alt={pupusa.name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
          Q{pupusa.price.toFixed(2)}
        </Badge>
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-bold text-lg mb-2 text-foreground">
          {pupusa.name}
        </h3>
        <p className="text-muted-foreground text-sm mb-4">
          {pupusa.description}
        </p>
        
        {/* Selector de cantidad */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium">Cantidad:</span>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={decrementQuantity}
              disabled={quantity <= 1}
              className="h-8 w-8 p-0"
            >
              <Minus className="h-3 w-3" />
            </Button>
            <span className="font-semibold text-lg w-8 text-center">
              {quantity}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={incrementQuantity}
              className="h-8 w-8 p-0"
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button
          onClick={handleAddToCart}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
          size="lg"
        >
          Añadir al Carrito - Q{(pupusa.price * quantity).toFixed(2)}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PupusaCard;