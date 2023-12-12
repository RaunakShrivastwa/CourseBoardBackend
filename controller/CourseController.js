import Course from '../model/Course.js';

export default class CourseData{

    addCourse = async (req,res)=>{
         try{
              const course = await Course.create(req.body);
              return res.json({Course:course})
         }catch(err){
            return console.log("THere is error ",err);
         }
    } 

    getAllCourse = async (req,res)=>{
        try{
            const course = await Course.find({}).populate('chapter')
            return res.json(course)
        }catch(err){
            return console.log("There is error ",err);
        }
    }

    getSingleCourse = async (req,res)=>{
        try{
             const course = await Course.find({milestone:req.params.id}).populate('chapter');
             if(course){
                return res.json(course)
             }else{
                return res.json({Error:'Course Doest exist'})
             }
        }catch(err){
            return console.log("There is error ",err);
        }
    }

    deleteCourse = async (req,res)=>{
        try{
             const course = await Course.findByIdAndDelete(req.params.id);
             if(course){
                return res.json(course)
             }else{
                return res.json({Error:'Course Doest exist'})
             }
        }catch(err){
            return console.log("There is error ",err);
        }
    }

    getSimple = async (req,res)=>{
        try{
            return res.json(await Course.find({}))
        }catch(err){
            return console.log("There is error ",err);
        }
    }
}