import './App.css'
import Header from "./components/Headers/Header"
import {Route as BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./components/Headers/Home"
import Create from "./components/Headers/Create"
import Post from "./components/Headers/Post"
import Profile from "./components/Headers/Profile"

function App() {

  return (
    <>
      <Header />
      <br></br>
        <div> 
          <Routes>
            <Route path='/' index element={<div>Index</div>} />
            <Route path='/home' index element={<Home />} />
            <Route path='/create' index element={<Create />} />
            <Route path='/post' index element={<Post />} />
            <Route path='/profile' index element={<Profile />} />
          </Routes>
          <br></br>
        </div>
      <br></br>
    </>
  )
}

export default App

