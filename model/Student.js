import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    course:{
        type: String
    },
    enroll:{
        type:Boolean
    },
    image:{
        type:String
    }
});

const Student = mongoose.model("Student",studentSchema);

export default Student;