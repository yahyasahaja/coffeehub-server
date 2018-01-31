//MODULES
import Sequelize from 'sequelize'

//CONNECTION
import connection from '../connection'

//USER_SCHEMA
export default connection.define('Photo', {
  filename: Sequelize.STRING,
}, {
  underscored: true,
  timestamps: false
})