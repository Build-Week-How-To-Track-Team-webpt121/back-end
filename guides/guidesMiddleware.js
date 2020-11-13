const db = require('../database/config')
const Guide = require('./guidesModel')

const validateGuideId = (req, res, next) => {
    Guide.findById(req.params.id)
    .then((guide) => {
        if(guide) {
            req.guide = guide
            next()
        } else {
            res.status(404).json({
                message: `the guide with id ${req.params.id} not found`
            })
        }
    }) 
    .catch((err) =>{
        res.status(500).json('oops, something went wrong')
    })
}

  module.exports = {
      validateGuideId,
  }