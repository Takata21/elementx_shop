import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Cart from './pages/Cart/Cart';
import HomePage from './pages/HomePage';
import Product from './pages/Product/Product';
import { ProductProvider } from './context/provider/ProductsContext';
import { AuthProvider } from './context/provider/AuthContext';
import { CartProvider } from './context/provider/CartContext';
import { OrderProvider } from './context/provider/OrderContext';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Copyright from './components/Copyright/Copyright';
import { Toaster } from 'react-hot-toast';
import Profile from './pages/profile/Profile';
import AdminPage from './pages/AdminPage/AdminPage';
import Orders from './pages/Orders/Orders';
import Budget from './pages/Budget/Budget';
import Bills from './pages/Bills/Bills';
import ProfileEdit from './pages/ProfileEdit/ProfileEdit';
import ConfirmationOrder from './pages/ConfirmationOrder/ConfirmationOrder';
import ContactPage from './pages/ContactPage/ContactPage';
import EmailVerificationRequired from './pages/EmailVerificationRequired/EmailVerificationRequired';
import Order from './pages/Order/Order';
import VerifyUser from './pages/VerifyUser/VerifyUser';

import HeaderV2 from './components/header/HeaderV2';
import Address from './components/Address/Address';
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <Header />
          {/* <HeaderV2 /> */}
          <ProductProvider>
            <OrderProvider>
              <Routes>
                <Route path="/" exact element={<HomePage />} />
                <Route path="/cart" exact element={<Cart />} />
                <Route path="/profile" exact element={<Profile />} />
                <Route path="/profile/address" exact element={<Address />} />
                <Route
                  path="/profile/confirm-order/:id"
                  exact
                  element={<ConfirmationOrder />}
                />
                <Route path="/profile/orders" exact element={<Orders />} />
                <Route path="/profile/orders/:id" exact element={<Order />} />
                <Route path="/profile/bills" exact element={<Bills />} />
                <Route path="/profile/budget" exact element={<Budget />} />
                <Route path="/profile/edit" exact element={<ProfileEdit />} />
                <Route path="/product/:id" exact element={<Product />} />
                <Route path="/login" exact element={<Login />} />
                <Route path="/register" exact element={<Register />} />
                <Route path="/auth/verify" exact element={<VerifyUser />} />

                <Route
                  path="/register/email_verification_required/verify/:id"
                  exact
                  element={<EmailVerificationRequired />}
                />
                <Route path="/contact" exact element={<ContactPage />} />

                <Route
                  path="/ZCI6IjYyYWZjNjg3NjU5YTZk/admin"
                  exact
                  element={<AdminPage />}
                />
                <Route
                  path="/confirm-order/:id"
                  exact
                  element={<ConfirmationOrder />}
                />
              </Routes>
            </OrderProvider>
          </ProductProvider>
          <Footer />
          <Copyright />
        </CartProvider>
      </AuthProvider>
      <Toaster />
    </BrowserRouter>
  );
}

// breadcrum
export default App;
