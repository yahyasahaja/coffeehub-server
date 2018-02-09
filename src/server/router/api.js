//MODULES
import express from 'express'

//INIT
import Sessions from '../controller/Sessions'

const app = express.Router()
app.use((req, res, next) => {
  res.header('Content-Type', 'application/json')
  next()
})

//ROUTER
import Session from '../controller/Sessions'
import Products from '../controller/Products'
import User from '../controller/User'
import ProductOrigins from '../controller/ProductOrigins'

app.use('/sessions', Session)
app.use('/products', Products)
app.use('/user', User)
app.use('/productorigins', ProductOrigins)

app.get('/tifo', (req, res) => {
  res.json({
    message: 'WOOOOIII'
  })
})

export default app 