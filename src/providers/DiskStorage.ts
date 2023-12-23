import fs from "fs"
import path from "path"
import {TMP_FOLDER, UPLOADS_FOLDER} from "../configs/uploads"

export class DiskStorage {
    async saveFile(file){ 
      await fs.promises.rename( //mudando o arquivo de lugar
        path.resolve(TMP_FOLDER, file), //pegando o arquivo da pasta atual (lugar onde a pasta fica quando chega)
        path.resolve(UPLOADS_FOLDER, file) //levando o arquivo para a nova pasta para salvar o arquivo (lugar onde o arquivo realmente vai ficar)
      )
      return file;
    }
  
    async deleteFile(file) {
      const filePath = path.resolve(UPLOADS_FOLDER, file) //pegando o arquivo que já está salvo 
      try { //quando se trabalha com manipulação de arquivos é sempre bom usar exceções pra evitar parar a aplicação devido um erro por o arquivo não existir mais
        await fs.promises.stat(filePath); //conferindo se o filePath existe
      } catch {
        return;
      }
      await fs.promises.unlink(filePath) //função para deletar um arquivo
    }
  }