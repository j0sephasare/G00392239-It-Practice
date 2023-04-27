const express = require('express');
const app = express();
const port = 4000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors');
const session = require('express-session');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());
app.use(express.json());

// Configure session middleware
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: false,
}));

// mongoose database
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect('mongodb+srv://root1:user1@cluster0.8kcocq3.mongodb.net/test');
}

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { collection: 'user-data' },
);

const userModel = mongoose.model('UserData', userSchema);

app.post('/api/register', async (req, res) => {
  console.log(req.body);
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    await userModel.create({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    res.status(201).json({ status: 'success', message: 'User created successfully' });
  } catch (err) {
    res.status(400).json({ status: 'error', error: 'Duplicate Email' });
  }
});

app.post('/api/login', async (req, res) => {
  const user = await userModel.findOne({
    email: req.body.email,
  });

  if (!user) {
    return res.status(400).json({ message: 'Invalid email or password' });
  }

  const match = await bcrypt.compare(req.body.password, user.password);
  if (!match) {
    return res.status(400).json({ message: 'Invalid email or password' });
  }

  // Store user ID in session
  req.session.userId = user._id;
  res.status(200).json({ status: 'success', message: 'User logged in successfully' });
});

app.get('/api/logout', (req, res) => {
  // Destroy session
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
      res.status(500).json({ status: 'error', error: 'Could not logout user' });
    } else {
      res.status(200).json({ status: 'success', message: 'User logged out successfully' });
    }
  });
});

app.get('/api/user', async (req, res) => {
  if (!req.session.userId) {
    return res.status(401).json({ message: 'User not authenticated' });
  }

  const user = await userModel.findById(req.session.userId, '-password');
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.status(200).json({ status: 'success', data: user });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
