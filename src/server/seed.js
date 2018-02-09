//SQL
import sql from './connection'
import moment from 'moment'

//UTILS
import {
  hashPassword
} from './utils'

/*
drop table ProductOrigin
drop table Customers;
drop table Sellers;
drop table Orders;
drop Table Products;
drop table Invoices;
drop table Photos;
drop table Addresses;

*/

let { Photo, Customer, ProductOrigin, Product } = sql.models
  
//SEEDS
export default async () => {
  let loc
  await sql.query('SET FOREIGN_KEY_CHECKS = 0', null)

  loc = await Photo.bulkCreate([
    { filename: 'aceh-gayo.jpg'},
    { filename: 'karlos.jpg'},
    { filename: 'kopi-sidomukti.jpg'},
    { filename: 'malang.jpg'},
    { filename: 'kediri.jpg'},
    { filename: 'madiun.jpg'},
    { filename: 'sidoarjo.png'},
  ])

  loc = await ProductOrigin.bulkCreate([
    { name: 'Malang', photo_id: 2 },
    { name: 'Surabaya', photo_id: 3 },
    { name: 'Madiun', photo_id: 4 },
    { name: 'Sidoarjo', photo_id: 5 },
  ])
  
  loc = await Customer.create({
    name: 'Yahya', 
    email: 'yahya@yahya.com',
    password: await hashPassword('yahya123'),
    phone: '043298525',
    photo_id: 1,
  })

  loc = await Product.bulkCreate([
    {
      name: 'Dampit',
      price: 80000,
      description: 'Kopi Dampit dari Dampit Malang',
      stock: 100,
      type: 'roastedbean',
      photo_id: 1,
      product_origin_id: 2
    },
    {
      name: 'Karlos',
      price: 60000,
      description: 'Kopi Karlos dari Karang Ploso Malang',
      stock: 200,
      type: 'roastedbean',
      photo_id: 1,
      product_origin_id: 2
    },
    {
      name: 'Kopi Madiun',
      price: 60000,
      description: 'Kopi Madiun dari Karang Madiun Jawa Timur',
      stock: 200,
      type: 'roastedbean',
      photo_id: 1,
      product_origin_id: 4
    },
  ])

  //for (let i in Customer) if (typeof Customer[i] === 'function') console.log(i)
  // loc = await Customer.findOne({where: {id: 1}})
  // loc = await getAllDerrivedAttributes(loc)

  // console.log(loc)
}

async function getAllDerrivedAttributes(Model) {
  if ('get' in Model) Model = Model.get()
  for (let i in Model) 
  if (typeof Model[i] === 'object' && Model[i])
  if ('then' in Model[i])
  Model[i] = await Model[i]
  else getAllDerrivedAttributes(Model[i])
  return Model
}

function printPrototype(obj, i) {
  var n = Number(i || 0);
  var indent = Array(2 + n).join("-");

  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(indent, key, ": ", obj[key]);
    }
  }

  if (obj) {
    if (Object.getPrototypeOf) {
      printPrototype(Object.getPrototypeOf(obj), n + 1);
    } else if (obj.__proto__) {
      printPrototype(obj.__proto__, n + 1);
    }
  }
}