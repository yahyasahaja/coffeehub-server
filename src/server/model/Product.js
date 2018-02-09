//MODULES
import Sequelize from 'sequelize'

//CONNECTION
import connection from '../connection'

//USER_SCHEMA
export default connection.define('Product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  stock: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  type: {
    type: Sequelize.ENUM(['cherrybean', 'greenbean', 'roastedbean'])
  },
  photo_url: {
    type: Sequelize.VIRTUAL,
    get: async function() {
      let photo = await connection.models.Photo.findOne({where: {id: this.get('photo_id')}})
      
      if (!photo) return null
      return `/img/products/${photo.filename}`
    }
  },
}, {
  underscored: true,
  timestamps: false
})