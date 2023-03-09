import { Request, Response } from "express";
import { CreateAboutUseCase } from "./CreateAboutUseCase";

export class CreateAboutController {
    async handle(req: Request, res: Response) {
        const { mobileBanner, desktopBanner, alternativeBanner, title, description } = req.body;

        const createAboutUseCase = new CreateAboutUseCase();

        const result = await createAboutUseCase.execute({ mobileBanner, desktopBanner, alternativeBanner, title, description });

        return res.status(201).json(result);
    }
}