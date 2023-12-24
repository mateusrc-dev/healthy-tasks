import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        return res.status(405).end()
    }

    const { userId, taskId } = req.body

    const favoriteTask  = await prisma.favoriteTask.create({
        data: {
            userId, taskId
        }
    })

    return res.status(201).json(favoriteTask)
}