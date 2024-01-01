import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../lib/prisma";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'GET') {
        return res.status(405).end()
    }

    const { userId } = req.query

    const bestTask = await prisma.bestTask.findFirst({
        where: {
            userId: String(userId),
        },
        include: {
            bestTask: true
        }
    })

    return res.status(201).json(bestTask)
}