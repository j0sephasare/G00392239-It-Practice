
const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
var bodyParser = require('body-parser')
const bcrypt = require("bcrypt")
const handleSignUp = require('./handlers/signup');
const cors = require('cors');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors());

//mongoose database
main().catch(err => console.log(err));
async function main(){
    await  await mongoose.connect('mongodb+srv://root1:user1@cluster0.8kcocq3.mongodb.net/test');
    //use `await mongoose.connect('mongodb://username:password@localhost:27017/test');`
}

const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    }
  });

const userModel = mongoose.model('User', userSchema);

app.post('/api/register', handleSignUp);

app.get('/login', (req, res) =>{
    res.render("components/login.js")
})

app.get('/api/register', (req, res) =>{
    res.render("components/register.js")
})

app.listen(port, ()=> {
    console.log(`App listening on port ${port}`)
})

