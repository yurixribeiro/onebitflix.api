import express from 'express'
import { sequelize } from './database'
import { adminJs, adminjsRouter } from './adminjs'
import { router } from './routes'

const app = express()

app.use(express.static('public'))

app.use(express.json())

app.use(adminJs.options.rootPath, adminjsRouter)

app.use(router)

const PORT = process.env.port || 3000

app.listen(PORT, () => {
  sequelize.authenticate().then(() => {
    console.log('DB connection successfull.✌️')
  })

  console.log(`Server started successfuly at port ${PORT}.🚀`)
})