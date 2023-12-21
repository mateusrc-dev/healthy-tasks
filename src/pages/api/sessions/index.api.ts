import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { authObjectConfigs } from "../../../configs/auth";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        return res.status(405).end()
    }

    const { email, password } = req.body

    const userExists = await prisma.user.findUnique({
        where: { email }
    })

    if (!userExists) {
        return res.status(401).json({ message: "E-mail e/ou senha incorreta." })
    }

    const passwordMatched = await compare(password, userExists.password)

    if (!passwordMatched) {
        return res.status(401).json({ message: "E-mail e/ou senha incorreta." })
    }

    const { secret,expiresIn } = authObjectConfigs.jwt

    const token = sign({}, secret, { subject: String(userExists.id), expiresIn })

    // const hashedPassword = await hash(password, 8)

    return res.status(200).json({ userExists, token })
}