import { Router } from "express";
import { aboutRoutes } from "./aboutRoutes";
import { portfolioRoutes } from "./portfolioRoutes";
import { userRoutes } from "./userRoutes";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/about", aboutRoutes);
routes.use("/portfolio", portfolioRoutes);

export { routes };