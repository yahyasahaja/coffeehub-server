//MODULES
import express from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import _ from 'lodash'
import db from './connection'

//CONFIG
import {
  JWT,
} from './config'
let {
  secretKey
} = JWT

//EXPORTS
export const getAllDerrivedAttributes = async Model => {
  if (!Model) return null
  if ('get' in Model) Model = Model.get()
  
  if ('0' in Model || '1' in Model) {
    for (let i in Model) Model[i] = await getAllDerrivedAttributes(Model[i])
    return Model
  }
  
  for (let i in Model) 
    if ((typeof Model[i] === 'object' || typeof Model[i] === 'array') && Model[i])
      if ('then' in Model[i])
        Model[i] = await Model[i]
      else await getAllDerrivedAttributes(Model[i])
  return Model
}

export const hashPassword = async password => {
  return await bcrypt.hash(password, 12)
}

export const getCustomer = async id => {
  return await getAllDerrivedAttributes(await db.models.Customer.findOne({where:{id}}))
}

export const authentication = async (req, res, next) => {
  function sendInvalidAuthorization() {
    return res.status(401).json({
      error: 'Unauthorized',
      message: 'Auhthorization headers is invalid'
    })
  }

  let headers = req.headers
  if (!('authorization' in headers)) return sendInvalidAuthorization()
  
  let authorization = headers.authorization.split(' ')
  if (authorization.length !== 2) return sendInvalidAuthorization()

  let [ scheme, token ] = authorization

  if (!(/^Bearer$/i.test(scheme))) res.status(401).json({
    error: 'Unauthorized',
    message: 'Bad credentials format'
  })
  
  let tokenData

  function sendTokenInvalid() {
    return res.status(401).json({
      messaage: 'Unauthorized',
      message: 'Token is invalid'
    })
  }
  
  try {
    tokenData = jwt.verify(token, secretKey)
  } catch (e) {
    return sendTokenInvalid()
  }

  let {id} = tokenData.user
  
  let user = await getCustomer(id)
  if (!user) return sendTokenInvalid()
  req.user = user
  next()
}

export default {
  getAllDerrivedAttributes,
  getCustomer,
  hashPassword,
  authentication,
}