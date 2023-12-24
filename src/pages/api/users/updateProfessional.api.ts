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
        username, 
        specialization, 
        description, 
        userId 
    } = req.body

    const user = await prisma.user.update({ 
        where: { id: userId }, 
        data: { 
            username, 
            specialization, 
            description, 
        }
    })

    return res.status(201).json(user)
}

export default withAuth(handler);