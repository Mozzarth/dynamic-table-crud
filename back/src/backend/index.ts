import express from "express";
import morgan from "morgan";
import cors from "cors";


import { handleErrorMiddleware } from "./shared/middleware/handleError.midd";
import { routerNotFound } from "./shared/middleware/routerNotFound.midd";
import { Server } from './server';
import { router } from "./routes";

const server = Server.getInstance

server.app.use(morgan("dev"));
server.app.use(express.json());
server.app.use(express.urlencoded({ extended: false }));
server.app.use(cors());

server.app.use("/api", router);
server.app.use(routerNotFound)
server.app.use(handleErrorMiddleware);

server.start()