import "dotenv/config";
let productosDao;
let mensajesDao;
let usuariosDao;

switch (process.env.PERS) {
  default:
    const { default: ProductosDaoMongoDb } = await import(
      "./daos/ProductosDaoMongo.js"
    );
    const { default: MensajesDaoMongoDb } = await import(
      "./daos/MensajesDaoMongo.js"
    );
    const { default: UsuariosDaoMongoDb } = await import(
      "./daos/UsuariosDaoMongo.js"
    );
    productosDao = ProductosDaoMongoDb.getInstance();
    mensajesDao = MensajesDaoMongoDb.getInstance();
    usuariosDao = UsuariosDaoMongoDb.getInstance();
    break;
}

export { productosDao, mensajesDao, usuariosDao };
