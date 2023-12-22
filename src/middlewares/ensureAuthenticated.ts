import { verify } from "jsonwebtoken";
import { authObjectConfigs } from "../configs/auth";
import { NextApiRequest, NextApiResponse } from "next";

export function ensureAuthenticated(request: NextApiRequest, response: NextApiResponse, next) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        return response.status(401).json({ message: "Token não informado." })
    }

    const [, token] = authHeader.split(" ")

    try {
        const { sub: user_id } = verify(token, authObjectConfigs.jwt.secret)

        return response.status(200).json({ user_id: user_id })
    } catch {
        return response.status(401).json({ message: "Token informado inválido." })
    }
}