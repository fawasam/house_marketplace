import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Explore from './pages/Explore'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Offer from './pages/Offer'
import ForgotPassword from './pages/ForgotPassword'
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Explore/>}/>
        <Route path='/offers' element={<Offer/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/sign-in' element={<SignIn/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/forgot-password' element={<ForgotPassword/>}/>
      </Routes>
        <Navbar/>
      </BrowserRouter>
    </div>
  );
}

export default App;