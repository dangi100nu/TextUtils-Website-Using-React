// shortform rfc for react function based component
// remove caveats jab bootstrap textarea add kara

import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, settext] = useState("Enter text here")
    const [IsToggled, setIsToggled] = useState(false)
    // text = "dsfldfjasd"  // wrong way to change the state value
    // settext("dflsdfsdfsdfs")  //right way to change the state value

    const handleclick = () => {
        let newtext = text.toUpperCase();
        settext(newtext)
        props.showAlert("successfully converted into Uppercase","success")
        document.title= "TextUtils-UpperCase"
        
    }
    const handleclick2 = () => {
        let newtext = text.toLowerCase();
        settext(newtext)
    }
    const handleclick3 = () => {
        let newtext = " ";   //empty string for clear
        settext(newtext)
    }
    const handleclick4 = () => {
        if (IsToggled) {
            settext(text.toLowerCase())
        } else {
            settext(text.toUpperCase())
        }

        setIsToggled(!IsToggled)
    }

    const handleclick5 = () => {
        const text = document.getElementById("mybox")
        text.select();
        navigator.clipboard.writeText(text.value)
    }
    const handleclick6 = () => {
        let newtext = text.split(/[ ]+/)
        console.log(newtext)
        settext(newtext.join(" "));
    }

    // iska use text element for example textarea input etc me hota hai 
    const handleonchange = (event) => {
        console.log("onchange")
        settext(event.target.value)
    }

    
    return (
        < >
            <div className='container' >
                <div className="form-floating mb-3 ">
                    <div className="mb-3">
                        <label htmlFor="mybox" className="form-label"
                            style={{ color: props.mode === "warning" ? "#080b1c" : "white" }}> <h1>{props.heading}</h1></label>
                        <textarea className="form-control " id="mybox" rows="10" value={text} onChange={handleonchange}
                            style={{ background: props.mode === "warning" ? "white" : "#080b1c", color: props.mode === "warning" ? "#080b1c" : "white" }}></textarea>
                    </div>
                </div>
                <div className="d-flex flex-wrap justify-content-center ">
                    <button className="btn btn-primary m-1" onClick={handleclick}>Convert to UpperCase</button>
                    <button className="btn btn-primary m-1" onClick={handleclick2}>Convert to LowerCase</button>
                    <button className="btn btn-primary m-1" onClick={handleclick3}>Clear Text</button>
                    <button className="btn btn-primary m-1" onClick={handleclick4}>Toggle button</button>
                    <button className="btn btn-primary m-1" onClick={handleclick5}>Copy Text</button>
                    <button className="btn btn-primary m-1" onClick={handleclick6}>Remove extra spaces</button>
                </div>
            </div>
            <div className="container my-3"
                style={{ color: props.mode === "warning" ? "#080b1c" : "white" }}>
                <h2>Your Text Summary</h2>
                <p className='fs-4 mb-0'>{text.split(" ").length} Words and {text.length} Characters</p>
                {/* text ko array me convert kiya phir array ki length se text pta kiya */}
                <p className='fs-4 mb-0'>
                    {0.008 * text.split(" ").length} minutes read.
                </p>

                <p>
                    According to google data 125 words read 1 minute. so 1 word read 1/125 minutes. <br />
                    ( 1/125*no.of word type in the text box= 1 word read minuates. )
                </p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
