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
  authentication
} from '../utils'

//INIT
const app = express.Router()

//ROUTE
app.get('/', authentication, async (req, res) => {
  res.status(200).json({
    user: req.user
  })
})

//EXPORT_ROUTER
export default app