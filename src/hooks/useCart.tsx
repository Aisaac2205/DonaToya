import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from 'react';
import { Cart, CartItem, Pupusa } from '@/types';

interface CartContextValue {
  cart: Cart;
  addToCart: (pupusa: Pupusa, quantity?: number) => void;
  removeFromCart: (pupusaId: string) => void;
  updateQuantity: (pupusaId: string, quantity: number) => void;
  clearCart: () => void;
  getItemCount: () => number;
  generateWhatsAppMessage: (customerName?: string) => string;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Cart>({ items: [], total: 0 });

  // Cargar carrito del localStorage al inicio
  useEffect(() => {
    const savedCart = localStorage.getItem('donatoya-cart');
    if (savedCart) {
      try {
        const parsed: Cart = JSON.parse(savedCart);
        if (parsed && Array.isArray(parsed.items) && typeof parsed.total === 'number') {
          setCart(parsed);
        }
      } catch {
        // Si está corrupto, lo ignoramos
      }
    }
  }, []);

  // Guardar carrito en localStorage cuando cambie
  useEffect(() => {
    localStorage.setItem('donatoya-cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (pupusa: Pupusa, quantity: number = 1) => {
    setCart(prevCart => {
      const existingItem = prevCart.items.find(item => item.pupusa.id === pupusa.id);
      let newItems: CartItem[];
      if (existingItem) {
        newItems = prevCart.items.map(item =>
          item.pupusa.id === pupusa.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        newItems = [...prevCart.items, { pupusa, quantity }];
      }
      const newTotal = newItems.reduce((sum, item) => sum + (item.pupusa.price * item.quantity), 0);
      return { items: newItems, total: newTotal };
    });
  };

  const removeFromCart = (pupusaId: string) => {
    setCart(prevCart => {
      const newItems = prevCart.items.filter(item => item.pupusa.id !== pupusaId);
      const newTotal = newItems.reduce((sum, item) => sum + (item.pupusa.price * item.quantity), 0);
      return { items: newItems, total: newTotal };
    });
  };

  const updateQuantity = (pupusaId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(pupusaId);
      return;
    }
    setCart(prevCart => {
      const newItems = prevCart.items.map(item =>
        item.pupusa.id === pupusaId
          ? { ...item, quantity }
          : item
      );
      const newTotal = newItems.reduce((sum, item) => sum + (item.pupusa.price * item.quantity), 0);
      return { items: newItems, total: newTotal };
    });
  };

  const clearCart = () => {
    setCart({ items: [], total: 0 });
  };

  const getItemCount = () => {
    return cart.items.reduce((sum, item) => sum + item.quantity, 0);
  };

  const generateWhatsAppMessage = (customerName?: string) => {
    const itemsList = cart.items.map(item => 
      `• ${item.quantity}x ${item.pupusa.name} - Q${(item.pupusa.price * item.quantity).toFixed(2)}`
    ).join('\n');
    const nameLine = customerName && customerName.trim().length > 0
      ? `Pedido a nombre de: ${customerName.trim()}\n\n`
      : '';
    return `Hola Doña Toya, quiero ordenar:\n\n${nameLine}${itemsList}\n\nTotal: Q${cart.total.toFixed(2)}\n\n¡Gracias!`;
  };

  const value = useMemo<CartContextValue>(() => ({
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getItemCount,
    generateWhatsAppMessage,
  }), [cart]);

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextValue => {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error('useCart debe usarse dentro de CartProvider');
  }
  return ctx;
};


