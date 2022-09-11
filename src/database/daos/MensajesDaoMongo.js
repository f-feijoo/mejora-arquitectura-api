import ContenedorMongoDb from "../contenedores/ContenedorMongo.js";

let instance = null;

class MensajesDao extends ContenedorMongoDb {
  constructor() {
    super("mensajes", {
      id: {
        type: Number,
      },
      autor: {
        id: {
          type: String,
        },
        nombre: {
          type: String,
        },
        apellido: {
          type: String,
        },
        edad: {
          type: Number,
        },
        alias: {
          type: String,
        },
        avatar: {
          type: String,
        },
      },
      texto: {
        type: String,
      },
      timestamp: {
        type: String,
      },
    });
  }

  static getInstance() {
    if (!instance) {
      instance = new MensajesDao();
    }

    return instance;
  }
}

export default MensajesDao;
