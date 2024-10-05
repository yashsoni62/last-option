import { Router } from 'express';
import { getDocuments, uploadDocument } from '../controllers/document.controller.js'
import documentUploader from '../middlewares/multer.middleware.js';

const documentRouter = Router();

documentRouter.post('/uploadDocument', documentUploader.single('file'), uploadDocument);
documentRouter.get('/getDocuments', getDocuments);

export default documentRouter;