

const products = [
    {
      id: "1",
      name: "Iphone 12",
      price: 1000,
      category: "celular",
      img: "https://www.ubuy.com.ar/productimg/?image=aHR0cHM6Ly9pNS53YWxtYXJ0aW1hZ2VzLmNvbS9zZW8vQXBwbGUtaVBob25lLTEyLTY0R0ItQmx1ZS01Ry1GdWxseS1VbmxvY2tlZC1CLUdyYWRlLVVzZWQtQ2VsbHBob25lXzBkMDk1MWJjLTViNzgtNGRiYy05OTQ5LTNkOWJkMzE5MTE3Ni4wZGE3NWM0MjQzZmJlMjk0ZTNjM2UxOTg0NjU5MWMzZS5qcGVn.jpg",
      stock: 25,
      description: "El Apple iPhone 12 es parte de la serie 12 del iPhone de Apple, con un diseño que recuerda al iPhone 4 y conectividad 5G. Cuenta con una pantalla Super Retina XDR de 6.1 pulgadas de tecnología OLED y está potenciado por el nuevo procesador A14 Bionic, con opciones de 64GB, 128GB o 256GB de almacenamiento interno",
    },
    {
      id: "2",
      name: "Samsung s21",
      price: 800,
      category: "celular",
      img: "https://images.samsung.com/is/image/samsung/p6pim/ar/galaxy-s21/gallery/ar-galaxy-s21-5g-g991-sm-g991bzalaro-thumb-368338803",
      stock: 12,
      description: "El Samsung Galaxy S21 es una serie de teléfonos inteligentes con sistema operativo Android 11 diseñados, desarrollados, fabricados y comercializados por Samsung Electronics como parte de su serie Samsung Galaxy S. En conjunto, sirven como sucesores de la serie Samsung Galaxy S20.",
    },
    {
      id: "3",
      name: "Ipad 8ª generacion",
      price: 1700,
      category: "tablet",
      img: "https://medias.musimundo.com/medias/00406046-143516-143516-01-143516-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w1MjI1MnxpbWFnZS9qcGVnfGhjMC9oYWMvMTAyODM0OTc0NTU2NDYvMDA0MDYwNDYtMTQzNTE2LTE0MzUxNl8wMS0xNDM1MTZfMDEuanBnX3NpemU1MTV8MzA0NmMzNGFhZjUwMDY2YjY5MjU0MjlkMGJlYWMxODAxZjE5ODJhZmJlOTczZThmZjE2NTQxMjU5NjE2OTA4Yw",
      stock: 3,
      description: "Apple ha presentado hoy el iPad de octava generación con el potente chip A12 Bionic, que lleva el Neural Engine por primera vez al modelo de iPad más asequible",
    },
    {
      id: "4",
      name: "Notebook Bangho Max L5 i3",
      price: 1250,
      category: "computer",
      img: "https://bangho.vtexassets.com/arquivos/ids/161330/notebook-gamer-gm-15z12-gtx1650-4gb-gddr6-windows-11-1.jpg?v=638082621108000000",
      stock: 9,
      description: "La Notebook Banghó Max L5 i3 es una opción ideal para quienes buscan rendimiento y productividad. Equipado con un procesador Intel Core i3 de 12ª generación, 8GB de RAM y 240GB SSD, asegura un desempeño fluido para el trabajo o estudio. Su pantalla 15.6 HD con resolución 1366x768 ofrece una visualización nítida, mientras que su diseño ligero (1.69 kg) y apertura de 180° brindan comodidad en el uso diario. Incluye Windows 11 Home, conectividad avanzada con puertos USB 3.2 y Type-C, y características adicionales como webcam HD, parlantes estéreo y teclado Alfanumérico",
    },
    {
      id: "5",
      name: "Google Pixel 8",
      price: 900,
      category: "celular",
      img: "https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202309/29/00157063607535009_1__1200x1200.jpg?impolicy=Resize&width=1200",
      stock: 14,
      description: "El Pixel 8 cuenta con una pantalla OLED FHD+ de 6.2 pulgadas con una densidad de píxeles de 428 ppp, una resolución de 2400 × 1080 píxeles y una relación de aspecto de 20:9. Por su parte, el Pixel 8 Pro tiene una pantalla OLED curva LTPO QHD+ de 6.7 pulgadas con 489 ppp, una resolución de 2992 × 1344 píxeles y una relación de aspecto de 20:9.5​ Ambos ofrecen tasas de refresco de pantalla variables de 60 a 120 Hz. Las pantallas OLED, denominadas «Actua» y «Super Actua» en el Pixel 8 y el Pixel 8 Pro respectivamente, presumen de ofrecer «una mayor precisión de color y un brillo superior» y están protegidas con la tecnología Gorilla Glass Victus 2.6​",
    },
    {
      id: "6",
      name: "Motorola Razr 50 8GB",
      price: 800,
      category: "celular",
      img: "https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202406/21/00157063609176009_12__1200x1200.jpg?impolicy=Resize&width=1200",
      stock: 16,
      description: "El Motorola Razr 50 Ultra es un teléfono plegable de gama alta que continúa con la tradición de los teléfonos Razr, pero con mejoras significativas en cuanto a diseño y funcionalidad. Este dispositivo cuenta con una pantalla principal flexible OLED que se pliega hacia adentro, ofreciendo una experiencia compacta cuando está cerrado. Además, incluye una segunda pantalla exterior más grande que facilita la interacción sin necesidad de abrir el teléfono, permitiendo ver notificaciones, mensajes y realizar tareas rápidas.",
    },
    {
      id: "7",
      name: "Ipad 10ª Generacion",
      price: 1200,
      category: "tablet",
      img: "https://medias.musimundo.com/medias/00406046-143516-143516-01-143516-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w1MjI1MnxpbWFnZS9qcGVnfGhjMC9oYWMvMTAyODM0OTc0NTU2NDYvMDA0MDYwNDYtMTQzNTE2LTE0MzUxNl8wMS0xNDM1MTZfMDEuanBnX3NpemU1MTV8MzA0NmMzNGFhZjUwMDY2YjY5MjU0MjlkMGJlYWMxODAxZjE5ODJhZmJlOTczZThmZjE2NTQxMjU5NjE2OTA4Yw",
      stock: 5,
      description: "El iPad viene dispuesto a conquistarte. Tiene potencia de sobra para hacer realidad lo que te propongas. Su pantalla Liquid Retina de 10,9 pulgadas con diseño de borde a borde es perfecta para trabajar, darles cancha a tus ideas y disfrutar de las videollamadas. ",
    },
    {
      id: "8",
      name: "Ipad Mini",
      price: 1300,
      category: "tablet",
      img: "https://medias.musimundo.com/medias/00406046-143516-143516-01-143516-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w1MjI1MnxpbWFnZS9qcGVnfGhjMC9oYWMvMTAyODM0OTc0NTU2NDYvMDA0MDYwNDYtMTQzNTE2LTE0MzUxNl8wMS0xNDM1MTZfMDEuanBnX3NpemU1MTV8MzA0NmMzNGFhZjUwMDY2YjY5MjU0MjlkMGJlYWMxODAxZjE5ODJhZmJlOTczZThmZjE2NTQxMjU5NjE2OTA4Yw",
      stock: 3,
      description: "El iPad Mini es una tablet compacta de Apple, diseñada para ofrecer la experiencia de un iPad en un tamaño más pequeño y portátil. Con una pantalla de 7.9 a 8.3 pulgadas (dependiendo del modelo), es ideal para quienes buscan un dispositivo ligero y fácil de manejar, pero con el rendimiento de los iPads más grandes",
    },
    {
      id: "9",
      name: "Notebook Bangho Max L5 i5",
      price: 1800,
      category: "computer",
      img: "https://bangho.vtexassets.com/arquivos/ids/161330/notebook-gamer-gm-15z12-gtx1650-4gb-gddr6-windows-11-1.jpg?v=638082621108000000",
      stock: 8,
      description: "La Notebook Banghó Max L5 i5 está equipada con un procesador Intel Core i5 de 12ª generación, 8GB de RAM y un disco SSD de 480GB, brindando una excelente combinación de rendimiento y velocidad. Con una pantalla de 15.6 HD y gráficos Intel UHD, esta notebook es perfecta para tareas de productividad y entretenimiento. Su diseño liviano de 1.69 kg y apertura de 180° la hacen ideal para llevar a cualquier lugar. Incluye Windows 11 Home, ofreciendo una experiencia moderna y fluida.",
    },
  ];
  
  // obtener todos los productos
  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 2500);
    });
  };
  
  // obtener los productos por categoria
  export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.filter((prod) => prod.category === categoryId));
      }, 2500);
    });
  };
  
  // obtener un solo producto por id
  export const getProductByID = (productId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find((prod) => prod.id === productId));
      }, 2500);
    });
  };