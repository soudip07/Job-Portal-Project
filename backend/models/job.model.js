import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    location: { 
        type: String,
        required: true,
    },
    requirements:[
        {
            type: String,
        },
    ],

    salaryRange: {
        minSalary: {
            type: Number,
            required: true,
        },
        maxSalary: {
            type: Number,
            required: true,
        },
    },
    jobType: {
        type: String,
        enum: ['full-time', 'part-time', 'internship'],
        required: true,
    },
    position:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Company',
        required:true,
    },
    company:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Company',
        required:true,
    },
    created_by:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    
}, { timestamps: true });
export const Job = mongoose.model("Job", jobSchema);