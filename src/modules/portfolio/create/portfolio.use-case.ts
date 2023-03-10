import { Portfolio } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { CreatePortfolioDTO } from "../dtos/portfolio.dto";

export class CreatePortfolioUseCase {
    async execute(data: CreatePortfolioDTO): Promise<Portfolio> {
        const portfolio = await prisma.portfolio.create({
            data: {
                title: data.title,
                medias: {
                    createMany: {
                        data: data.medias
                    }
                }
            }
        })

        return portfolio;
    }
}