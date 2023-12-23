import path from 'path';
import fs from 'fs';

export default async function handler(
    req,
    res
) {
  const { url } = req.body;

  // O caminho para o arquivo no diretório 'public/uploads'
  const filePath = path.join(process.cwd(), '.next/server/public/tmp/uploads', url);

  // Verificar se o arquivo existe
  if (!fs.existsSync(filePath)) {
    return res.status(404).end('Arquivo não encontrado');
  }

  // Ler o arquivo e enviar como resposta
  const fileContents = fs.readFileSync(filePath);
  res.setHeader('Content-Type', 'image/png/jpeg');  // Ajuste o tipo de conteúdo conforme necessário
  res.end(fileContents);
}