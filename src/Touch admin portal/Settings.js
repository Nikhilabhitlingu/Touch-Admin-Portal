import React from 'react'
import Home from './home'
import "../Touch admin portal/home.css"
import Header from './header'
import PageName from './pagename'

function Settings() {
  return (
    <>
    <div className='container'>
   <Home/>
   <Header/>
  
  </div>
  <PageName Name={"Settings"} />
  </>
  )
}

export default Settings