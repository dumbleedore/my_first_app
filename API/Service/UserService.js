const express = require("express");
const mongoose = require("mongoose");
const User = require("../Models/User");
const router = express.Router();

module.exports = {
  async Register(req, res) {
    const username = req.body.username;
    await User.find({ username: username }, (error, data) => {
      if (data.length == 0) {
        const usuario = new User({
          username: req.body.username,
          password: req.body.password,
        });
        let saveUser = usuario.save();
      } else {
        res.json({ message: "Usuario já cadastrado" });
      }
    });
  },

  async Login(req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const user = await User.find(
      { username: username, password: password },
      (err, data) => {
        if (err) {
          console.log(err);
        }
        if (data.length > 0) {
          data.map((user) => {
            return res.json(user.id);
          });
        } else {
          return res.json({ message: "Username ou Senha incorretos" });
        }
      }
    );
  },

  async deleteUsers(req, res) {
    User.deleteMany({}).then(() => {
      res.json({ message: "Usuarios deletados" });
    });
  },

  async getUsers(req, res) {
    User.find({}, (err, data) => {
      if (err) {
        console.log(err);
      }
      res.json(data);
    });
  },
};
