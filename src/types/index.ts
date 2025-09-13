export interface Pupusa {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'tradicional' | 'especial';
}

export interface CartItem {
  pupusa: Pupusa;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
}

export interface Combo {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  image: string;
  items: string[];
}