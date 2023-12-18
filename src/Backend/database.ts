import * as pg from "pg";
//client is instange of Client class provided by the pg library that represents a connection to a postgresql database. allows you to execute SQL queries
//query := command that is sent to database

const { Client } = pg;
const client = new Client({
    host: "localhost",
    user: "postgres",
    password: "206001",
    database: "cafein",
    port: 5432,
})

client.connect()
.then(()=> {
    console.log("connected to Postgresql");
})
.catch((error: Error) => {
    console.error("Error connectiong to Postgresql", error);
})

export default client;