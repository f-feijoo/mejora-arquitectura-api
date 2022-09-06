import express from "express";
import { getIndex, postIndex } from "../controllers/index.js";
import auth from "../middleware/auth.js";

const { Router } = express;

let router = new Router();

router.get("/", auth, getIndex);

router.post("/", postIndex);

export default router;
