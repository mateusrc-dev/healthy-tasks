import path from "node:path"
import multer from "multer"
import crypto from "crypto"

export const TMP_FOLDER = path.resolve(__dirname, "..", "..", "public", "tmp"); //const vai guardar informações de configurações - por isso o nome da variável vai ser colocada em maiúsculo para diferenciar - ".." significa sair do diretório atual - dirname é para pegar a pasta atual - TMP_FOLDER é uma pasta temporária onde o arquivo chega

export const UPLOADS_FOLDER = path.resolve(TMP_FOLDER, "uploads") //UPLOADS_FOLDER é a pasta onde os arquivos vão ficar 

export const MULTER = { //configurações do upload
  storage: multer.diskStorage({ //objeto com configurações
    destination: TMP_FOLDER, //dizendo para onde vai ser enviado o arquivo (a foto do usuário)
    filename(request, file, callback){ //nome do arquivo
      const fileHash = crypto.randomBytes(10).toString("hex"); //crypto vai ser usado pra gerar um hash (um número) de forma aleatória pra evitar arquivos com nomes iguais - pra garantir que os usuários tenho arquivo com nome único - formatp hexadecimal
      const fileName = `${fileHash}-${file.originalname}`; //evita que arquivos tenham nomes iguais - vai combinar o nome do arquivo com o hash criado aleatoriamente
      return callback(null, fileName); 
    } 
  })
}