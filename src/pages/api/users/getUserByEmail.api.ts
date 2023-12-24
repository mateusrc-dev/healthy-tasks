import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";
import { hash } from "bcrypt";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'GET') {
        return res.status(405).end()
    }

    const { email } = req.body

    const user = await prisma.user.findUnique({
        where: { email }
    })

    return res.status(201).json(user)
}