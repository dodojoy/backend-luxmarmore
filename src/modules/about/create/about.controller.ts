import { Request, Response } from "express";
import { CreateAboutDTO } from "../dtos/about.dto";
import { CreateAboutUseCase } from "./about.use-case";

export class CreateAboutController {
    async handle(req: Request, res: Response) {
        const payload: CreateAboutDTO = req.body;

        const createAboutUseCase = new CreateAboutUseCase();

        const result = await createAboutUseCase.execute( payload );

        return res.status(201).json(result);
    }
}