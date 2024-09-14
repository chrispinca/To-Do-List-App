import express from 'express'
import mongoose from 'mongoose'
import {mongoDbUri, PORT} from './config.js'
import taskRoutes from './routes/taskRoutes.js'
import cors from 'cors';

const app = express();

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