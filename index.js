const express = require("express")
const app = express()
const port = process.env.PORT || "7005"

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get("/", (req, res) => {
  const obj = {
    "slackUsername": "Kehinde Jejelaye",
    "backend": true,
    "age": 26,
    "bio": "I'm willing to put in the work."
  }
  res.json(obj)
})

app.listen(port, () => {
  console.log(`Server live on ${port}`)
})
