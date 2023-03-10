import { About } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { CreateAboutDTO } from "../dtos/about.dto";

export class CreateAboutUseCase {
    async execute(data: CreateAboutDTO): Promise<About> {
        const about = await prisma.about.create({
            data
        })
        return about;
    }
}