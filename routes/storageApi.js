import express from 'express';
import { handleExternalUpload } from '../controllers/storageController.js';

const router = express.Router();

router.post('/upload', handleExternalUpload);

export default router;
