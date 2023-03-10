import { Request, Response } from "express";
import { CreatePortfolioDTO } from "../dtos/portfolio.dto";
import { CreatePortfolioUseCase } from "./portfolio.use-case";

export class CreatePortfolioController {
    async handle(req: Request, res: Response) {
        const payload: CreatePortfolioDTO = req.body;

        const createPortfolioUseCase = new CreatePortfolioUseCase();

        const result = await createPortfolioUseCase.execute( payload );

        return res.status(201).json(result);
    }
}