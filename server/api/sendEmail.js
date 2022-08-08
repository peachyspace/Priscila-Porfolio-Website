const router = require('express').Router()
module.exports = router
const axios = require('axios')

//POST  /api/sendEmail/
router.post('/', async (req, res, next) => {
  try {
    const data = {
      service_id: process.env.SERVICE_ID,
      template_id: process.env.TEMPLATE_ID,
      user_id: process.env.USER_ID,
      template_params: req.body,
      accessToken: process.env.ACCESS_TOKEN
    }
    await axios
      .post('https://api.emailjs.com/api/v1.0/email/send', data)
      .then(response => {
        res.json(response.statusText)
      })
  } catch (error) {
    next(error)
  }
})
