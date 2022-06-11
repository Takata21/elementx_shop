import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Cart from './pages/Cart';
import HomePage from './pages/HomePage';
import Profile from './pages/Profile';
import { ProductProvider } from './context/provider/ProductsContext';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <ProductProvider>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/cart" exact element={<Cart />} />
          <Route path="/profile" exact element={<Profile />} />
        </Routes>
      </ProductProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
