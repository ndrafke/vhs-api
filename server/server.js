import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import cors from 'cors';
import routes from './posts/router.js';


const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

app.use('/posts', routes);

app.get('/', (req, res) => {
    res.send("Welcome to the VHS Collection API")
})



// Connect to mongo db atlas:
const PORT = process.env.PORT || 5000;
const CONNECTION_URL = process.env.CONNECTION_URL;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> app.listen(PORT, () => console.log(`Listening on port: http://localhost:${PORT}`)))
.catch((error)=> console.log(error.message))





export default app;
