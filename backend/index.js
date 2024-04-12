import express from 'express';
import { PORT, dbURL } from './config.js';
import mongoose from 'mongoose';
import cors from 'cors'
import router from './routes/booksRoute.js';
var app = express();
app.use(cors())

//middle ware to unblock cors
app.use(express.json())//parsing middle ware 
app.get('/', (req, res) => {
  res.send('hello how are you i am from backend');
});
app.listen(PORT, () => {
  console.log(`SERVER STARTED IN PORT ${PORT}`);
});
app.use('/books', router);




    mongoose
      .connect(dbURL)
      .then(() => {
        console.log('DB CONNECTED');
        
        
      })
      .catch((error) => {
        console.log(error);
      });
//Route for update db 

    


