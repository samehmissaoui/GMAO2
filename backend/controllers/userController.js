const express = require("express");
const bcrypt = require("bcryptjs");

const app = express();


const login = (req, res, next) => {
    const user = getUserData();
    const userParams = req.body.useremail;
    const foundUser = user.find((user) => user.email === userParams);
    if (foundUser) {
      return res.status(401).json({ error: "utilisateur déjà existant!" });
    } else {
      const name = req.body.name;
      const password = req.body.password.toString();
      const useremail = req.body.email;
      const role=req.body.role
      const salt = bcrypt.genSaltSync(6);
      const hashedPassword = bcrypt.hashSync(userpass, salt);
      const objUser = {
        // userId:Date.now().toString(),
       name : req.body.name,
        password :hashedPassword,
       useremail :req.body.email,
         role:req.body.role,
      
      };
      user.push(objUser);
      saveUserData(user);
      res.send({ success: true, msg: "User data added successfully" });
    }};



    module.exports = {
        register,
        login,
      };
      