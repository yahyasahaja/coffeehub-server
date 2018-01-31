//SQL
import sql from './connection'
import moment from 'moment'

/*
drop table Customer;

*/

let { Photo, Customer } = sql.models
 
//SEEDS
export default async () => {
  let loc
  await sql.query('SET FOREIGN_KEY_CHECKS = 0', null)

  loc = await Photo.create({
    filename: 'something.png'
  })
  
  loc = await Customer.create({
    name: 'Yahya',
    email: 'yahya@yahya.com',
    password: 'abc',
    phone: '043298525',
    photo_id: 1,
  })

  //for (let i in Customer) if (typeof Customer[i] === 'function') console.log(i)
  loc = await Customer.findOne({where: {id: 1}})
  loc = await getAllDerrivedAttributes(loc)

  console.log(loc)
}

async function getAllDerrivedAttributes(Model) {
  if ('get' in Model) Model = Model.get()
  for (let i in Model) 
  if (typeof Model[i] === 'object')
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