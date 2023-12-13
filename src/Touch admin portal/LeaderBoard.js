import React from 'react'
import Home from './home'
import "../Touch admin portal/home.css"
import Header from './header'
import PageName from './pagename'


function LeaderBoard() {
  return (
    <>
    <div className='container'>
  <Home/>
  <Header/>
</div>
<PageName Name={"LeaderBoard"}/>




</>
  )
}

export default LeaderBoard