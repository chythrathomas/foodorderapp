

import Container from 'react-bootstrap/Container';
import './App.css';
import Footer from './components/home/Footer';
import Header from './components/home/Header';
import Home from './components/home/Home';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './components/screens/AboutUs';
import Login from './components/Modals/Login';
import RestaurantMenu from './components/screens/RestaurantMenu';
import { useSelector } from 'react-redux';
import HelpCenter from './components/Modals/HelpCenter';
import Cart from './components/Modals/Cart';
import CategoryMenu from './components/screens/CategoryMenu';
import Search from './components/screens/Search';
import ContactUs from './components/screens/ContactUs';




function App() {

  // const name= useSelector(state=>state.restaurant.restaurantSelected);
  // console.log(name);
  return (
    <div className='App'>
      <nav>
      <Header/>
      </nav>
      
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/home/contactus" element={<ContactUs/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/restaurantmenu" element={<RestaurantMenu/>}/>
        <Route path="/home/user" element={<Login/>}/>
<Route path="/home/helpcenter" element={<HelpCenter/>}/>
<Route path="/cart" element={<Cart/>}/>
<Route path="/home/categoryMenu" element={<CategoryMenu/>}/>
<Route path="/home/search" element={<Search/>}/>
      </Routes>
{/*   
     <Home/> */}
    <footer>
    <Footer/>
    </footer>
   
       </div>
  );
}

export default App;
