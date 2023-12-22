import { verify } from "jsonwebtoken";
import { authObjectConfigs } from "../../../configs/auth";
import { NextApiResponse } from "next";
import { NextRequest } from "next/server";
//import { headers } from 'next/headers'

export function ensureAuthenticated(req: NextRequest, res: NextApiResponse) {
    const requestHeaders = new Headers(req.headers)
    const authHeader = requestHeaders.get("authorization")

    console.log(req.headers)

    if (!authHeader) {
        return res.status(401).json({ message: "Token não informado." })
    }

    const [, token] = authHeader.split(" ")

    try {
        const { sub: user_id } = verify(token, authObjectConfigs.jwt.secret)

        return res.status(200).json({ user_id: user_id })
    } catch {
        return res.status(401).json({ message: "Token informado inválido." })
    }
}