import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import User from '../../models/User';
import sequelize from '../../lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { nombre, correo, contrasena } = req.body;

    if (!nombre || !correo || !contrasena) {
      return res.status(400).json({ message: 'Todos los campos son requeridos' });
    }

    try {
      // Encriptar la contraseña
      const hashedPassword = await bcrypt.hash(contrasena, 10);

      // Crear el usuario en la base de datos
      const newUser = await User.create({ nombre, correo, contrasena: Buffer.from(hashedPassword) });

      return res.status(201).json({ message: 'Usuario registrado exitosamente', user: newUser });
    } catch (error) {
        console.error('Error al registrar el usuario:', error); // Esto te dará más información en la consola
        return res.status(500).json({ message: 'Error en el servidor', error });
      
    }
  } else {
    return res.status(405).json({ message: 'Método no permitido' });
  }
}
