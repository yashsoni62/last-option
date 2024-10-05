import multer from 'multer';

const documentStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/documents/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const documentUploader = multer({ storage: documentStorage });

export default documentUploader;
