import {
  mostrarProductos,
  crearProducto,
} from "../repository/productosRepo.js";

export const getIndex = async (req, res) => {
  res.render("index", {
    data: await mostrarProductos(),
    user: req.user.username,
  });
};

export const postIndex = async (req, res) => {
  let objNew = {
    title: req.body.title,
    price: req.body.price,
    thumbnail: req.body.thumbnail,
  };
  await crearProducto(objNew);
  res.redirect("/");
};
