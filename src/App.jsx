import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Outlet, useParams, useNavigate, Navigate, NavLink } from 'react-router-dom'
import Applayout from './layout/AppLayout.jsx'
import Home from './page/Home.jsx'
import About from './page/About.jsx'
import Services from './page/Services.jsx'
import PageNotFound from './page/PageNotFound.jsx'
import { Login } from './page/Login.jsx';
import { Logout } from './page/Logout.jsx'
function App() {

  const [currentUser, setCurrentUser] = useState({token: null, username: null});

  const AuthEntities = ({currentUser}) => {
    return (
      <>
        {currentUser.username !== null && <h1>Authenticated Entities</h1> ? <div>
          <h1>Authenticated Entities</h1>
          <Outlet/>
        </div> : <h1>Not allowed entry</h1>}
      </>
    )
  }

  const AuthEntity = () => {
    const params = useParams();
    
    return (
      <>
        <h1>Authenticated Entity: {params.entityId}</h1>
      </>
    )
  }


  return (
    <BrowserRouter >
      <Routes>
      <Route element={<Applayout/>}>
      <Route index element={<Navigate to="login"/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/auth-entities" element={<AuthEntities currentUser={currentUser} />}>
              <Route index element={<h1>All entities</h1>}/>
              <Route path=":entityId" element={<AuthEntity/>} />
        </Route>
        <Route path="/login" element={<Login setCurrentUser={setCurrentUser} currentUser={currentUser}/>}/>
            <Route path="/logout" element={<Logout setCurrentUser={setCurrentUser}/>}/> 
            <Route path="*" element={<PageNotFound/>}/>
      </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App