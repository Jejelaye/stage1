const express = require("express")
const Enum = require("enum")
const app = express()
const port = process.env.PORT || "7005"
const slackUsername = "kJejelaye"

app.use(express.json())
// app.use(express.urlencoded({ extended: false }))

app.get("/", (req, res) => {
  const obj = {
    slackUsername,
    "backend": true,
    "age": 26,
    "bio": "I am a backend developer currently living in Lagos, Nigeria. I am interested in Web development, mobile development, data structures and algorithms. I strongly desire to be challenged and to test my limits - and that is why I'm here."
  }
  res.json(obj)
})

app.post("/", (req, res) => {
  const {
    operation_type,
    x,
    y
  } = req.body

  // console.log(operation_type, typeof(operation_type))
  // console.log(x, typeof(x))
  // console.log(y, typeof(y))

  if (!operation_type || !x || !y || typeof(operation_type) != 'string' || typeof(x) != 'number' || typeof(y) != 'number') {
    return res.status(404).json({
      msg: "Please enter values of the correct datatype"
    })
  }

  let _x = parseInt(x)
  let _y = parseInt(y)

  const myEnum = new Enum(["addition", "subtraction", "multiplication"])

  let enumKey = myEnum.get(operation_type).key
  let result

  switch(enumKey) {
    case "addition":
      result = _x + _y;
      break;
    case "subtraction":
      result = _x - _y;
      break;
    case "multiplication": 
      result = _x * _y
      break;
  }

  let obj = {
    slackUsername,
    result,
    operation_type: enumKey
  }

  res.status(200).json(obj)
})

app.listen(port, () => {
  console.log(`Server live on ${port}`)
})
