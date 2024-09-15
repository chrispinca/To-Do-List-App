import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import taskRoutes from './routes/taskRoutes.js';
import cors from 'cors';

dotenv.config();

const app = express();
const mongoDbUri = String(process.env.mongoDbUri);
const PORT = process.env.PORT;

app.use(cors({ origin: 'http://localhost:5173' }));

app.use(express.json());
app.use('/tasks', taskRoutes);


app.get('/', (req, res) => {
    console.log(req);
    return res.status(200).send("Welcome to note app");
});

mongoose
    .connect(mongoDbUri)
    .then(() => {
        console.log("connected to database");

        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        })
    })
    .catch((error) => {
        console.log(error);
    });