import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../lib/prisma";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'GET') {
        return res.status(405).end()
    }

    const { userId } = req.query

    const userIdQuery = String(userId)

    console.log(userIdQuery)

    const favoriteTasks = await prisma.favoriteTask.findMany({
        where: { 
            userId: userIdQuery,
        },
        include: {
            task: {
                include: {
                    user: true
                }
            }
        }
    })

   return res.status(201).json(favoriteTasks)
}