//MODULES
import Sequelize from 'sequelize'

//EVENTS
import { events, DB_CONNECTED } from './events'

//CONNECTION
import connection from './connection'

//MODELS
import Customer from './model/Customer'
import Photo from './model/Photo'

//MODEL_RELATIONS
Photo.hasOne(Customer, {foreignKey: 'photo_id'})

//SEEDS 
import giveSeed from './seed' 
 
let force = true
//CONNECT
connection.sync({force}).then(async () => {
  console.log('Database connection has been established successfuly')

  events.emit(DB_CONNECTED)
  if (force) giveSeed()
}).catch(err => console.log(`Unable to connect to the database: ${err}`))