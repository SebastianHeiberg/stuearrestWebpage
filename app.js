const bodyParser = require('body-parser');
const express = require('express')

const app = express()
app.use(bodyParser.json())

const PORT = 8080;

const badKids = [ {name: 'Buster', punishmentDescription: 'Ate the cats food'}]

app.listen(PORT, () => {
    console.log('App is running on port: ', PORT)
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get("/punished", (req, res) => {
    res.sendFile(__dirname + "/punished.html");
});


app.get("/badkids", (req, res) => {
    res.status(200).send( { data: {badKids} })
})

app.post("/badkids", (req, res) => {
    badKids.push(req.body)
})

