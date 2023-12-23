import multer from 'multer'
import { MULTER } from '../../../configs/uploads'
import { withAuth } from '../middlewares/ensureAuthenticated'

export const config = {
  api: { bodyParser: false }
}

const handler = async (req, res) => {
    await new Promise(resolve => {
        // you may use any other multer function
        const mw = multer(MULTER).single("avatar")
    
        //use resolve() instead of next()
        mw(req, res, resolve)
      })

      const user_id = req.user_id;
      
      // example response
      //console.log(req.file.filename)
      res.status(200).json({ filename: req.file.filename, user_id: user_id })

      
}

export default withAuth(handler);