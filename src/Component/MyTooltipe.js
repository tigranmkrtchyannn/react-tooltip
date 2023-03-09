import React from "react"
import {useState} from "react"
import "./MyTooltipe.css"

 function MyTootlipe(props){

    const {
        position,
        backgroundColor="black",
        color="white",
        text,
        children       
    }=props
    const [showTooltip, setShowTooltip] = useState(false);

    const activTooltip = () => {
      setShowTooltip(true);
    };
const hideTooltip=()=>{
    setShowTooltip(false)
}
var bodyStyles = document.body.style;
  bodyStyles.setProperty("--background-color", backgroundColor);

    return (
        <div className="container">
   <div className= { `tooltip-text ${position}`} style={{ display: showTooltip ? "block" : "none",
  backgroundColor:`${backgroundColor}`,
  color:`${color}`,
  

}}>
        {text}
      </div>
      <div  onMouseEnter={activTooltip} onMouseLeave={hideTooltip}>{children}</div>
    </div>


        
        )
 }
 export default MyTootlipe;