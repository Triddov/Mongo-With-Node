import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import fileUpload from 'express-fileupload'
import router from './Routes/router.js'

dotenv.config()
const PORT = process.env.PORT || 80
const DB_URL = process.env.DB_MONGO_URL || ''

const app = express()

app.use(express.json()) // подключение middleware на парсинг json-ов
app.use(express.static('static'))
app.use(fileUpload({ }))
app.use("/api", router) // регистрация роутера


async function startApp(){
      try {
          await mongoose.connect(DB_URL)
          app.listen(PORT, () => console.log(` ==== SERVER RUNNING ON ${PORT} PORT ==== `))

      } catch (err) {
          console.log(err)
      }
}

startApp()
