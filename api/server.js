const express = require("express")
const helmet = require("helmet")
const cors = require("cors")
const cookieParser = require('cookie-parser')


const restrict = require('../auth/restrict')
const userRouter = require('../user/userRouter')
const guidesRouter = require('../guides/guidesRouter')



const server = express()


server.use(helmet())
server.use(cors())
server.use(express.json())
server.use(cookieParser())

server.use(userRouter)
//guidesRouter will only work upon successful login
server.use(restrict, guidesRouter)

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})

module.exports = server
