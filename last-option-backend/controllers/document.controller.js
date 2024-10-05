import Document from '../models/Document.model.js';

const uploadDocument = async (req, res) => {
    try {
        const { userId, name } = req.body;
        const filename = req.file.filename;
        let _obj = {
            userId,
            name,
            url: filename,
        }

        let d = await Document.create(_obj);
        return res.json({ success: true })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Some error occurred!" })
    }
};

const getDocuments = async (req, res) => {
    try {
        let d = await Document.findAll();
        return res.json({ success: true, data: d })
    } catch (error) {
        res.status(500).json({ success: false, message: "Some error occurred!" })
    }
};


export {
    uploadDocument,
    getDocuments,
}