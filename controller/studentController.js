import Student from '../model/Student.js'


export default class studentController {
      addStudent = async (req, res) => {       
            if(req.body.cPassword != req.body.password){
                  return res.json({Error:'Password Not Matched'})
            }
            
            try {
                  const student = await Student.create(req.body);
                  return res.json({ created: student })
            } catch (err) {
                  return console.log("There is error ", err);
            }

      }

      // 
      getData = async (req, res) => {
            return res.json(await Student.find({}))
      }

      // get single Data
      getSingle = async (req,res)=>{
            try{
                  const student  = await Student.findById(req.params.id);
                  if(student){
                        return res.json({Found:student});
                  }else{
                        return res.json({Error:'Student not Found'})
                  }
            }catch(err){
                  return console.log("there is Error ",err);
            }
      }

      deleteStudent = async (req,res)=>{
            try{
                const student = await Student.findByIdAndDelete(req.params.id);
                if(student){
                   return res.json({Deleted:student});
                }else{
                  return res.json({Error:'Student Not exist '})
                }
            }catch(err){
               return console.log("There is Error ",err);
            }
      }

      SignIn =  (req,res)=>{
           const user = req.user._id;
           return res.redirect(`http://localhost:3000/start/${user}`)
      }
}