import ContenedorMongoDb from "../contenedores/ContenedorMongo.js";

let instance = null;

class ProductosDao extends ContenedorMongoDb {
  constructor() {
    super("productos", {
      title: {
        type: String,
      },
      price: {
        type: Number,
      },
      thumbnail: {
        type: String,
      },
    });
  }
  static getInstance() {
    if (!instance) {
      instance = new ProductosDao();
    }

    return instance;
  }
}

export default ProductosDao;
