import { faker } from "@faker-js/faker";
import ProductosDao from "../database/daos/ProductosDao.js";

export const getProductos = async (req, res) => {
  res.render("productos", { data: await ProductosDao.mostrarTodos() });
}
export const productosTest = (req, res) => {
  const random = [];
  for (i = 0; i < 5; i++) {
    random.push({
      id: faker.random.numeric(2),
      title: faker.commerce.product(),
      price: faker.commerce.price(),
      thumbnail: faker.image.imageUrl(),
    });
  }
  res.render("productos", { data: random });
}

export const getProducto = async (req, res) => {
  let oid = {_id: req.params.id};
  res.render("uploaded", { data: await ProductosDao.mostrar(oid) });
}

export const postProductos = async (req, res) => {
  let objNew = {
    title: req.body.title,
    price: req.body.price,
    thumbnail: req.body.thumbnail,
  };
  let doc = await ProductosDao.guardar(objNew);
  if (doc) {
    res.send({ message: "Registro ok!" });
  } else {
    res.send({ message: "error" });
  }
}

export const putProductos = async (req, res) => {
  let objUpdated = {
    title: req.body.title,
    price: req.body.price,
    thumbnail: req.body.thumbnail,
    _id: req.params.id,
  };
  let doc = await ProductosDao.actualizar(objUpdated);
  if (doc) {
    res.send({ data: "User updated" });
  } else {
    res.send({ message: "error" });
  }
}

export const deleteProductos = async (req, res) => {
  let id = req.params.id;
  await ProductosDao.borrar(id);
  res.send({ data: "User deleted" });
}