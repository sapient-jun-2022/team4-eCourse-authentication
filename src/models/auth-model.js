import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    firstName: {
        type: String,
        required: 'Please enter first name'
    }, 
    lastName: {
        type: String,
        required: 'Please enter last name'
    },
    email: {
        type: String,
        required: 'Please enter email'
    },
    mobileNo: {
        type: Number,
        required: 'Please enter mobile number'
    },
    password: {
        type: String,
        required: 'Please enter password'
    },
    Organization: {
        type: String
    },
    wishListInfo: {
        type: Array
    },
    muLearningInfo: {
        type: Array
    },
    language: {
        type: String
    },
    learnerStage: {
        type: String
    }
})