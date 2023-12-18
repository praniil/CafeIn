"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pg = require("pg");
//client is instange of Client class provided by the pg library that represents a connection to a postgresql database. allows you to execute SQL queries
//query := command that is sent to database
var Client = pg.Client;
var client = new Client({
    host: "localhost",
    user: "postgres",
    password: "206001",
    database: "cafein",
    port: 5432,
});
client.connect()
    .then(function () {
    console.log("connected to Postgresql");
})
    .catch(function (error) {
    console.error("Error connectiong to Postgresql", error);
});
exports.default = client;
