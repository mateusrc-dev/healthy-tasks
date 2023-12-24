import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";
import { withAuth } from "../middlewares/ensureAuthenticated";

const handler = async(
    req: NextApiRequest,
    res: NextApiResponse
) => {
    if (req.method !== 'PATCH') {
        return res.status(405).end()
    }

    const { 
        carriedOut, 
        taskId, 
    } = req.body

    const task = await prisma.task.update({ 
        where: { id: taskId }, 
        data: { 
            carriedOut,
        }
    })

    return res.status(201).json(task)
}

export default withAuth(handler);