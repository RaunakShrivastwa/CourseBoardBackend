import express from 'express';
import CourseController from '../controller/CourseController.js';

const Course = new CourseController();
const router = express.Router();

router.post('/add',Course.addCourse);
router.get('/get',Course.getAllCourse);
router.get('/getSingle/:id',Course.getSingleCourse);
router.delete('/delete/:id',Course.deleteCourse);
router.get('/getSimple',Course.getSimple);

export default router;