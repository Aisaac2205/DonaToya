
import type { Pupusa, Combo } from '@/types';

import pupusaChicharronImg from '@/assets/pupusas_chicharron.jpg';
import pupusaQuesoImg from '@/assets/pupusas_queso.jpg';
import pupusaRevueltaImg from '@/assets/pupusas_revuelta.jpg';

export const pupusas: Pupusa[] = [
  {
    id: 'pupusa-queso',
    name: 'Pupusa de Queso',
    description: 'Clásica pupusa con abundante queso fresco que se derrite en tu boca',
    price: 8.00,
    image: pupusaQuesoImg,
    category: 'tradicional'
  },
  {
    id: 'pupusa-chicharron',
    name: 'Pupusa de Chicharrón',
    description: 'Pupusa rellena de chicharrón natual de la región',
    price: 8.00,
    image: pupusaChicharronImg,
    category: 'tradicional'
  },
  {
    id: 'pupusa-revuelta',
    name: 'Pupusa Revuelta',
    description: 'La favorita de todos: queso, frijol y chicharrón en perfecta armonía',
    price: 8.00,
    image: pupusaRevueltaImg,
    category: 'tradicional'
  }
];

export const combos: Combo[] = [
  {
    id: 'combo-dona-toya',
    name: 'Combo Doña Toya',
    description: '2 pupusas revueltas + refresco + postre tradicional',
    price: 18.00,
    originalPrice: 22.00,
    image: pupusaRevueltaImg,
    items: ['2 Pupusas Revueltas', 'Refresco', 'Postre']
  },
  {
    id: 'combo-familiar',
    name: 'Combo Familiar',
    description: '4 pupusas variadas + 2 refrescos + curtido extra',
    price: 30.00,
    originalPrice: 36.00,
    image: pupusaQuesoImg,  
    items: ['4 Pupusas Variadas', '2 Refrescos', 'Curtido Extra']
  },
  {
    id: 'combo-tradicional',
    name: 'Combo Tradicional',
    description: '1 pupusa de queso + 1 de frijol + atol de elote',
    price: 15.00,
    originalPrice: 18.00,
    image: pupusaQuesoImg,
    items: ['Pupusa de Queso', 'Pupusa de Frijol', 'Atol de Elote']
  },
  {
    id: 'combo-especial',
    name: 'Combo Especial del Día',
    description: '3 pupusas revueltas + café guatemalteco + dulce típico',
    price: 25.00,
    originalPrice: 28.00,
    image: pupusaRevueltaImg,
    items: ['3 Pupusas Revueltas', 'Café Guatemalteco', 'Dulce Típico']
  }
];