import multer from 'multer'
import { MULTER } from '../../../configs/uploads'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

// disable next.js' default body parser
export const config = {
  api: { bodyParser: false }
}

export default async function handler(req, res) {
    const userAuthenticatedId = ensureAuthenticated(res, res)

    console.log(userAuthenticatedId)

    await new Promise(resolve => {
        // you may use any other multer function
        const mw = multer(MULTER).single("avatar")
    
        //use resolve() instead of next()
        mw(req, res, resolve)
      })
    
      // example response
      console.log(req.file.filename)
      res.status(200).json(req.file.filename)
}