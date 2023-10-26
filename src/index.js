const express = require('express')
const cors = require('cors')
path = require('path')

const app = express()
const messageRouter = require('./routers/messageRouter')

const PORT = process.env.PORT
const sequelize = require('./db/sequelize')

app.use(express.json())
app.use(cors())
app.use("/messages", messageRouter)

app.use("/", (req,res) =>{
    res.send("ok")
})

sequelize.sync()
    .then(() => app.listen(PORT, ()=>console.log("server ConnectionStates, port: ",PORT)))
    .catch(err=> console.log(err))