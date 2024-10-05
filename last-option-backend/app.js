import express from "express";
import userRouter from './routes/user.routes.js';
import documentRouter from './routes/document.routes.js';
import cors from 'cors';
import sequelize from "./models/index.js";



const app = express()
app.use(cors({
    origin: "*",
}));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.static("uploads"))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use("/api/user", userRouter);
app.use("/api/document", documentRouter);

sequelize.sync()

app.listen(8000, () => {
    console.log('Server is running on http://localhost:8000')
})  