import express from 'express'
import { randoms } from '../controllers/randoms.js';

const { Router } = express;

let router = new Router();

router.get("/randoms", randoms);

export default router