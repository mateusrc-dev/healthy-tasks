import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        return res.status(405).end()
    }

    const { username, email, password, typeUser } = req.body

    const user = await prisma.user.create({
        data: {
            email,
            password,
            typeUser,
            username
        }
    })

    return res.status(201).json(user)
}