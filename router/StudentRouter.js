import express from 'express';
import studentController from '../controller/studentController.js';
import passportLocal from '../config/passport-local.js'
const controller = new studentController();
import passport from 'passport';

const router = express.Router();
router.post('/add', controller.addStudent);
router.get('/getData', controller.getData);
router.get('/getSingle/:id',controller.getSingle);
router.delete('/delete/:id', controller.deleteStudent)

router.get('/auth/github', passport.authenticate('github', { scope: ['user:email'] }));
router.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: (req,res)=>{return res.json({Error:'error'})} }), controller.SignIn);

router.get('/auth/google',passport.authenticate('google',{scope:['profile','email']}));
router.get('/auth/google/callback',passport.authenticate('google',{ failureRedirect: (req,res)=>{return res.json({Error:'error'})} }),controller.SignIn);

router.post('/login',passport.authenticate('local',{failureRedirect:'/signUp'}) ,(req,res)=>{
    return res.json(req.user)
})

router.get('/logout',(req, res) => {
    req.logOut((user=>{
        return res.json({ Message: `logout Successfully!!!!` })
    }))
}
    )


   

export default router;