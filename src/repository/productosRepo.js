import { productosDao as ProductosDao } from "../database/index.js";

export const mostrarProductos = async () => {
  return await ProductosDao.mostrarTodos();
};

export const mostrarProductoId = async (id) => {
  return await ProductosDao.mostrar(id);
};

export const crearProducto = async (obj) => {
  return await ProductosDao.guardar(obj);
};

export const actualizarProducto = async (obj) => {
  return await ProductosDao.actualizar(obj);
};

export const borrarProducto = async (id) => {
  return await ProductosDao.borrar(id);
};
