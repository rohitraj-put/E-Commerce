import React from 'react'
import './loading.css'

function Loading() {
    return (
        <>
            <div id="wrapper">
                <div id="corpus"></div>
                <div id="spinner"></div>
            </div>
            <div id="text">Loading ...</div>
        </>
    )
}

export default Loading