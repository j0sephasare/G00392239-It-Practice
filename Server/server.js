const express = require('express');
const app = express();
const port = 4000;
const mongoose = require('mongoose');
var bodyParser = require('body-parser')
const cors = require('cors');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors());

//mongoose database
main().catch(err => console.log(err));
async function main(){
    await  await mongoose.connect('mongodb+srv://football1:football1@cluster0.6kgyhyt.mongodb.net/?retryWrites=true&w=majority');
    //use `await mongoose.connect('mongodb://username:password@localhost:27017/test');`
}

const teamSchema = new mongoose.Schema({
    teamLogo: String,
    teamName: String,
    founded: String, 
    trophies: String,
    rivals: String,
});

const teamModel = mongoose.model('Teams', teamSchema);

app.listen(port, ()=> {
    console.log(`App listening on port ${port}`)
})
