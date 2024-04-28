import mongoose from 'mongoose'


const userSchema = new mongoose.Schema({

    userName: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    createdAt: {

    }
    
    


}, {timestamps:true})

export const User = mongoose.model('User', userSchema)