import React from 'react'

const About = () => {
    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-header">
                    <h2>About TextWorks</h2>
                </div>
                <div className="card-body">
                    <p className="card-text">
                        Welcome to TextWorks, your go-to text manipulation web app! Designed to streamline your text editing tasks, TextWorks offers a range of features to make managing text simple and efficient. Whether you're drafting a document, editing content, or just need a quick text tweak, TextWorks has you covered:
                    </p>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong>Convert to Uppercase:</strong> Instantly transform your text to uppercase, perfect for headings or emphasis.</li>
                        <li className="list-group-item"><strong>Convert to Lowercase:</strong> Easily change your text to lowercase, ideal for standardizing content.</li>
                        <li className="list-group-item"><strong>Clear Text:</strong> Quickly clear all text to start fresh without any hassle.</li>
                        <li className="list-group-item"><strong>Copy to Clipboard:</strong> Copy your text to the clipboard with a single click, making it easy to paste elsewhere.</li>
                        <li className="list-group-item"><strong>Word and Character Count:</strong> Get instant feedback on the number of words and characters in your text, helping you meet specific length requirements.</li>
                    </ul>
                    <p className="card-text mt-3">
                        Experience the ease and efficiency of text editing with TextWorks!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About