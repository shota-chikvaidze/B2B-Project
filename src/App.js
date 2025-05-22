import { Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import allProductsData from './data/productListData/ProductListData';

import Layout from './layout/Layout'
import Footer from './layout/Footer'
import SearchResultPage from './components/searchResultPage/SearchResultPage'
import { Home } from './pages/home/Home'
import { Cart } from './pages/cart/Cart'
import { SignIn } from './pages/signIn/SignIn'

import sliderData from './data/sliderData/SliderData';
import CreateProduct from './components/createProductPage/CreateProductPage'
import ProductList from './components/productList/ProductList'
import ProductDetails from './components/productDetails/ProductDetails'
import BestSellerPhoneDetails from './components/bestSellerPhoneDetails/BestSellerPhoneDetails'
import AddCategories from './components/addCategorie/AddCategories';

function App() {

  const [products, setProducts] = useState(
    sliderData.map(p => ({ ...p, inCart: false }))
  );


  return (
    <>
      <Layout />
      <Routes>
        <Route path='/' element={<Home products={products} setProducts={setProducts} />} />
        <Route path='/cart' element={<Cart products={products} />} />
        <Route path='/signIn' element={<SignIn />} />
        <Route path='/category/:categoryName' element={<ProductList products={products} setProducts={setProducts} />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/bestSellerPhones/:id' element={ <BestSellerPhoneDetails /> } />
        <Route path='/createProduct' element={<CreateProduct />} />
        <Route path="/search" element={<SearchResultPage products={products} setProducts={setProducts} />} />
        <Route path='/add-categorie' element={ <AddCategories /> } />
      </Routes>
    </>
  );
}

export default App;
