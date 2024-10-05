import React, { useContext, useState } from 'react'
import "./Upload.css"
import UserContext from '../../contexts/UserContext'
import { API_BASE_URL } from '../../common/constants'

const Upload = () => {

    const { user } = useContext(UserContext)

    const [file, setFile] = useState(null);
    const [filename, setFilename] = useState("");

    const handleUpload = async (e) => {

        if (user === null) {
            alert("Please login to upload documents.");
            return;
        }

        e.preventDefault();

        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', filename);
        formData.append('userId', user.id);

        try {
            const res = await fetch(`${API_BASE_URL}/document/uploadDocument`, {
                method: 'POST',
                body: formData,
            });

            const data = await res.json();
            if (data.success === true) {
                alert("File uploaded successfully.");
                setFilename("")
            }
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div class="container">
            <h1>Upload Document</h1>
            <form onSubmit={handleUpload} method="post" enctype="multipart/form-data">
                <input type="file" name="file" required onChange={(e) => setFile(e.target.files[0])} />
                <input type="text" name="filename" value={filename} onChange={(e) => setFilename(e.target.value)} placeholder="File Name" required />
                <button type="submit">Save</button>
            </form>
        </div>
    )
}

export default Upload;