import express from "express";
import { getLogin, postLogin, errorLogin } from "../controllers/login.js";
const { Router } = express;

let router = new Router();

router.get("/", getLogin);

router.post("/", postLogin);

router.get("/errorLogin", errorLogin);

export default router;
