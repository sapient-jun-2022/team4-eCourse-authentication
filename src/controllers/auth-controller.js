import mongoose from "mongoose";
import { UserSchema } from "../models/auth-model";

const User = mongoose.model('User', UserSchema);

export const signup = (req, res) => {
    let newUser = new User(req.body);

    newUser.save((err, user) => {
        if (err) {
            res.send(err);
        } else {
            res.json(user);
        }
    })
}

export const getAllUsers = (req, res) => {
    User.find({}, (err, user) => {
        if (err) {
            res.send(err);
        } else {
            res.json(user);
        }
    })
}

export const home = (req, res) => {
    res.json({ "message": "Welcome from Express" });
}