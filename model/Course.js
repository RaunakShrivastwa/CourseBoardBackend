import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    duration:{
        type:String,
        required:true
    },
    milestone:{
        type:String
    },
    chapter:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Chapter'
        }
    ]
});

const Course = mongoose.model('Course',courseSchema);
export default Course;