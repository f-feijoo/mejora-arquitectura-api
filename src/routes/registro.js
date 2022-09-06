import express from "express";
import {
  getRegistro,
  postRegistro,
  errorRegistro,
} from "../controllers/registro.js";

const { Router } = express;

let router = new Router();

router.get("/", getRegistro);

router.post("/", postRegistro);

router.get("/errorRegistro", errorRegistro);

export default router;
