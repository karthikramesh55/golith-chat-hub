const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const Chatkit  = require('@pusher/chatkit-server')

const app = express()

const chatkit = new Chatkit.default({
    instanceLocator: "v1:us1:b352b2e7-6b8d-4497-8f4d-36950948788d",
    key: "85fd1650-5a37-4d4e-8d73-6e12ad097ace:LHxjZ8u9m82W1PvTP/zNE7f+Vdg7S2IMVt6sBqVBB30="
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.post('/users', (req, res) => {
  const { username } = req.body
  chatkit
    .createUser({ 
      id: username, 
      name: username 
    })
    .then(() => res.sendStatus(201))
    .catch(error => {
      if (error.error_type === 'services/chatkit/user_already_exists') {
        res.sendStatus(200)
      } else {
        res.status(error.status).json(error)
      }
    })
})

app.post('/authenticate', (req, res) => {
  const authData = chatkit.authenticate({ userId: req.query.user_id })
  res.status(authData.status).send(authData.body)
})

const PORT = 3001
app.listen(PORT, err => {
  if (err) {
    console.error(err)
  } else {
    console.log(`Running on port ${PORT}`)
  }
})