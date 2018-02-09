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
const { ProductOrigin } = db.models
//ROUTE
app.get('/', async (req, res) => {
  let productOrigins = await getAllDerrivedAttributes(await ProductOrigin.findAll())
  
  if (!productOrigins) return res.status(404).json({
    error: 'not found',
    message: 'No any product origins yet'
  })

  res.status(200).json({
    productOrigins
  })
})

//EXPORT_ROUTER
export default app