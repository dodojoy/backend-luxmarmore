import { Router } from "express";
import { CreateAboutController } from "../modules/aboutTableUseCases/createAbout/CreateAboutController";

const createAboutController = new CreateAboutController;

const aboutRoutes = Router();

aboutRoutes.post("/", createAboutController.handle);

export { aboutRoutes }