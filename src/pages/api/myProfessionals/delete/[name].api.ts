import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../lib/prisma";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'DELETE') {
        return res.status(405).end()
    }

    const { name } = req.query

    const nameDelete: string = name.toString()

    const user = await prisma.professionalTag.delete({
        where: {
            name: nameDelete
        }
    })

    return res.status(201).json(user)
}