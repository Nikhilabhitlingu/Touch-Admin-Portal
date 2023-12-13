import React from 'react'
import "../Touch admin portal/header.css"

function Header() {


  return (
    <div className='top'>
    <header>
       <i class="fa fa-bars" aria-hidden="true" id='icon'></i>
       <i class="fa fa-sign-out" aria-hidden="true" id='logout'></i>

    </header>
    </div>
  )
}

export default Header