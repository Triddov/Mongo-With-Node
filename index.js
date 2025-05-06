import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT || 80



const app = express()

app.listen(PORT, () => console.log(` ==== SERVER RUNNING ON ${PORT} PORT ==== `))


