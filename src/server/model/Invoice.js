//MODULES
import Sequelize from 'sequelize'

//CONNECTION
import connection from '../connection'

//USER_SCHEMA
export default connection.define('Invoice', {
  payment_method: {
    type: Sequelize.ENUM(['ecash', 'bank_transfer']),
    allowNull: false,
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  amount: {
    type: Sequelize.INTEGER,
    allowNull: false,
  }
}, {
  underscored: true,
  timestamps: false
})