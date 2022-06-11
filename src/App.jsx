import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Cart from './pages/Cart';
import HomePage from './pages/HomePage';
import Profile from './pages/Profile';
import Product from './pages/Product';
import { ProductProvider } from './context/provider/ProductsContext';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
