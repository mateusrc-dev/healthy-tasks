import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../lib/prisma";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'GET') {
        return res.status(405).end()
    }

    const { params }= req.query

    const userId = params[0]
    const taskId = params[1]

    const favoriteTask = await prisma.favoriteTask.findMany({
        where: { 
            userId,
            taskId
        },
    })

    return res.status(201).json(favoriteTask)
}