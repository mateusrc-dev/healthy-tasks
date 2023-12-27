import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../lib/prisma";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'GET') {
        return res.status(405).end()
    }

    const { id } = req.query

    const user = await prisma.user.findUnique({
        where: { id: String(id) }
    })

    return res.status(201).json(user)
}