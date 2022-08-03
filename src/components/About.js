import React from 'react'

export const About = ({ mode }) => {
    return (
        <div className='container my-5' style={{ color: mode === "dark" ? "white" : "black" }}>
            <h1>About Text-Utilis:🚀 </h1>
            <p>TextUtils is a word counter and a character counting utility which can be used to manipulate your text in the way you want.</p>
            <img src="../../Text-Utilis-about.png" className='my-4 mb-5' alt="Text-Utilis" />
            <h2 className='my-4'>Feature of Using Text-Utilis :</h2>
            <h5 className='mb-4'>By using text Utilis you can perform following operaion on the text ..</h5>
            <ul>
                <li>You can convert the text into upperCase ✌.</li>
                <li>You can also convert the text into lowercase as well ✌.</li>
                <li>If we want to remove whiteSpace in between the text we can also remove that as well .</li>
                <li> We can also copy  the text into our clipBoard .</li>
            </ul>
        </div>
    )
}
