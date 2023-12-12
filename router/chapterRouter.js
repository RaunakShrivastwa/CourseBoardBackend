import express from 'express';
import ChapterController from '../controller/chapterController.js';
const Chapter = new ChapterController();

const router = express.Router();

router.post('/add',Chapter.addChapter);
router.get('/getAll',Chapter.getAllChapter)
router.get('/getSingle/:id',Chapter.getSingleChapter);
router.delete('/delete/:id',Chapter.deleteChapter)




export default router;