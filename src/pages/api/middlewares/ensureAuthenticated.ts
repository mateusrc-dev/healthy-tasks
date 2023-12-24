// middleware.ts

import { verify } from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';
import { authObjectConfigs } from '../../../configs/auth';

interface AuthenticatedRequest extends NextApiRequest {
    user_id?: string;
  }

export const withAuth = (handler: NextApiHandler) => async (req: AuthenticatedRequest, res: NextApiResponse) => {
  try {
    // Obtém o token Bearer do cabeçalho
    const authorizationHeader = req.headers.authorization || '';
    const token = authorizationHeader.replace('Bearer ', '');

    // Verifica se o token está presente
    if (token.includes("Bearer")) {
      return res.status(401).json({ error: 'Token não fornecido' });
    }

    try {
        const { sub: user_id } = verify(token, authObjectConfigs.jwt.secret) as { sub: string };
        
        req.user_id = user_id;

        return await handler(req, res);
    } catch {
        return res.status(401).json({ error: 'Token inválido' });
    }

    // Adicione qualquer lógica adicional de verificação aqui, por exemplo, validar o token

    // Chama o manipulador original se o token estiver presente
  } catch (error) {
    console.error('Erro no middleware:', error);
    return res.status(500).json({ error: 'Erro interno do servidor' });
  }
};