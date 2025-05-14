import { Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import allProductsData from './data/productListData/ProductListData';

import Layout from './layout/Layout'
import Footer from './layout/Footer'
import { Home } from './pages/home/Home'
import { Cart } from './pages/cart/Cart'
import { SignIn } from './pages/signIn/SignIn'

import ProductList from './components/productList/ProductList'
import ProductDetails from './components/productDetails/ProductDetails'

function App() {
  const [products, setProducts] = useState(allProductsData);

  return (
    <>
      <Layout />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart products={products} />} />
        <Route path='/signIn' element={<SignIn />} />
        <Route path='/category/:categoryName' element={<ProductList products={products} setProducts={setProducts} />} />
        <Route path='/product/:id' element={<ProductDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
