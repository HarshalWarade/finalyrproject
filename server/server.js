const express = require('express')
const app = express()
const port = 5000

app.get('/', async (req, res) => {
    return res.status(200).json({msg: "okay!"})
})

app.listen(port, (err) => {
    if(err) { console.log(`Error occured at setup: ${err}`) }
    else { console.log(`Server running on: http://localhost:${port}`) }
})