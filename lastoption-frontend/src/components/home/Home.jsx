import React, { useEffect, useState } from 'react'
import './Home.css'
import pdfLogo from '../../assets/pdf.png'
import { API_BASE_URL, DOC_BASE_URL } from '../../common/constants';

const Home = () => {


    const [docs, setDocs] = useState([]);


    useEffect(() => {
        fetch(`${API_BASE_URL}/document/getDocuments`)
            .then(res => res.json())
            .then(data => setDocs(data.data))
    }, [])

    return (
        <>
            <div className='homeBox'>
                <p>
                    Welcome to our online platform dedicated to sharing educational notes! Whether you're a student looking for supplementary materials to enhance your learning or an educator aiming to share valuable resources with your students, you've come to the right place. Our website provides a seamless experience for downloading and uploading notes across various subjects and levels of education. From detailed lecture summaries to comprehensive study guides, our diverse collection caters to a wide range of learning needs. Join our community today to access a wealth of educational content and contribute to the collective knowledge pool. Start exploring, learning, and sharing with us!
                </p>

            </div>

            <div className="fileList">
                <h1>Notes</h1>
                <div className='allFiles'>
                    {docs.map((_, i) => (
                        <div className='fileBox' key={_.id}>
                            <img src={pdfLogo} alt="" />
                            <p title={"file.filename"} className='text-center my-2'>
                                {_.name}
                            </p>
                            <a target='_blank' href={`${DOC_BASE_URL}/${_.url}`}>Download</a>
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}

export default Home;