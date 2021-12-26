import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart';
import Category from './pages/Category';
import Checkout from './pages/Checkout';
import Home from './pages/Home';
import Login from './pages/Login';
import ProductDetail from './pages/ProductDetail';

function App() {
    if (!localStorage.getItem('cart')) {
        localStorage.setItem('cart', JSON.stringify([]));
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/category' element={<Category />} />
                <Route path='/auth' element={<Login />} />
                <Route
                    path='/productDetail/:productId'
                    element={<ProductDetail />}
                />
                <Route path='/cart' element={<Cart />} />
                <Route path='/checkout' element={<Checkout />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
