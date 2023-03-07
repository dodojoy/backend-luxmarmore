import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
    async handle(req: Request, res: Response) {
        const { name, email, password } = req.body; 

        const createUserUseCase = new CreateUserUseCase(); //instantiating the usecase

        const result = await createUserUseCase.execute({ name, email, password });

        return res.status(201).json(result); //201 is the create status
    }
}