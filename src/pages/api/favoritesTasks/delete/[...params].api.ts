import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../lib/prisma";
import { api } from "../../../../lib/axios";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'DELETE') {
        return res.status(405).end()
    }

    const { params }= req.query

    const id = params[0]

    console.log("cheguei aqui uhuuuu ->>>", id)    

    const favoriteTaskDeleted = await prisma.favoriteTask.delete({
        where: { 
            id: id,
        },
    })

    return res.status(201).json(favoriteTaskDeleted)
}