import sequelize from '../lib/db'; // Importa la instancia de Sequelize
import User from '../models/User'; // Importa el modelo de usuario

const syncDB = async () => {
  try {
    await sequelize.sync({ force: false }); // Cambia a true solo para desarrollo si necesitas recrear la tabla
    console.log('Base de datos sincronizada');
  } catch (error) {
    console.error('Error al sincronizar la base de datos:', error);
  }
};

syncDB(); // Llama a la función para sincronizar la base de datos
