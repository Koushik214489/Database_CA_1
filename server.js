const express = require ('express');
const app = express();
const Port = 8000;
const mongoose = require('mongoose');
const Menuitems = require("./Menu items")
// const Restaurents = reqiure("./Restaurant")

app.use (express.json());

app.listen (Port , (req,res) => {
    console.log(`Server is running in Port: ${Port}`);
})
