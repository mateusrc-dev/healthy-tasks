import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        return res.status(405).end()
    }

    const { description, userId, taskId } = req.body

    const task  = await prisma.commentUser.create({
        data: {
            description, userId, taskId
        }
    })

    return res.status(201).json(task)
}