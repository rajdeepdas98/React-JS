// 1. starting with Hello World

import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";

// single elements
// ReactDOM.render(<h1>Hello World !!!</h1>,document.getElementById('root'));

// Multiple elements
// ReactDOM.render(<div><h1>Hello World !!!</h1><p>Good Morning</p></div>,document.getElementById('root'));

// or another method if react version is more than 16
// ReactDOM.render([<h1>Hello World !!!</h1>,<p>Good Morning</p>],document.getElementById('root'));

// or can use react fragment
// ReactDOM.render(<React.Fragment><h1>Hello World !!!</h1><p>Good Morning</p></React.Fragment>,document.getElementById('root'));

// or simply
// ReactDOM.render(<><h1>Hello World !!!</h1><p>Good Morning</p></>,document.getElementById('root'));

// expression
// const fname="rajdeep";
// const lname="das";
// ReactDOM.render(<><h1>Hello World !!!</h1><p>Good Morning {fname +" "+lname}</p></>,document.getElementById('root'));

// Template literals
// ReactDOM.render(<React.Fragment><h1>Hello World !!!</h1><p>{`my name is ${fname} ${lname}`}</p></React.Fragment>,document.getElementById('root'));

// ReactDOM.render(<React.Fragment><h1>Hello World !!!</h1><p>Good Morning</p></React.Fragment>,document.getElementById('root'));


// Challenge Solving---fetching date and time

// const myname="rajdeep";
// const currDate=new Date().toLocaleDateString();
// const currTime=new Date().toLocaleTimeString();
// ReactDOM.render(<><h1>{`Hello,My name is ${myname}`}</h1>
// <p>todays Date is {currDate}</p><p>todays time is {currTime}</p></>,document.getElementById("root"))

// html attributes...and images

// ReactDOM.render(<><h1 contentEditable="true">My name is rajdeep</h1>
// <img src="https://www.asicentral.com/media/20479/scottcolumnfig4-800.jpg" 
// alt="random image"/></>,
// document.getElementById("root"))



// Day 2


// External CSS in React

// ReactDOM.render(<><h1 className="heading">Hi my name is rajdeep</h1>
// <div className="Image">
// <img src="https://www.asicentral.com/media/20479/scottcolumnfig4-800.jpg"/></div></>,document.getElementById("root"))

// inline CSS 

// const heading={
//   color:" #fa9191",
//   textTransform: "uppercase",
//   fontWeight: "bold",
//   textAlign: "center"
// };
// const Image={
//     display:"flex",
//     justifyContent: "center",
//     width: "250px",
//     height: "300px"
  
// };
// ReactDOM.render(<><h1 style={heading}>Hi my name is rajdeep</h1>
// <div style={Image}>
// <img src="https://www.asicentral.com/media/20479/scottcolumnfig4-800.jpg"/>
// </div></>,
// document.getElementById("root"))



 
// ---------------------------- PROJECT--------------------------------------
// -------------------------GREETING WEBSITE---------------------------------

// let curDate=new Date();
// curDate=curDate.getHours();
// let greeting="";
// const cssStyle={};

// if(curDate>=1 && curDate<12){
//   greeting="Good Morning";
//   cssStyle.color="green";
// }else if(curDate>=12 && curDate<19){
//   greeting="Good Afternoon";
//   cssStyle.color="Orange";
// }
// else{
//   greeting="Good Night";
//   cssStyle.color="Black";
// }
// ReactDOM.render(<><div><h1>Hello Sir,<span style={cssStyle}>{greeting}</span></h1></div></>,
// document.getElementById("root")); 


// -------------------------END-------------------------------

import App from "./App.jsx";

ReactDOM.render(<App/>,
document.getElementById("root"))