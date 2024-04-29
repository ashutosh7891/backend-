import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    specialzation:{
        type: String,
        required: true
    },
    hospital: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital'
    
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    salary: {
        type: String,
        required: true
    },
    expirience: {
        type: Number,
        default: 0
    },
    worksInHosiptals: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Hospital'
    
    }
}, {timestamps:true})

export const Doctor = mongoose.model('Doctor', doctorSchema)