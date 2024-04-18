//import express from "express";
//import "../db/conn.js";

const express = require("express");
require("../db/conn");
const Register = require("./registers");

const port = 3000;
const app = express();
const path = require("path");
const static_path = path.join(__dirname, "../../public");
const template_path = path.join(__dirname, "../../templates/views");
const partial_path = path.join(__dirname, "../../templates/pertials");
const hbs = require("hbs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//console.log(template_path);
app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partial_path);
// console.log(static_path);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/register", (req, res) => {
  res.render("register");
});
//create a new user in our database
app.post("/register", async (req, res) => {
  try {
    const registerEmployee = new Register({
      username: req.body.username,
      password: req.body.password,
    });
    const registered = await registerEmployee.save();
    res.status(201).render("index");
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;
    const empusername = await Register.findOneAndUpdate({
      username: username,
    });

    if (empusername.password === password) {
      res.status(201).render("index");
    } else {
      res.send(`wrong password`);
    }
  } catch (error) {
    res.status(400).send(`incorrect value`);
  }
});

app.listen(port, () => {
  console.log(`app start on port no ${port} `);
});
