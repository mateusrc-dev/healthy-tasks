import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";
import { hash } from "bcrypt";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        return res.status(405).end()
    }

    const { username, email, password, typeUser } = req.body

    const userExists = await prisma.user.findUnique({
        where: { email }
    })

    if (userExists) {
        return res.status(400).json({ message: "Esse e-mail já está em uso." })
    }

    const hashedPassword = await hash(password, 8)

    const user = await prisma.user.create({
        data: {
            email,
            password: hashedPassword,
            typeUser,
            username
        }
    })

    return res.status(201).json(user)
}