import { ShoppingCart, Plus, Minus, Trash2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useCart } from "@/hooks/useCart";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
  const { cart, updateQuantity, removeFromCart, clearCart, generateWhatsAppMessage } = useCart();

  const sendWhatsAppOrder = () => {
    const message = generateWhatsAppMessage();
    const phoneNumber = "50200000000"; // Número placeholder
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (cart.items.length === 0) {
    return (
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="flex items-center gap-2">
              <ShoppingCart className="h-5 w-5" />
              Tu Carrito
            </SheetTitle>
            <SheetDescription>
              Tus pupusas favoritas te esperan aquí
            </SheetDescription>
          </SheetHeader>
          
          <div className="flex flex-col items-center justify-center h-64 text-center">
            <ShoppingCart className="h-16 w-16 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">Tu carrito está vacío</h3>
            <p className="text-muted-foreground mb-4">
              ¡Agrega algunas pupusas deliciosas!
            </p>
            <Button onClick={onClose} variant="outline">
              Ver Menú
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5" />
            Tu Carrito
            <Badge variant="secondary">{cart.items.length} ítems</Badge>
          </SheetTitle>
          <SheetDescription>
            Revisa tu pedido antes de enviarlo
          </SheetDescription>
        </SheetHeader>

        <div className="flex flex-col h-full pt-6">
          {/* Items del carrito */}
          <div className="flex-1 overflow-y-auto space-y-4">
            {cart.items.map((item) => (
              <div key={item.pupusa.id} className="bg-muted/50 rounded-lg p-4">
                <div className="flex gap-3">
                  <img
                    src={item.pupusa.image}
                    alt={item.pupusa.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm mb-1">
                      {item.pupusa.name}
                    </h4>
                    <p className="text-xs text-muted-foreground mb-2">
                      Q{item.pupusa.price.toFixed(2)} cada una
                    </p>
                    
                    <div className="flex items-center justify-between">
                      {/* Controles de cantidad */}
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.pupusa.id, item.quantity - 1)}
                          className="h-7 w-7 p-0"
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="font-semibold text-sm w-6 text-center">
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.pupusa.id, item.quantity + 1)}
                          className="h-7 w-7 p-0"
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      
                      {/* Precio y eliminar */}
                      <div className="flex items-center space-x-2">
                        <span className="font-bold text-sm">
                          Q{(item.pupusa.price * item.quantity).toFixed(2)}
                        </span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFromCart(item.pupusa.id)}
                          className="h-7 w-7 p-0 text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Separator className="my-4" />

          {/* Total y acciones */}
          <div className="space-y-4">
            <div className="flex justify-between items-center text-lg font-bold">
              <span>Total:</span>
              <span className="text-primary">Q{cart.total.toFixed(2)}</span>
            </div>

            <div className="space-y-2">
              <Button
                onClick={sendWhatsAppOrder}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold"
                size="lg"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Enviar Pedido por WhatsApp
              </Button>
              
              <div className="flex gap-2">
                <Button variant="outline" onClick={clearCart} className="flex-1">
                  Limpiar Carrito
                </Button>
                <Button variant="outline" onClick={onClose} className="flex-1">
                  Seguir Comprando
                </Button>
              </div>
            </div>

            <div className="text-xs text-muted-foreground text-center">
              Al hacer clic en "Enviar Pedido" se abrirá WhatsApp con tu pedido listo
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;