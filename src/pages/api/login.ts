import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import User from '../../models/User';
import cookie from 'cookie'; // Para gestionar cookies

export default async function login(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { correo, contrasena } = req.body;

    console.log('Correo:', correo); // Para verificar que los datos llegan
    console.log('Contraseña:', contrasena);

    try {
      const user = await User.findOne({ where: { correo } });

      if (!user) {
        return res.status(401).json({ message: 'Usuario no encontrado.' });
      }else{
        
          // 2. Comparar la contraseña ingresada con el hash almacenado
        
        const isMatch = await bcrypt.compare(contrasena, user.contrasena.toString());
        
        if (!isMatch) {
          return res.status(401).json({ message: 'Contraseña incorrecta.' });
        }else{
            return res.status(200).json({
                message: 'Inicio de sesión exitoso.',
                user: {
                    id: user.idUsuario,
                    correo: user.correo,
                    nombre: user.nombre
                } // si estás usando un token para la sesión, también lo puedes devolver
            });
        }
      }
    } catch (error) {
      console.error('Error en el servidor:', error);
      return res.status(500).json({ message: 'Error en el servidor' });
    }
      } else {
      return res.status(405).json({ message: 'Método no permitido' });
    }
  }
  