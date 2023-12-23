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
        complaint, 
        profilePublic, 
        statisticPublic, 
        userId 
    } = req.body

    const user = await prisma.user.update({ 
        where: { id: userId }, 
        data: { 
            username, 
            complaint, 
            profilePublic, 
            statisticPublic 
        }
    })

    return res.status(201).json(user)
}

export default withAuth(handler);