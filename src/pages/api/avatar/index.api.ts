import multer from 'multer'
import { MULTER } from '../../../configs/uploads'
import { withAuth } from '../middlewares/ensureAuthenticated'
import { DiskStorage } from '../../../providers/DiskStorage'
import { prisma } from '../../../lib/prisma'

export const config = {
  api: { bodyParser: false }
}

const handler = async (req, res) => {
    if (req.method !== 'PATCH') {
        return res.status(405).end()
    }

    await new Promise(resolve => {
        // you may use any other multer function
        const mw = multer(MULTER).single("avatar")
    
        //use resolve() instead of next()
        mw(req, res, resolve)
    })

    const user_id = req.user_id;
    const avatarFileName = req.file.filename
    const diskStorage = new DiskStorage()
    const user = prisma.user.findUnique({ where: { id: user_id }})

    if (!user) {
        return res.status(401).json({ error: 'Usuário não existe.' });
    }
      
    if ((await user).photoUrl) {
        await diskStorage.deleteFile((await user).photoUrl)
    }

    const filename = await diskStorage.saveFile(avatarFileName);
      
    await prisma.user.update({ where: { id: user_id }, data: { photoUrl: filename }})
      
    res.status(200).json({ filename: req.file.filename, user_id: user_id })
}

export default withAuth(handler);