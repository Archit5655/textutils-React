import { event } from 'jquery';
import React, {useState} from 'react'



export default function Textform(props) {
    const handleupclick=()=>{
        // console.log("uppercase was clicked" + text);
        let newText=text.toUpperCase();
        
        

        setText(newText);
        props.showAlert(" converted to uppercase","success")


    } 
     const handlelowclick=()=>{
        // console.log("uppercase was clicked" + text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert(" converted to lowercase","success")


    }  
       const handleclearclick=()=>{
        // console.log("uppercase was clicked" + text);
        let newText=' ' 
        setText(newText);
        props.showAlert("text cleared","success")


    } 
    const handleupchange=(event)=>{
        // console.log("on change");
        setText(event.target.value);

    }
    const [text,setText] = useState('');
    const handlecopy=()=>{
      // console.logO("i am a copy")
      var text = document.getElementById("mybox")
      text.select();
      navigator.clipboard.writeText(text.value);
      
    }


  return (
    <>
    <div className="container">
        <h1>{props.heading} </h1>
  
<div className="mb-3">
  {/* <label for="mybox" className="form-label">Example textarea</label> */}
  <textarea className  ="form-control" value={text} onChange={handleupchange} id="mybox" rows="8"></textarea>
</div>
<button className="btn-primary mx-2"  onClick={handleupclick}>convert to uppercase</button>
<button className="btn-primary mx-2"  onClick={handlelowclick}>convert to lowercase</button>
<button className="btn-primary mx-2"  onClick={handleclearclick}>clear text</button>
<button className="btn-primary mx-2"  onClick={handlecopy}>copy text</button>
    </div>
    <div className="container my-3">
      <h1>text summary</h1>
      <p>
        {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters
      </p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes required to read</p>


    </div>
    </>
  )
}
