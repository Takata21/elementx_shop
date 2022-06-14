import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Cart from './pages/Cart/Cart';
import HomePage from './pages/HomePage';
import Profile from './pages/Profile';
import Product from './pages/Product';
import { ProductProvider } from './context/provider/ProductsContext';
import { AuthProvider } from './context/provider/AuthContext';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Copyright from './components/Copyright/Copyright';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <ProductProvider>
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/cart" exact element={<Cart />} />
            <Route path="/profile" exact element={<Profile />} />
            <Route path="/product/:id" exact element={<Product />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/register" exact element={<Register />} />
          </Routes>
        </ProductProvider>
        <Footer />
        <Copyright />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
