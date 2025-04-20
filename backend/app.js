
import transactionRoutes from './routes/transactions.js'

import express from 'express';
import cors from 'cors';
import {connectDB} from './db/db.js'; 

// app config
const app = express();
const PORT=8000;
const MONGO_URL='mongodb+srv://sagarbhatiya:Sagar%40170304@cluster0.aiyt4iq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

console.log('PORT:', PORT);
console.log('MONGO_URL:', MONGO_URL);

// middlewares
app.use(express.json());
app.use(cors());

// db connection
connectDB(MONGO_URL);

//api endpoints
app.use("/transaction",transactionRoutes);

app.get('/', (req, res) => {
  res.send("Hello from the backend!");
});

app.listen(PORT,()=>{
  console.log(`Server Started on http://localhost:${PORT}`)
})




