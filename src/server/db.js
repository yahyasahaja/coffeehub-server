//MODULES
import Sequelize from 'sequelize'

//EVENTS
import { events, DB_CONNECTED } from './events'

//CONNECTION
import connection from './connection'

//MODELS
import Customer from './model/Customer'
import Photo from './model/Photo'
import Product from './model/Product'
import Address from './model/Address'
import Order from './model/Order'
import Invoice from './model/Invoice'
import ProductOrigin from './model/ProductOrigin'

//MODEL_RELATIONS
//ADD_FOREIGN_KEY_TO CUSTOMER
Photo.hasOne(Customer, {foreignKey: 'photo_id'})
Customer.belongsTo(Photo, {foreignKey: 'photo_id'})
Address.hasOne(Customer, {foreignKey: 'address_id'})
Customer.belongsTo(Address, {foreignKey: 'photo_id'})

//ADD_FOREIGN_KEY_TO PRODUCT
Photo.hasOne(Product, {foreignKey: 'photo_id'})
Product.belongsTo(Photo, {foreignKey: 'photo_id'})
ProductOrigin.hasOne(Product, {foreignKey: 'product_origin_id'})
Product.belongsTo(ProductOrigin, {foreignKey: 'product_origin_id'})

//ADD_FOREIGN_KEY_TO ORDER
Product.hasOne(Order, {foreignKey: 'product_id'})
Order.belongsTo(Product, {foreignKey: 'product_id'})
Invoice.hasMany(Order, {foreignKey: 'invoice_id'})
Order.belongsTo(Invoice, {foreignKey: 'invoice_id'})
Address.hasOne(Order, {foreignKey: 'shipping_address_id'})
Order.belongsTo(Address, {foreignKey: 'shipping_address_id'})

//ADD_FOREIGN_KEY_TO PRODUCT_ORIGIN
Photo.hasOne(ProductOrigin, {foreignKey: 'photo_id'})
ProductOrigin.belongsTo(Photo, {foreignKey: 'photo_id'})

//SEEDS 
import giveSeed from './seed' 
 
let force = true
//CONNECT
connection.sync({force}).then(async () => {
  console.log('Database connection has been established successfuly')

  events.emit(DB_CONNECTED)
  if (force) giveSeed()
}).catch(err => console.log(`Unable to connect to the database: ${err}`))