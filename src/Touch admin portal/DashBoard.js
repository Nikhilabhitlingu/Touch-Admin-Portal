import React, { useCallback, useEffect, useState } from "react";
import Home from "./home";
import Header from "./header";
import "../Touch admin portal/dashboard.css";
import PageName from "./pagename";
import { useSelector, useDispatch } from "react-redux";
import { adminDashboradAction } from "../dashboard/action";
import  image from  "../dashboard/blob image react project.png";
// import dataReducer from "../redux/reducer";

function DashBoard() {
  const [input, setinput] = useState("all");
 const[todate,settodate]=useState("0000-00-00")
 const[fromdate,setfromdate]=useState("0000-00-00")
  const [visible, setvisible] = useState(false);
  const adminData = useSelector((state) => state.data.data);
  const dispatch = useDispatch();
  console.log(adminData);

  const handlecustom = () => {
    setvisible(!visible);
  };
  const handleweek = () => {
    setinput("week");
    setvisible(false)
  };
  const handlehrs = () => {
    setinput("24hrs");
    setvisible(false)
  };
  const handleall = () => {
    setinput("all");
    setvisible(false)
  };
 
  
  const handlebutton = (todate,fromdate) => {
    if(fromdate=== "2022-08-01"||
    todate==="2022-08-18"){
    setinput("custom");
  }
  else if(fromdate!=="" && todate!==""){
    setinput("24hrs")
  }
  

}

const handlefromdate =(e)=>{
  setfromdate(e.target.value)
}
const handletodate =(e)=>{
  settodate(e.target.value)
}


  const handleDispatch = useCallback(() => {
    dispatch(adminDashboradAction(input, todate, fromdate));
 }, [input, todate, fromdate, dispatch]);

 useEffect(() => {
    handleDispatch();
 }, [handleDispatch]);


  
  return (
    <>
      <div className="container">
        <Home />
        <Header />
      </div>
      <PageName Name={"DashBoard"} />
     
      <div className="buttons">
       <button className="all" onClick={handleall}>All</button>
       <button className="custom" onClick={handlecustom}>custom</button>
       <button className="week" onClick={handleweek}>week</button>
       <button className="hrs" onClick={handlehrs}>24hrs</button>
       {visible ? (
        <div className="inputs">
          <label className="label">From:</label>
          <input className="input1"
            type="number"
            placeholder="YYYY-MM-DD"
            value={fromdate} onChange={handlefromdate}
          ></input>
          <label className="label">To:</label>
          <input className="input2"
            type="number"
            placeholder="YYYY-MM-DD"
            value={todate}
            onChange={handletodate}
          ></input>
          <button className="check" onClick={handlebutton}>
            Check
          </button>
        </div>
      ) : null}
      </div>
    
      <div className="apidata">
        {Object.keys(adminData).map((key) => (
          <div id="container">
            <h6 key={key}>
              {adminData[key]}
              <i class="fa fa-tag" aria-hidden="true" id="tag"></i>
              <br />
              {key}
            </h6>
            <img
              src={image}
              className="image"
              alt="graph"
              width={150}
              height={100}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default React.memo(DashBoard);








