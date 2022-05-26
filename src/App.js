import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Authentication/Login';
import Register from './Authentication/Register';
import RequireAdmin from './Authentication/RequereAuth/RequereAdmin';
import RequereAuth from './Authentication/RequereAuth/RequereAuth';
import RequireCustomer from './Authentication/RequereAuth/RequereCustomer';
import Blog from './Home/Blog';
import BuyNow from './Home/BuyNow';
import ContactUs from './Home/ContactUs';
import Home from './Home/Home';
import MyPortfolio from './Home/MyPortfolio';
import NotFound from './Home/NotFound';
import Products from './Home/Products';
import AddProduct from './Pages/AddProduct';
import AllReviews from './Pages/AllReviews';
import Dashboard from './Pages/Dashboard';
import ManageAllOrders from './Pages/ManageAllOrders';
import ManageProducts from './Pages/ManageProducts';
import MyOrder from './Pages/MyOrder';
import MyProfile from './Pages/MyProfile';
import MyProfileEdit from './Pages/MyProfileEdit';
import MyReview from './Pages/MyReview';
import Payment from './Pages/Payment';
import Users from './Pages/Users';



function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/contact us' element={<ContactUs></ContactUs>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/portfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='/allreviews' element={<AllReviews></AllReviews>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/buynow/:id' element={<RequereAuth>
          <BuyNow></BuyNow>
        </RequereAuth>}></Route>
        <Route path='/dashboard' element={<RequereAuth>
          <Dashboard></Dashboard>
        </RequereAuth>}>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='profile/edit' element={<MyProfileEdit></MyProfileEdit>}></Route>
          <Route path='myorder' element={<MyOrder></MyOrder>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='myreview' element={<RequireCustomer><MyReview></MyReview></RequireCustomer>}></Route>
          <Route path='allusers' element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path='manageallorders' element={<RequireAdmin><ManageAllOrders></ManageAllOrders></RequireAdmin>}></Route>
          <Route path='addproduct' element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
          <Route path='manageproducts' element={<RequireAdmin><ManageProducts></ManageProducts></RequireAdmin>}></Route>
        </Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
