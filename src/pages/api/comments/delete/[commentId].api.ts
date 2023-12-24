import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../lib/prisma";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'DELETE') {
        return res.status(405).end()
    }

    const { commentId } = req.query

    const commentIdQuery: string = String(commentId)

    const comments = await prisma.commentUser.delete({
        where: {
            id: commentIdQuery,
        }
    })

    return res.status(201).json(comments)
}