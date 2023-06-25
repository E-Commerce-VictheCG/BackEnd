const express = require("express");
const route = express.Router();
const {
    HandleGetUser,
    HandleUserRegister,
    HandleUserLogin} = require("../Controllers/User_Controller");

route.post("/register", HandleUserRegister);
route.post("/login", HandleUserLogin);
route.get("/users", HandleGetUser);

module.exports = route