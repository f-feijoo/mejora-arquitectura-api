import express from "express";
import { sinConsole, conConsole } from "../controllers/info.js";

const { Router } = express;

let router = new Router();

router.get("/sin-console", sinConsole);

router.get("/con-console", conConsole);

export default router;
