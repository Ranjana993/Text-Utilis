import React, { useState } from 'react'

const About = ({ mode, showAlert }) => {
    const [text, setText] = useState("")


    const toUpper = () => {
        const toUpperText = text.toUpperCase()
        setText(toUpperText)
        showAlert("text converted to upper case", "success")
    }
    const removeSpace = () => {
        const replaced = text.replaceAll(' ', '');
        setText(replaced)
        showAlert("successfully removed space ", "success")
    }
    const toLowerCase = () => {
        const toUpperText = text.toLowerCase()
        setText(toUpperText)
        showAlert("text Convertd to lower Case", "success")
    }
    const deleteBtn = () => {
        setText("")
        showAlert("Text deletd successfully", "success")
    }
    const copyText = async () => {
        var copyText = document.getElementById("myBox");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        document.getSelection().removeAllRanges()
        showAlert("Text copied to clipboard", "success")
    }



    return (
        <div>
            <div className='container my-5' style={{ backgroundColor: mode === "dark" ? " #00475b" : "white" }}    >
                <h1 style={{ color: mode === "dark" ? " white" : "#00475b" }} >TextUtilis - Word and Charater counter and also remove space etc...</h1>
                <textarea className={`form-control border border-${mode === "light" ? "#140f14" : "#00475b"} my-4`} style={{ backgroundColor: mode === "dark" ? " #00475b" : "white", color: mode === "dark" ? " white" : "#00475b" }} id='myBox' rows="8" value={text} onChange={(e) => setText(e.target.value)} onClick={(e) => setText(e.target.value)} />
                <button type="button" disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={toUpper}>Convert to upperCase</button>
                <button type="button" disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={removeSpace}>removeWhite space</button>
                <button type="button" disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={deleteBtn}>Delete</button>
                <button type="button" disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={toLowerCase}>Convert to lowerCase</button>
                <button type="button" disabled={text.length === 0} className="btn btn-primary mx-4 my-1" onClick={copyText}>copy Text to clipBoard </button>
            </div>
            <div className='container' style={{ color: mode === "dark" ? " white" : "#00475b" }} >
                <h2>Your Text Summery...</h2>
                <p>{text.split(" ").filter((element) => element.length !== 0).length} words and {text.length} characters</p>
                <h4>Preview </h4>
                <p>{text.length > 0 ? text : "Nothing to preview "} </p>
            </div>
        </div>

    )
}

export default About