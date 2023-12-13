import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './home'
import Users from './Users'
import Reports from './Reports'
import LeaderBoard from './LeaderBoard'
import Settings from './Settings'
import DashBoard from './DashBoard'
import PointsRule from './points rule'
import Login from './login'

function Navigation() {
  return (
<BrowserRouter>
<Routes>
  <Route path='/' element={<Login/>}></Route>
<Route  path="/home" element={<Home/>}/>
<Route path="/Dashboard" element={<DashBoard/>}/>
<Route path='/Users' element={<Users/>}/>
<Route path='/Reports' element={<Reports/>}/>
<Route path='/LeaderBoard' element={<LeaderBoard/>}/>
<Route path='/Settings' element={<Settings/>}/>
<Route path='/pointsrule' element={<PointsRule/>}/>
</Routes>
</BrowserRouter>
  )
}

export default Navigation