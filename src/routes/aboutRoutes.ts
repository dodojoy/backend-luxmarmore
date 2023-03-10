import { Router } from "express";
import { CreateAboutController } from "../modules/about/create/about.controller";

const createAboutController = new CreateAboutController;

const aboutRoutes = Router();

aboutRoutes.post("/", createAboutController.handle);

export { aboutRoutes }