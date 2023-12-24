import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        return res.status(405).end()
    }

    const { title, description, userId, patientEmail, deadline } = req.body

    const task  = await prisma.task.create({
        data: {
            title, description, userId, patientEmail, deadline
        }
    })

    return res.status(201).json(task)
}