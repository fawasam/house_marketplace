import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Explore from './pages/Explore'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Offer from './pages/Offer'
import ForgotPassword from './pages/ForgotPassword'
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import Category from './pages/Category';
import CreateListing from './pages/CreateListing';
import Listring from './pages/Listring';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Explore/>}/>
        <Route path='/offers' element={<Offer/>}/>
        <Route path='/create-listings' element={<CreateListing/>}/>
        <Route path='/category/:categoryName' element={<Category/>}/>
        <Route path='/category/:categoryName/:listingId' element={<Listring/>}/>
        <Route path='/profile' element={<PrivateRoute/>}>
           <Route path='/profile' element={<Profile/>}/>
        </Route>
        <Route path='/sign-in' element={<SignIn/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/contact/:landlordId' element={<Contact/>}/>
        <Route path='/forgot-password' element={<ForgotPassword/>}/>
      </Routes>
        <Navbar/>
      <ToastContainer autoClose={3000}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
