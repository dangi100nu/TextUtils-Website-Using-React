// shortcut- rfc for function based components
import React from 'react'
import { useState } from 'react'

export default function About(props) {

    const [mystyle, setmystyle] = useState({
        color: "black",
        backgroundColor: "white"
    });

    const [btnText, setbtnText] = useState("Enable dark mode");

    const toggleMode = () => {
        if (mystyle.color === "black") {
            setmystyle({
                color: "white",
                backgroundColor: "black",
                border: "1px solid white",

            });

            setbtnText("Enable Light mode");
        }
        else {
            setmystyle({
                color: "black",
                backgroundColor: "white"
            });

            setbtnText("Enable dark mode");

        };
    }

    return (
        <>
            <div className='container' >
                <h2 className=' mb-3'>About Us</h2>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item" >
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={mystyle}>
                                Click here to see what is Text?
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={mystyle}>
                                <strong>Text refers</strong>  to a sequence of characters or written symbols that represent language and convey meaning. It can include letters, numbers, punctuation, and symbols, and can be used for communication in many forms, such as written documents, emails, messages, and more.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={mystyle}>
                                Click here to see what is Uppercase Text?
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={mystyle}>
                                <strong>Uppercase refers</strong>  to the form of letters that are larger and more distinct than their lowercase counterparts. In the English alphabet, uppercase letters are also known as "capital letters". The term "uppercase" comes from the traditional printing process, where uppercase letters were kept in the upper case of a two-case movable typeholder, while lowercase letters were kept in the lower case. In computer text processing, uppercase letters are typically used at the beginning of sentences, for emphasis, and for acronyms and initialisms.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={mystyle}>
                               Click here to see what is lowercase Text?
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={mystyle}>
                                <strong>Lowercase refers</strong>  to a style of writing letters in which the letters are smaller and usually without any capitalization. In English, the lowercase alphabet consists of 26 letters ranging from "a" to "z". Lowercase letters are commonly used in the body of written text, while uppercase letters are used for emphasis, titles, and headings. <br />
                                For example, the word "hello" is written in lowercase
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <button className="btn btn-primary mt-2 ms-2" onClick={toggleMode}>{btnText}</button>
            </div>
        </>
    )
}
