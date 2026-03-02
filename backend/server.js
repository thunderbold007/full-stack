import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import User from './User.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
console.log(process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected'))
.catch(err => {
  console.log("t@");
  
  console.error('MongoDB connection error:', err)});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/api/signup',async  (req, res) => {
    const { name, email, password } = req.body;
    await  User.create({ name, email, password })
    const user = User.findOne({ email });
    res.json({ message: 'Signup successful',success:true ,user:user});
});

// this.comm

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});