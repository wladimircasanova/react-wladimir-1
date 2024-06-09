export const productos = [
    {
      id: 1,
      nombre: "Camiseta",
      precio: 15000,
      categoria: "Prenda superior",
      stock: 16,
      descripcion: "Una camiseta oversize de algodón suave y cómoda.",
      img: "https://www.gustore.cl/temp/img/poleras/poleraNegra_800x859.png?v=new7",
    },
    {
      id: 2,
      nombre: "Gorra",
      precio: 20000,
      categoria: "Accesorios",
      stock: 7,
      descripcion: "Una gorra ajustable para protegerte del sol.",
      img: "https://http2.mlstatic.com/D_NQ_NP_978698-MLC51680153674_092022-O.webp",
    },
    {
      id: 3,
      nombre: "Hoodie",
      precio: 60000,
      categoria: "Prenda superior",
      stock: 10,
      descripcion: "Un polerón con capucha con capucha para mantenerte abrigado y mantener todo el estilo.",
      img: "https://i.ebayimg.com/thumbs/images/g/fpAAAOSwPChjLW~R/s-l640.jpg",
    },
    {
      id: 4,
      nombre: "Pantalón",
      precio: 25000,
      categoria: "Prenda inferior",
      stock: 6,
      descripcion: "Un pantalón cargo resistente y a la moda.",
      img: "https://cdnx.jumpseller.com/cuarto-turno/image/24209951/resize/640/640?1657144276",
    },
    {
      id: 5,
      nombre: "Zapatillas",
      precio: 70000,
      categoria: "Calzado",
      stock: 12,
      descripcion: "Zapatillas que reflejan tu estilo.",
      img: "https://i.ebayimg.com/images/g/bKgAAOSwR21kYObg/s-l1200.webp",
    },
  ];
  
  export const getProducts = () => {
    return new Promise((res) => {
      setTimeout(() => {
        res(productos);
      }, 2000);
    });
  };
 
  export const getProductsByCategory = (category) => {
    return new Promise((res) => {
      const productosFiltrados = productos.filter(
        (prod) => prod.categoria === category
      );
      setTimeout(() => {
        res(productosFiltrados);
      }, 2000);
    });
  };
 
  export const getProductById = (id) => {
    return new Promise((res) => {
      const productoFiltrado = productos.find((prod) => prod.id === parseInt(id));
      setTimeout(() => {
        res(productoFiltrado);
      }, 2000);
    });
  };