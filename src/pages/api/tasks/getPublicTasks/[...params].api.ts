import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../lib/prisma";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'GET') {
        return res.status(405).end()
    }

    const { params } = req.query

    const page = params[0]
    const queryTitle = params[1]

    const tasks = await prisma.task.findMany({
        skip: Number(page),
        take: 5,
        where: { 
            isTaskPublic: true,
            title: {contains: queryTitle}
        },
        orderBy: { created_at: "desc" },
        include: { user: true }
    })

    return res.status(201).json(tasks)
}