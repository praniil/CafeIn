import db from './database'
import { Request, Response } from "express"
const express = require("express")
const cors = require("cors")

const bodyParser = require("body-parser")
const app = express();
const port = 8080;

app.use(
    cors({
        origin: "http://localhost:3000"
    })
)
app.use(bodyParser.json())

app.post("/api/join-now", async (req : Request, res: Response) => {
    try {
        const { username, email, password, confirmPassword } = req.body;
        console.log(req.body);
    } catch (error) {
        console.log("couldnt get the request from the user in sign in")
    }
})

app.listen(port, ()=> {
    console.log(`App listening on port ${port}`)
});