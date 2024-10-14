import { DataTypes, Model } from 'sequelize';
import sequelize from '../lib/db';

class User extends Model {
  public idUsuario!: number;
  public correo!: string;
  public contrasena!: Buffer; // Usamos Buffer para BLOB
  public nombre!: string;
}

User.init(
  {
    idUsuario: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    correo: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    contrasena: {
      type: DataTypes.BLOB,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: true, 
  }
);

export default User;
