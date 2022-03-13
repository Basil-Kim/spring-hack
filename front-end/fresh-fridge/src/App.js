import './App.css';
import React, { useState } from 'react';
import {Routes, BrowserRouter, Route} from 'react-router-dom'
import AddListItem from './components/AddListItem';
import Login from './components/login'
import Register from './components/register'

function App() {

  const [errormsg, setErrormsg] = useState({});
  const [user,setLoginUser] = useState({});
  const renderErrormsg = (name) =>
  name === errormsg.name && (
    <div className='error'>{errormsg.message}</div>
  )

  return (
    <div className="App">
            <BrowserRouter>
        <Routes>
          <Route path='/'>
            {
              user && user._id ? <Home/> : <Login/>
            }<Home/>
          </Route>
          <Route path='/Login'>
            <Login setLoginUser={setLoginUser}/>
          </Route>
          <Route path='/Register'>
            <Register/>
          </Route>
        </Routes>
      </BrowserRouter>
    <Addition/>  
    </div>
  );
}

function Addition() {
  return (
    <header className="App-header">
        <AddListItem/>
      </header>
  );
}

export default App;
