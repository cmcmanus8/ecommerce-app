import express from 'express'
import dotenv from 'dotenv'
import config from './config'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import userRoute from './routes/userRoute'
import productRoute from './routes/productRoute'

dotenv.config()

const mongodbUrl = config.MONGODB_URL
mongoose.connect(
  mongodbUrl,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  }
).catch((error) => console.log(error.reason))

const app = express()

app.use(bodyParser.json())
app.use(
  '/api/users',
  userRoute
)
app.use(
  '/api/products',
  productRoute
)

app.listen(
  5000,
  () => {
    console.log('Server started at http://localhost:5000')
  }
)
