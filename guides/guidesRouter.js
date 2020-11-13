const express = require("express");
const { route } = require("../user/userRouter");
const router = express.Router();
const Guides = require('./guidesModel')
const Users = require('../user/userModel')


//gets all guides
router.get('/guides', async (req, res, next) => {
    try {
        res.json(await Guides.find())
    } catch(err) {
        next(err)
    }
})

//gets guide by ID, returns error if guide with specified id doesnt exist
router.get('/guides/:id', async (req, res, next) => {
    try {
        const guide = await Guides.findById(req.params.id)
        if(!guide){
            return res.status(401).json({
                message:`the guide with id ${req.params.id} does not exist`
            })
        }
        res.json(await Guides.findById(req.params.id))
    } catch(err) {
        next(err)
    }
})

//gets all guides for a specified user, returns error if user id does not exist
router.get('/user/:id/guides', async (req, res, next) => {
    try {
        const user = await Users.findById(req.params.id)
        if(!user){
            return res.status(401).json({
                message: `user with id ${req.params.id} does not exist`
            })
        }
        res.json(await Guides.findByUser(req.params.id))
    } catch(err) {
        next(err)
    }
})

//create a new guide
router.post('/guides', async (req, res, next) => {
  try {
      const newGuide = req.body

      if(!req.body.description || !req.body.userID){
        res.status(400).json({
            message:'please provide a description and userID'
        })
    }

    res.json(await Guides.add(newGuide))
  } catch (err) {
      next(err)
  }
})

//delete a guide
router.delete('/guides/:id', async (req, res, next) => {
    try {
        const id = req.params.id
      res.json(await Guides.remove(id))
    } catch (err) {
        next(err)
    }
  })

//update a guide
router.put('/guides/:id', async (req, res, next) => {
    try {
        const updates = req.body
        const id = req.params.id
        
        if(!req.body.description){
            res.status(400).json({
                message:'please provide a description'
            })
        }
      
      res.json(await Guides.update(updates, id))
    } catch (err) {
        next(err)
    }
})

module.exports = router