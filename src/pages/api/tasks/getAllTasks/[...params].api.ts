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

    const email = params[0]
    const queryTitle = params[1]

    const tasks = await prisma.task.findMany({
        where: { 
            patientEmail: email, 
            carriedOut: false,
            title: {contains: queryTitle},
            deadline: {
                gt: new Date(),
            }
        },
        orderBy: { created_at: "desc" },
        include: { user: true }
    })

    return res.status(201).json(tasks)
}