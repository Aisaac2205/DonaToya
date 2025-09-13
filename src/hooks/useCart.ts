import { useState, useEffect } from 'react';
import { Cart, CartItem, Pupusa } from '@/types';

export const useCart = () => {
  const [cart, setCart] = useState<Cart>({ items: [], total: 0 });

  // Cargar carrito del localStorage al inicio
  useEffect(() => {
    const savedCart = localStorage.getItem('donatoya-cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
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

  const generateWhatsAppMessage = () => {
    const itemsList = cart.items.map(item => 
      `• ${item.quantity}x ${item.pupusa.name} - Q${(item.pupusa.price * item.quantity).toFixed(2)}`
    ).join('\n');
    
    return `Hola Doña Toya, quiero ordenar:

${itemsList}

Total: Q${cart.total.toFixed(2)}

¡Gracias!`;
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getItemCount,
    generateWhatsAppMessage
  };
};