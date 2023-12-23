import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        return res.status(405).end()
    }

    const { name, userId } = req.body

    console.log(name, userId)

    const user = await prisma.professionalTag.create({
        data: {
            name,
            userId,
        }
    })

    return res.status(201).json(user)
}