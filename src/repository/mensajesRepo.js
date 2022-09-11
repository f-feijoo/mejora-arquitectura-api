import { mensajesDao as MensajesDao } from "../database/index.js";

export const mostrarMensajes = async () => {
    return await MensajesDao.mostrarTodos();
  };

  export const crearMensaje = async (men) => {
    return await MensajesDao.guardar(men);
  };

