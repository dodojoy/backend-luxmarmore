import { About } from "@prisma/client";
import { prisma } from "../../../prisma/client";
import { CreateAboutDTO } from "../dtos/createAboutDTO";

export class CreateAboutUseCase {
    async execute({ mobileBanner, desktopBanner, alternativeBanner, title, description }: CreateAboutDTO): Promise<About> {
        const about = await prisma.about.create({
            data: {
                mobileBanner,
                desktopBanner,
                alternativeBanner,
                title, 
                description
            }
        })
        return about;
    }
}