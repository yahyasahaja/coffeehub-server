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
  authentication,
  getAllDerrivedAttributes
} from '../utils'

//INIT
const app = express.Router()

//ROUTE
let { Product } = db.models

app.get('/:product_origin_id', async (req, res) => {
  if (!('product_origin_id' in req.params)) return res.status(400).json({
    error: 'bad request',
    message: 'product_origin_id required'
  })

  let { product_origin_id } = req.params
  let { offset = 0, limit = 10 } = req.query

  let products = await Product.findAndCountAll({
    where: { product_origin_id },
    offset,
    limit
  })

  if (!products) return res.status(404).json({
    error: 'not found',
    message: 'No product(s) found'
  })
  
  return res.status(200).json({
    products
  })
})

app.get('/', authentication, async (req, res) => {
  let { offset = 0, limit = 10 } = req.query
  let products = await getAllDerrivedAttributes(await Product.findAndCountAll({offset, limit}))
  
  if (!products) return res.status(404).json({
    error: 'not found',
    message: 'No product(s) found'
  })

  return res.status(200).json({
    products
  })
})

//EXPORT_ROUTER
export default app