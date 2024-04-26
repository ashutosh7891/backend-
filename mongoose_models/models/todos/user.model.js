import mongoose from 'mongoose'


const userScehma = new mongoose.Schema({

    username: {
        type: String,
        unique: true,
        required: true,
        lowercase: true

    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true

    },
    password: {
        type: String,
        required: true,
        unique: true,
        lowercase: true

    }



} , {timestamps:true})

export const User = mongoose.model('User', username)
// when it will store in database the 'User' will be all in lowercase and in end 's' will be added => interview question
