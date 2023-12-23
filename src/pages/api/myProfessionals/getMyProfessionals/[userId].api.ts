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

    const userIdQuery: string = userId.toString()

    const user = await prisma.professionalTag.findMany({
        where: {
            userId: userIdQuery,
        }
    })

    return res.status(201).json(user)
}