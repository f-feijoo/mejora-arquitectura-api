import moment from "moment";
import {
  mostrarMensajes,
  crearMensaje,
} from "../../repository/mensajesRepo.js";
import {
  mostrarProductos,
  crearProducto,
} from "../../repository/productosRepo.js";

export default (io) => {
  io.on("connection", async (socket) => {
    socket.emit("productos", await mostrarProductos());
    socket.on("dataMsn", async (x) => {
      const { title, price, thumbnail } = x;
      let objNew = {
        title: title,
        price: price,
        thumbnail: thumbnail,
      };
      await crearProducto(objNew);
      io.sockets.emit("productos", await mostrarProductos());
    });
    const chat = {
      id: `${Math.floor(Math.random() * 1000)}`,
      nombre: "Centro de Mensajes",
      mensajes: await mostrarMensajes(),
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
      await crearMensaje(newMen);
      const chat = {
        id: `${Math.floor(Math.random() * 1000)}`,
        nombre: "Centro de Mensajes",
        mensajes: await mostrarMensajes(),
      };
      io.sockets.emit("mensajes", chat);
    });
  });
};
