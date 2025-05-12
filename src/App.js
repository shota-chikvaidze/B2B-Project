import { Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import { Home } from './pages/home/Home'
import { Cart } from './pages/cart/Cart'
import { SignIn } from './pages/signIn/SignIn'

import ProductList from './components/productList/ProductList'
import ProductDetails from './components/productDetails/ProductDetails'

function App() {
  return (
    <>
      <Layout />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/cart' element={ <Cart /> } />
        <Route path='/signIn' element={ <SignIn /> } />
        <Route path='/category/:categoryName' element={ <ProductList /> } />
        <Route path='/product/:id' element={ <ProductDetails /> } />
      </Routes>

    </>
  );
}

export default App;
