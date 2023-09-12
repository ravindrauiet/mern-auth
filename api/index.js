import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log('Connected to MongoDB');
})
.catch((err)=>{
    console.error(`Error connecting to database: ${err}`);
});

// add password after username and add project name after .net/

const app = express();

app.listen(3000 , () => {
    console.log('Server is running on port 3000!');
});