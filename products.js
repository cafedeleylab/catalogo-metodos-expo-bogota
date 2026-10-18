// Precios comunicados para la exposición en Bogotá 2026.
// Las fotos ilustran los modelos; no se anuncian colores específicos en las fichas.
export const products = [
  {
    id: 'origami-ceramica', name: 'Origami cerámica', family: 'Origami', type: 'Dripper de cerámica',
    prices: [{ label: 'Talla S', value: 140000 }, { label: 'Talla M', value: 170000 }],
    photos: [{ src: './origami-ceramica-rosa.jpg', alt: 'Origami de cerámica rosa, foto de referencia' }],
    source: 'https://origami-kai.com/en/products/origami_dripper_m',
  },
  {
    id: 'origami-air', name: 'Origami Air', family: 'Origami', type: 'Dripper Air',
    prices: [{ label: 'Talla S', value: 87000 }, { label: 'Talla M', value: 120000 }],
    photos: [{ src: './origami-air-negro.jpg', alt: 'Origami Air oscuro, foto de referencia' }],
    source: 'https://origami-kai.com/products/origami_dripperair_m',
  },
  {
    id: 'holders', name: 'Holder Origami', family: 'Accesorios', type: 'Soporte para dripper',
    prices: [{ label: 'Precio', value: 120000 }],
    photos: [
      { src: './holder-negro.jpg', alt: 'Holder Origami negro' },
      { src: './holder-cristal.jpg', alt: 'Holder Origami cristal' },
    ],
    source: 'https://origami-kai.com/products/dripper-holder-as-resin',
  },
  {
    id: 'taza-sensorial', name: 'Taza sensorial Origami', family: 'Accesorios', type: 'Taza',
    prices: [{ label: 'Precio', value: 118000 }],
    photos: [
      { src: './cup-blanco.jpg', alt: 'Taza sensorial Origami blanca' },
      { src: './cup-rosa.jpg', alt: 'Taza sensorial Origami rosa' },
    ],
    source: 'https://origami-kai.com/products/origami_sensoryflavorcup_white',
  },
  {
    id: 'flower-27', name: 'Flower 27', family: 'Flower', type: 'Dripper Deep 27',
    prices: [{ label: 'Precio', value: 96000 }],
    photos: [
      { src: './flower-27-112.png', alt: 'Flower 27 en tono dorado, foto de referencia' },
      { src: './flower-27-115.png', alt: 'Flower 27 azul, foto de referencia' },
    ],
    source: 'https://cafecusa.com/collections/drippers',
  },
  {
    id: 'flower-tritan', name: 'Flower Tritan', family: 'Flower', type: 'Dripper Tritan',
    prices: [{ label: 'Precio', value: 120000 }],
    photos: [{ src: './flower-tritan.png', alt: 'Flower Tritan azul verdoso, foto de referencia' }],
    source: 'https://cafecusa.com/collections/drippers',
  },
  {
    id: 'flower-oval', name: 'Flower oval', family: 'Flower', type: 'Dripper oval',
    prices: [{ label: 'Precio', value: 96000 }],
    photos: [
      { src: './flower-oval-cristal.png', alt: 'Flower oval transparente, foto de referencia' },
      { src: './flower-oval-negro.png', alt: 'Flower oval oscuro, foto de referencia' },
    ],
    source: 'https://cafecusa.com/products/preorder-cafec-flower-oval-dripper-101-for-1-2-cups-fdo-101-copy',
  },
  {
    id: 'cafec-th-1', name: 'TH-1', family: 'Filtros', type: 'Papel CAFEC · 4 tazas',
    prices: [{ label: 'Precio', value: 50000 }],
    photos: [{ src: './cafec-th-1.svg', alt: 'Paquete de filtros CAFEC TH-1 para 4 tazas' }],
    availabilityLabel: 'Consulta disponibilidad',
  },
  {
    id: 'cafec-th-2', name: 'TH-2', family: 'Filtros', type: 'Papel CAFEC · 4 tazas',
    prices: [{ label: 'Precio', value: 50000 }],
    photos: [{ src: './cafec-th-2.svg', alt: 'Paquete de filtros CAFEC TH-2 para 4 tazas' }],
    availabilityLabel: 'Consulta disponibilidad',
  },
  {
    id: 'cafec-th-3', name: 'TH-3', family: 'Filtros', type: 'Papel CAFEC · 4 tazas',
    prices: [{ label: 'Precio', value: 50000 }],
    photos: [{ src: './cafec-th-3.svg', alt: 'Paquete de filtros CAFEC TH-3 para 4 tazas' }],
    availabilityLabel: 'Consulta disponibilidad',
  },
];
