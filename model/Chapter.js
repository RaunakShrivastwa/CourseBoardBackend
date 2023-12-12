import mongoose from "mongoose";

const chapterSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    documents:{
        type:String
    },
    videoLink:{
        type:String
    },
    course:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    },
    milestone:{
        type:String
    }
});

const Chapter = mongoose.model("Chapter",chapterSchema);

export default Chapter;