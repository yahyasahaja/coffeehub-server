//MODULES
import Sequelize from 'sequelize'

//CONNECTION
import connection from '../connection'

//USER_SCHEMA
export default connection.define('Address', {
  address: Sequelize.INTEGER(11).UNSIGNED,
  province: Sequelize.INTEGER(11).UNSIGNED,
  city: Sequelize.INTEGER(11).UNSIGNED,
  district: Sequelize.INTEGER(11).UNSIGNED,
  zip_code: Sequelize.INTEGER(11).UNSIGNED,
}, {
  underscored: true,
  timestamps: false
})