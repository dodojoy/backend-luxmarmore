import { User } from "@prisma/client"
import { prisma } from "../../../../prisma/client";
import { CreateUserDTO } from "../../dtos/CreateUserDTO";

export class CreateUserUseCase {
    async execute({ name, email, password}: CreateUserDTO): Promise<User> {
        //check if user already exists
        const userAlreadyExists = await prisma.user.findUnique({
            where: {
                email
            }
        })

        if (userAlreadyExists) {
            //error
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