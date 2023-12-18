import db from "./database";
import { Request, Response } from "express";
const bcrypt = require("bcrypt");
const express = require("express");
const cors = require("cors");

const bodyParser = require("body-parser");
const app = express();
const port = 8080;

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(bodyParser.json());

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS signup (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL
  )
`;
db.query(createTableQuery)
  .then(() => {
    console.log('Users table created or already exists');
  })
  .catch(err => {
    console.error('Error creating users table:', err);
  })

app.post("/api/join-now", async (req: Request, res: Response) => {
  try {
    const { username, email, password, confirmPassword } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);
    console.log(req.body);
    await db.query('INSERT INTO signup (username, email, password) VALUES ($1, $2, $3)', [username, email, hashedPassword])
  } catch (error) {
    console.error("couldnt get the request from the user in sign up", error);
    res.status(500).send("Error occurred while registering user");
  }
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
