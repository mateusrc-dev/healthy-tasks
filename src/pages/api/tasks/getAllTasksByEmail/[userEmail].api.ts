import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../lib/prisma";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'GET') {
        return res.status(405).end()
    }

    const { userEmail } = req.query

    const tasks = await prisma.task.findMany({
        where: { 
            patientEmail: String(userEmail)
        },
        orderBy: { created_at: "desc" },
        include: { user: true }
    })

    return res.status(201).json(tasks)
}