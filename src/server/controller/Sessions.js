//MODULES
import express from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import _ from 'lodash'

//CONNNECTION
import db from '../connection'

//CONFIG
import { JWT } from '../config'
const {
  accessTokenExpire,
  refreshTokenExpire,
  roles,
  secretKey,
} = JWT

//UTILS
import {
  hashPassword
} from '../utils'

//INIT
const app = express.Router()

//ROUTE
app.post('/register', async (req, res) => {
  const {
    email,
    password,
    name,
  } = req.body

  let checkUser = await db.models.Customer.findOne({where: {email}})
  if (checkUser) return res.status(400).json({
    error: 'bad request',
    message: 'User already registered'
  })
  
  let hashedPassword = await hashPassword(password)
  const user = await db.models.Customer.create({name, email, password: hashedPassword})
  console.log(secretKey)
  const accessToken = jwt.sign({
    user: _.pick(user, ['id', 'email'])
  },
    secretKey,
  {
    expiresIn: accessTokenExpire
  })
  res.status(200).json({accessToken})
})

app.post('/login', async (req, res) => {
  const {
    email,
    password,
  } = req.body

  const user = await db.models.Customer.findOne({where: {email}})
  if (!user) return res.status(400).json({
    error: 'bad request',
    message: 'no user matches with that email'
  })

  const checkPassword = await bcrypt.compare(password, user.password)
  if (!checkPassword) return res.status(400).json({
    error: 'bad request',
    message: 'password not match'
  })

  const accessToken = jwt.sign({
    user: _.pick(user, ['id', 'email'])
  }, 
    secretKey,
  {
    expiresIn: accessTokenExpire
  })
  res.status(200).json({accessToken})
})

//EXPORT_ROUTER
export default app