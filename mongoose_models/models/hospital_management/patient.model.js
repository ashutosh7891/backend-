import mongoose from 'mongoose'

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor'
    },
    admittedHospital: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital'
    },
    dignosedWith: {
        type: String,
        required: true
    },
    bloodGroup: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true,
        enum: ['M', 'F', 'O']

    },
},{timestamps:true})


export const Patient = mongoose.model('Patient', patientSchema)