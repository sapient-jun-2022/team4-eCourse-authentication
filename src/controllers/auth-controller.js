import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { UserSchema } from "../models/auth-model";
import { compare, hash } from "../utils/hash";

const User = mongoose.model('User', UserSchema);
require('dotenv').config();

const privateKey = process.env.PRIVATE_KEY;

export const signup = async (req, res) => {
    const user = req.body;
    user.password = await hash(user.password);
    let newUser = new User(user);

    newUser.save((err, user) => {
        if (err) {
            res.send(err);
        } else {
            res.json(user);
        }
    })
}

//To get all users
export const getAllUsers = (req, res, next) => {
    jwt.verify(req.token, privateKey, (error, data) => {
        if (error) {
            res.sendStatus(403);
        } else {
            console.log(data);
            User.find({}, (err, user) => {
                if (err) {
                    res.send(err);
                } else {
                    res.json(user);
                }
            })
        }
    })
}

export const login = async (req, res) => {
    try {
        const token = jwt.sign(req.body, privateKey)
        const retUser = await User.findOne({ email: req.body.email });
        const validateUser = await compare(req.body.password, retUser.password);
        
        if (validateUser) {
            res.send(token);
            // res.json({
            //     token: token
            // });
        } else {
            res.send('Sorry, not valid credentials ' + req.body.email);
        }
    } catch (err) {
        res.send({msg: 'Error authenticating ' + req.body.email});
    }
}

export const logout = (req, res) => {
    // delete the token from local storage when click on logout
}

export const home = (req, res) => {
    res.json({ "message": "Welcome from Express" });
}