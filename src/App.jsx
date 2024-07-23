import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import Alert from './components/Alert'
import { useState } from 'react'
import About from './components/About'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";


function App() {

    const [alert, setalert] = useState(null)
    const showalert = (message, type) => {
        setalert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setalert(null)
        }, 2000)
    }
    return (
        <>
            <BrowserRouter>
            <Navbar title="TextWorks" />
            <Alert alert={alert} />
            <Routes>
                <Route path="/" element={<TextForm showalert={showalert} heading="Enter the text to analyze/format below" />} />
                <Route path="about/*" element={<About />} />
            </Routes>
            </BrowserRouter>
        </>
    )
}

export default App