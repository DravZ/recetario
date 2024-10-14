import { Sequelize } from 'sequelize';

//bd, usar, pass
const sequelize = new Sequelize('flavor_fusion', 'root', 'root', {
  host: '127.0.0.1',
  port: 3307,
  dialect: 'mysql',
});

export default sequelize;
