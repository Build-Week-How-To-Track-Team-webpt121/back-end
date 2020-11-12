const express = require("express")
const helmet = require("helmet")
const cors = require("cors")
const db = require('../database/config')

const server = express()


server.use(helmet())
server.use(cors())
server.use(express.json())

server.get("/", (req, res) => {
	res.json({
		message: "Ayyy, its up and working!",
	})
})

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})

module.exports = server
