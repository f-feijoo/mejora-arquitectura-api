import moment from "moment";
import MensajesDao from "../../database/daos/MensajesDao.js";
import Productos from "../../database/daos/ProductosDao.js";

export default (io) => {
  io.on("connection", async (socket) => {
    socket.emit("productos", await Productos.mostrarTodos());
    socket.on("dataMsn", async (x) => {
      const { title, price, thumbnail } = x;
      let objNew = {
        title: title,
        price: price,
        thumbnail: thumbnail,
      };
      await Productos.guardar(objNew);
      io.sockets.emit("productos", await Productos.mostrarTodos());
    });
    const chat = {
      id: `${Math.floor(Math.random() * 1000)}`,
      nombre: "Centro de Mensajes",
      mensajes: await MensajesDao.mostrarTodos(),
    };
    socket.emit("mensajes", chat);
    socket.on("Msn", async (x) => {
      const { autor, texto } = x;
      let newMen = {
        id: `${Math.floor(Math.random() * 1000)}`,
        autor: autor,
        texto: texto,
        timestamp: moment().format("DD/MM/YYYY hh:mm:ss"),
      };
      await MensajesDao.guardar(newMen);
      const chat = {
        id: `${Math.floor(Math.random() * 1000)}`,
        nombre: "Centro de Mensajes",
        mensajes: await MensajesDao.mostrarTodos(),
      };
      io.sockets.emit("mensajes", chat);
    });
  });
};
