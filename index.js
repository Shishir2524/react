const express = require('express')
const app = express()
const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/travelphoto",
    //mongoose.connect("mongodb+srv://ruzz_dish:dishruzz@ruzzdish.bczrt.mongodb.net/Ruzzdish?retryWrites=true&w=majority",

    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error(err))

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(5010);
