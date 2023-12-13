
import React, { useState } from 'react'
import "../Touch admin portal/home.css"
import { useNavigate } from 'react-router-dom'


function Home() {

const [visible,setvisible]=useState(false)
const navigate=useNavigate()

const handledashboard=()=>{
  navigate("/Dashboard")
  
}

const handleusers=()=>{
  navigate("/Users")
}

const handlereports=()=>{
  navigate("/Reports")
}

const handleleaderboard=()=>{
  navigate("/LeaderBoard")
}

const handlesettings=()=>{
  navigate("/Settings")
}

const handlearrow=()=>{
  setvisible(!visible)
   
}

const handlepointsrule=()=>{
  navigate("/pointsrule")
 
}



  return (
    <>
    <div className='container'>
    <nav className='navbar'>
        <img src='https://test-touch-web-portal.web.app/static/media/logo.25f42f26eee49ea579ca.png' alt='touch' width={250} height={100} className='image1'/>
        <img src="https://file.touchapp.in/profile_pic/photo1692770294726_1692770295198.jpg" alt='profile' width={80} height={60} className='image2'/>
        <h3 className='admin'>A D M I N</h3>

<div>
<i class="fa fa-home" aria-hidden="true" id='home'></i><h3 className='dashboard'onClick={handledashboard}>Dashboard</h3><br/>
<i class="fa fa-users" aria-hidden="true" id="user"></i><h3 className='users' onClick={handleusers}>Users</h3><br/>
<i class="fa fa-exclamation-circle" aria-hidden="true" id='report'></i> <h3 className='reports' onClick={handlereports}>Reports</h3><br/>
<i class="fa fa-bar-chart" aria-hidden="true" id='chart'></i><h3 className='leaderboard' onClick={handleleaderboard} >Leaderboard  <i class="fa fa-angle-right" aria-hidden="true" id='arrow' onClick={handlearrow}></i></h3><br/>
{visible?<ul>
   <li className='leaderbord' onClick={handleleaderboard}>LeaderBoard</li>
    <li className='pointsrule' onClick={handlepointsrule}>Points rule</li>
</ul>:null
}
<i class="fa fa-cog" aria-hidden="true" id='setting'></i><h3 className='settings' onClick={handlesettings}>Settings</h3>      
        </div>
    </nav>
    
    </div>
    <div>

    </div>
    </>
  )
}

export default Home