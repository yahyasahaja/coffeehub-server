//MODULES
import Sequelize from 'sequelize'

//CONNECTION
import connection from '../connection'

//USER_SCHEMA
export default connection.define('Customer', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  photo_url: {
    type: Sequelize.VIRTUAL,
    get: async function() {
      let photo = await connection.models.Photo.findOne({where: {id: this.get('photo_id')}})
      
      if (!photo) return null
      return `/img/customers/${photo.filename}`
    }
  }
}, {
  underscored: true,
  timestamps: false
})