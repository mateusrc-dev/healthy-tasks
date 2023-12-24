import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../lib/prisma";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'GET') {
        return res.status(405).end()
    }

    const { taskId } = req.query

    const taskIdQuery: string = String(taskId)

    const comments = await prisma.commentUser.findMany({
        where: {
            taskId: taskIdQuery,
        },
        include: {
            user: true
        }
    })

    return res.status(201).json(comments)
}