import React, { useState } from 'react'
import '../App.css';


export default function Textbar(props) {
    const handleOnchange = (event) => {
        // console.log(" on Change");
        setText(event.target.value);
    }
    // For Upper Case
    const handleUpCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted into Upper Case", "success");
    }

    const handleLwCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted in Lower Case", "success");
    }

    const handleclText = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text Area is Cleared", "success");
    }

    const handlecopy = () => {
        let text = document.getElementById("Box");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Your Text is Copied on Clipboard", "success");
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed Extra Space", "success");
    }
    const [text, setText] = useState('');

    return (
        <>
            <div className='container'>
                <h1 className='d-flex header'  ><u>{props.heading}</u></h1>
                <p className='d-flex' style={{ justifyContent: "end" }}>{text.split(" ").length} Words & {text.length} Characters</p>
                <div >
                    <textarea className="form-control" value={text} onChange={handleOnchange} id="Box" rows="8"></textarea>
                </div>
                <button type="button" className="btn btn-primary mx-2" onClick={handleUpCase} >Convert UpperCase</button>
                <button type="button" className="btn btn-primary mx-2 my-2" onClick={handleLwCase} >Convert LowerCase</button>
                <button type="button" className="btn btn-primary mx-2 my-2" onClick={handleclText} >Clear Text</button>
                <button type="button" className="btn btn-primary mx-2 my-2" onClick={handlecopy} >Copy Text</button>
                <button type="button" className="btn btn-primary mx-2 my-2" onClick={handleExtraSpace} >Remove Extra Space</button>
            </div>

            <div className="container my-3">
                <h2 className='header'>Your Text Summary </h2>
                <p className='header'>{0.008 * text.split(" ").length} Minutes Read</p>
                <hr />
                <h3 className='header'>Preview</h3>
                <p className='header'>{text.length > 0 ? text : "Enter Something in Textbox "}</p>


            </div>
        </>
    );
}
