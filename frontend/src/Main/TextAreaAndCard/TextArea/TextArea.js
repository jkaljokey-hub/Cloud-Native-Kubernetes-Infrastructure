import React from "react";
import "../TextaeaCard.css"
import data from "./DataTextara.json";
const TextArea = () => {
  return (
    <div className="TextAreaRoot">
      <div>
        <p className="Textarea-head">
          What Customers Are Saying: Over 45,000 <img src="https://i.imgur.com/AXwoZOF.png" alt="as" className="imgstar"/><img src="https://i.imgur.com/AXwoZOF.png" alt="as"className="imgstar"/><img src="https://i.imgur.com/AXwoZOF.png" alt="as" className="imgstar"/><img src="https://i.imgur.com/AXwoZOF.png" alt="as" className="imgstar"/><img src="https://i.imgur.com/AXwoZOF.png"className="imgstar"alt="as" /> (5-star) Reviews on
          Trustpilot
        </p>
      </div>
      <div className="Text-area" >
      {data.map((e) => (
        
        
        <div key={e.id} className="Text-area-child">
          
          <p>{e.text}</p>
          <p>{e.user}</p>
          </div>
       
         
      ))}
    </div> </div>
  );
};

export default TextArea;
