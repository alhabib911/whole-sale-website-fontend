import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Authentication/Login';
import Register from './Authentication/Register';
import RequereAuth from './Authentication/RequereAuth/RequereAuth';
import BuyNow from './Home/BuyNow';
import Home from './Home/Home';
import NotFound from './Home/NotFound';
import Products from './Home/Products';
import Dashboard from './Pages/Dashboard';
import MyOrder from './Pages/MyOrder';
import MyReview from './Pages/MyReview';
import Users from './Pages/Users';



function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/buynow/:id' element={<RequereAuth>
          <BuyNow></BuyNow>
        </RequereAuth>}></Route>
        <Route path='/dashboard' element={<RequereAuth>
          <Dashboard></Dashboard>
        </RequereAuth>}>
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path='myreview' element={<MyReview></MyReview>}></Route>
          <Route path='allusers' element={<Users></Users>}></Route>
        </Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
