//MODULES
import Sequelize from 'sequelize'

//CONNECTION
import connection from '../connection'

//USER_SCHEMA
export default connection.define('Order', {
  date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
}, {
  underscored: true,
  timestamps: false
})