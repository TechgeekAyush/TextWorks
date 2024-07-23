import React, { useState } from 'react'

const TextForm = (props) => {
    const [text, setText] = useState("")

    const handleUpClick = () => {
        if (text.length !== 0) {
            let n = text.toUpperCase();
            setText(n)
            props.showalert("Converted to uppercase", "success");
        }
    }

    const handleOnChange = (e) => {
        setText(e.target.value)
    }

    const handleDownClick = () => {
        if (text.length !== 0) {
            let n = text.toLowerCase();
            setText(n)
            props.showalert("Converted to lowercase", "success");
        }
    }

    const handleClearClick = () => {
        if (text.length !== 0) {
            setText("")
            props.showalert("Cleared text", "success")
        }
    }

    const handleCopy = () => {
        if (text.length !== 0) {
            navigator.clipboard.writeText(text)
            props.showalert("Copied to clipboard", "success")
        }
    }

    return (
        <>
            <div className="container my-3">
                <p className="h1">{props.heading}</p>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-3 mb-2">
                            <button className="btn btn-success w-100" onClick={handleUpClick}>Convert to Uppercase</button>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 mb-2">
                            <button className="btn btn-success w-100" onClick={handleDownClick}>Convert to Lowercase</button>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 mb-2">
                            <button className="btn btn-success w-100" onClick={handleClearClick}>Clear Text</button>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 mb-2">
                            <button className="btn btn-success w-100" onClick={handleCopy}>Copy Text to Clipboard</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-3">
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter(Boolean).length} words and {text.length} characters</p>
                {/* filters the array to remove any elements that are "falsy". In JavaScript, the Boolean function converts a value to true or false, and falsy values (such as "", 0, null, undefined, and false) are converted to false. */}
            </div>
        </>
    )
}
export default TextForm