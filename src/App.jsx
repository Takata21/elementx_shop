import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
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
import ConfirmationOrder from './components/ConfirmationOrder/ConfirmationOrder';
import ContactPage from './pages/ContactPage/ContactPage';
import EmailVerificationRequired from './pages/EmailVerificationRequired/EmailVerificationRequired';
import OrderPage from './pages/OrderPage/orderPage';
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <Header />
          <ProductProvider>
            <OrderProvider>
              <Routes>
                <Route path="/" exact element={<HomePage />} />
                <Route path="/cart" exact element={<Cart />} />
                <Route path="/profile" exact element={<Profile />} />
                <Route path="/profile/orders" exact element={<Orders />} />
                <Route
                  path="/profile/orders/:id"
                  exact
                  element={<OrderPage />}
                />
                <Route path="/profile/bills" exact element={<Bills />} />
                <Route path="/profile/budget" exact element={<Budget />} />
                <Route path="/profile/edit" exact element={<ProfileEdit />} />
                <Route path="/product/:id" exact element={<Product />} />
                <Route path="/login" exact element={<Login />} />
                <Route path="/register" exact element={<Register />} />
                <Route
                  path="/register/email_verification_required"
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
