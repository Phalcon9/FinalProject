
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Navbar from './Navbar/Navbar';
import Home from './Home';
import Signup from './Forms/Signup';
import Login from './Forms/Login';
import { CartProvider } from './context/CartContext';
import CheckOut from './checkOut';


function App() {
  return (
    //wrapping the entire app in cartProvider in other to access the state from multiple components
    <CartProvider>
      <Router>
        <div className="App">
          {/* <Navbar /> */}
          <div className='content'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/Login' element={<Login />} />
              <Route path='/checkout' element={<CheckOut/>}/>
            </Routes>
          </div>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
