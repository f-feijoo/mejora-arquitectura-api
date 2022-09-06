import express from "express";
import { getProducto, getProductos, productosTest, postProductos, putProductos, deleteProductos } from "../controllers/productos.js";

const { Router } = express;

let router = new Router();

router.get("/productos", getProductos);

router.get("/productos-test", productosTest);

router.get("/productos/:id", getProducto);

router.post("/productos", postProductos);

router.put("/productos/:id", putProductos);

router.delete("/productos/:id", deleteProductos);

export default router;
