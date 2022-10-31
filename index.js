const express = require("express")
const app = express()
const port = process.env.PORT || "7005"

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get("/", (req, res) => {
  const obj = {
    "slackUsername": "kJejelaye",
    "backend": true,
    "age": 26,
    "bio": "I am a backend developer currently living in Lagos, Nigeria. I am interested in Web development, mobile development, data structures and algorithms. I strongly desire to be challenged and to test my limits - and that is why I'm here."
  }
  res.json(obj)
})

app.listen(port, () => {
  console.log(`Server live on ${port}`)
})
