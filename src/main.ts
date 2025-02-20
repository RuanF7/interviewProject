require('dotenv').config()
const express = require('express')

async function main() {
  const app = express()
  const port = process.env.APP_PORT

  app.listen(port, () => {
    console.log("Hello World!")
    console.log(`App listening on port ${port}`)
  })
}

main()