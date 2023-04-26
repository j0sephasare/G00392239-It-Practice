
const express = require('express');
const app = express();
const port = 4000;
const mongoose = require('mongoose');
var bodyParser = require('body-parser')

const bcrypt = require("bcrypt")
const cors = require('cors');


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors());
app.use(express.json())

//mongoose database
main().catch(err => console.log(err));
async function main(){
    await mongoose.connect('mongodb+srv://root1:user1@cluster0.8kcocq3.mongodb.net/test');
    //use `await mongoose.connect('mongodb://username:password@localhost:27017/test');`
}

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true, 
    },
    password: {
      type: String,
      required: true
    },
   
  } ,
    { collection : 'user-data'}
  )
  
const userModel = mongoose.model('UserData', userSchema);

app.post('/api/register', async (req, res) => {
  console.log(req.body)
  try{
    await userModel.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    })
    res.json ({ status : 'ok'})
  }catch(err){
    res.json({ status: 'error', error: 'Duplicate Email' })
  }
})

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email });

  if (!user) {
    return res.json({ message: 'Invalid email or password' });
  }

  res.status(200).json({ message: 'Login successful' });
});


app.listen(port, ()=> {
    console.log(`App listening on port ${port}`)
})

