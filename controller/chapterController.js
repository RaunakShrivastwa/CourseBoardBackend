import Chapter from '../model/Chapter.js';
import Course from '../model/Course.js'

export default class ChapterController{

    addChapter = async (req,res)=>{
        try{
            const course = await Course.findById(req.body.course);
            if(course){
                 const chapter = await Chapter.create(req.body);

                 course.chapter.push(chapter);
                 course.save();
                 return res.json(chapter)
            }else{
                return res.json({Error:'Course Not Exist'})
            }
        }catch(err){
            return console.log("There is error ",err);
        }
    }

    getAllChapter = async (req,res)=>{
        try{
             return res.json(await Chapter.find({}));
        }catch(err){
            return console.log("THere is error ",err);
        }
    }

    getSingleChapter = async (req,res)=>{
        try{
             const chapter = await Chapter.findById(req.params.id);
             if(chapter){
                return res.json({Found:chapter})
             }else{
                return res.json({Message:'Chapter not exist'})
             }
        }catch(err){
            return console.log("There is error",err);
        }
    }

    deleteChapter = async (req, res) => {
        try {
            const chapter1 = await Chapter.findByIdAndDelete(req.params.id);
            if (chapter1) {
                const course = await Course.findById(chapter1.course);
                if (course) {
                    course.chapter.pull(chapter1._id);
                    await course.save();
                }
                return res.json({ Deleted: chapter1 });
            } else {
                return res.json({ Message: 'Chapter does not exist' });
            }
        } catch (err) {
            console.log("There is an error", err);
            return res.status(500).json({ error: "Internal server error" });
        }
    }
    
}