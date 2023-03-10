import { User } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { AppError } from "../../../errors/AppError";
import { CreateUserDTO } from "../dtos/user.dto";


export class CreateUserUseCase {
    async execute({ name, email, password}: CreateUserDTO): Promise<User> {
        //check if user already exists
        const userAlreadyExists = await prisma.user.findUnique({
            where: {
                email
            }
        })

        if (userAlreadyExists) {
            throw new AppError("User already exists");
        }

        //create user
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password
            }
        })
        return user;
    }
}