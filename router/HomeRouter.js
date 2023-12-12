import express from 'express';
import StudentRouter from './StudentRouter.js';
import CourseRouter from './CourseRouter.js'
import passport from 'passport';
import chapterRouter from './chapterRouter.js'

const router = express.Router();

router.use('/user',StudentRouter);
router.post('/signUp',(req,res)=>{
    return res.json({Error:'error'})
});

router.use('/course',CourseRouter);
router.use('/chapter',chapterRouter);



export default router;