
import { Route, Routes } from 'react-router';
import './App.css';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Player from './pages/player/player';

const App = () => {
  return (
    <div>
         <Routes>
           <Route path='/' element={<Home />}/>
           <Route path='/login' element={<Login />}/>
           <Route path='/player/:id' element={<Player/>}/>
         </Routes>
    </div>
  )
}

export default App
