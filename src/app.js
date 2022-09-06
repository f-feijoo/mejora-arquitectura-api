import("./utils/passport/local.js");
import compression from "compression";

import logeoRutas from "./middleware/logeo-rutas.js";

import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import MongoStore from "connect-mongo";
const advancedOptions = { useNewUrlParser: true, useUnifiedTopology: true };

import express from "express";
const app = express();

import session from "express-session";
import passport from "passport";

import productos from "./routes/productos.js";
import randoms from "./routes/randoms.js";
import info from "./routes/info.js";
import login from "./routes/login.js";
import registro from "./routes/registro.js";
import index from "./routes/index.js";
import logout from "./routes/logout.js";
import errors from "./routes/error.js";

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(compression());
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    store: MongoStore.create({
      mongoUrl: `mongodb://anyone:${process.env.MONGOPASS}@proyecto-final-shard-00-00.obuuu.mongodb.net:27017,proyecto-final-shard-00-01.obuuu.mongodb.net:27017,proyecto-final-shard-00-02.obuuu.mongodb.net:27017/?ssl=true&replicaSet=atlas-xzhi9f-shard-0&authSource=admin&retryWrites=true&w=majority`,
      mongoOptions: advancedOptions,
    }),
    secret: process.env.SECRETKEY,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 600000,
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use("/api", productos);
app.use("/api", randoms);
app.use("/login", login);
app.use("/logout", logout);
app.use("/registro", registro);
app.use("/info", info);
app.use("/", index);
app.use("/", errors);
app.use(logeoRutas);

export default app;
