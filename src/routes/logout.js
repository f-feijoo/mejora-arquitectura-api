import express from "express";
import { logout } from "../controllers/logout.js";

const { Router } = express;

let router = new Router();

router.get("/", logout);

  export default router