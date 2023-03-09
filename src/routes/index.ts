import { Router } from "express";
import { aboutRoutes } from "./aboutRoutes";
import { userRoutes } from "./userRoutes";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/about", aboutRoutes);

export { routes };