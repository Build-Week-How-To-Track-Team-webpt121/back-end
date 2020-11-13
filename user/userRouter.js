const express = require("express");
const router = express.Router();
const Users = require('../user/userModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

//✅  welcome - initial test on server
router.get("/", (req, res, next) => {
	res.json({
		message: "its go time 🔥  ",
	})
})


//✅ Creates a user using the information sent inside the body of the request. Hash the password before saving the user to the database.
router.post('/register', async (req, res, next) => {
	try {
		const { username, password } = req.body
		const user = await Users.findBy({ username })

		//check to see if username already exists
		if(user) {
			return res.status(409).json({
				message: 'username already exists, try again'
			})
		}

		//if username doesnt exist, then create a newUser
		const newUser = Users.add({
			username,
			password: await bcrypt.hash(password, 14)
		})

		res.status(201).json({
			message: `Account for ${username} has been created`
		})
	} catch (err) {
		next(err)
	}
})

//✅ Use the credentials sent inside the body to authenticate the user. On successful login, create a new JWT with the user id as the subject and send it back to the client. If login fails, respond with the correct status code and an error message
router.post('/login', async (req, res, next) => {
	try {
		const { username, password } = req.body
		const user = await Users.findBy({ username })

		//check to see if the username is valid
		if(!user){
			return res.status(401).json({
			  message:"invalid credentials"
			})
		  }
		
		//check to see if the password is valid - must be hashed again to see if it matches what we have in database
		const passwordValid = await bcrypt.compare(password, user.password)

		if(!passwordValid){
		  return res.status(401).json({
			message: 'incorrect password'
		  })
		}

		//create a token
		const token = jwt.sign({
			userId: user.id,
		  }, process.env.JWT_SECRET)
	  
		  res.cookie('token', token)
	  
		  res.json({
			message: `Welcome ${username}`
		  })

	} catch (err) {
		next(err)
	}
})




module.exports = router