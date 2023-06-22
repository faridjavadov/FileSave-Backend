import express from 'express'
import { uploadController } from '../controllers/uploadController.js';

export const uploadRoutes = express.Router();

uploadRoutes.post('/',uploadController.uploadFile)