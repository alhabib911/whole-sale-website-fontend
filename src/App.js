import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Authentication/Login';
import Register from './Authentication/Register';
import BuyNow from './Home/BuyNow';
import Home from './Home/Home';
import NotFound from './Home/NotFound';
import Products from './Home/Products';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/buynow/:id' element={<BuyNow></BuyNow>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
