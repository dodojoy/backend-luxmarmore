import { Router } from "express";
import { CreatePortfolioController } from "../modules/portfolio/create/portfolio.controller";

const createPortfolioController = new CreatePortfolioController();

const portfolioRoutes = Router();

portfolioRoutes.post("/", createPortfolioController.handle);

export { portfolioRoutes };