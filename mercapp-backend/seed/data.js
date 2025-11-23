// seed/data.js
module.exports = {
  categories: [
    { name: 'Electrónicos' },
    { name: 'Hogar' },
    { name: 'Deportes' },
    { name: 'Moda' }
  ],
  products: [
    {
      name: 'Auriculares Bluetooth',
      description: 'Sonido Hi-Fi, cancelación de ruido, 24h batería.',
      price: 39.99,
      imageUrl: 'https://example.com/images/auriculares.jpg',
      categoryName: 'Electrónicos',
      stock: 50
    },
    {
      name: 'Smartwatch Pro',
      description: 'Monitor de ritmo cardíaco, GPS, resistente al agua.',
      price: 129.99,
      imageUrl: 'https://example.com/images/smartwatch.jpg',
      categoryName: 'Electrónicos',
      stock: 35
    },
    {
      name: 'Cafetera Express',
      description: '15 bares, depósito 1.5L, espuma cremosa.',
      price: 89.5,
      imageUrl: 'https://example.com/images/cafetera.png',
      categoryName: 'Hogar',
      stock: 22
    },
    {
      name: 'Lámpara LED de escritorio',
      description: 'Brillo regulable, luz cálida/fría, USB-C.',
      price: 18.9,
      imageUrl: 'https://example.com/images/lampara.jpeg',
      categoryName: 'Hogar',
      stock: 60
    },
    {
      name: 'Botella térmica 1L',
      description: 'Acero inoxidable, mantiene frío/calor 12h.',
      price: 15.0,
      imageUrl: 'https://example.com/images/botella.jpg',
      categoryName: 'Deportes',
      stock: 100
    },
    {
      name: 'Mochila trekking 30L',
      description: 'Impermeable, soporte lumbar, múltiples bolsillos.',
      price: 54.0,
      imageUrl: 'https://example.com/images/mochila.webp',
      categoryName: 'Deportes',
      stock: 40
    },
    {
      name: 'Zapatillas Urban',
      description: 'Tela transpirable, suela antideslizante.',
      price: 42.75,
      imageUrl: 'https://example.com/images/zapatillas.png',
      categoryName: 'Moda',
      stock: 80
    },
    {
      name: 'Chaqueta ligera',
      description: 'Resistente al viento, plegable, unisex.',
      price: 59.9,
      imageUrl: 'https://example.com/images/chaqueta.jpg',
      categoryName: 'Moda',
      stock: 25
    },
    {
      name: 'Teclado mecánico',
      description: 'Switches azules, retroiluminación RGB.',
      price: 69.0,
      imageUrl: 'https://example.com/images/teclado.png',
      categoryName: 'Electrónicos',
      stock: 30
    },
    {
      name: 'Organizador de cables',
      description: 'Kit 50 piezas, clips y velcros.',
      price: 13.2,
      imageUrl: 'https://example.com/images/organizador.jpeg',
      categoryName: 'Hogar',
      stock: 120
    },
    {
      name: 'Cuerda para saltar',
      description: 'Rodamientos metálicos, ajustable.',
      price: 9.99,
      imageUrl: 'https://example.com/images/cuerda.jpg',
      categoryName: 'Deportes',
      stock: 200
    },
    {
      name: 'Gorra clásica',
      description: 'Algodón, talla ajustable.',
      price: 11.5,
      imageUrl: 'https://example.com/images/gorra.jpg',
      categoryName: 'Moda',
      stock: 90
    }
  ]
};
