import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../lib/prisma";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        return res.status(405).end()
    }

    const { params } = req.query

    const taskId = params[0]
    const userId = params[1]
    const isPublic = params[2]

    await prisma.bestTask.deleteMany({
        where: {
            userId: userId,
        }
    })

    const bestTask = await prisma.bestTask.create({
        data: {
            isPublic: isPublic === "true" ? true : false,
            userId,
            taskId,
        }
    })

    return res.status(201).json(bestTask)
}