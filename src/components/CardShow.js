import React, { useState } from 'react'

function CardShow() {
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    return (
        <>
            <h2>Add Image:</h2>
            <input type="file" onChange={handleChange} />
            <img src={file} />

        </>

    )
}

export default CardShow