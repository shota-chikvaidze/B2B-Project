import { useLocation, Link } from 'react-router-dom';
import allProductsData from '../../data/productListData/ProductListData';
import { IoAddOutline } from "react-icons/io5"; 

import './searchResultPage.css';

const SearchResultPage = ({ products, setProducts }) => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const searchTerm = query.get('query')?.toLowerCase() || '';

  if(searchTerm === '') {
    return (
      <section className='search_result_page'>
        <div className='no_product_found'>
          <h2>Search results for: <span>{searchTerm}</span>  </h2>
          <p>No products found.</p>
        </div>
      </section>
    );
  }

  const allProducts = Object.values(allProductsData).flat();

  const filtered = allProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm)
  );

    const addToCart = (id) => {
        setProducts(prev =>
            Object.fromEntries(
            Object.entries(prev).map(([key, items]) => [
            key,
            items.map(item =>
                item.id === id ? { ...item, inCart: true } : item
            )
        ])
      )
    )
    }

  return (
    <section className='search_result_page'>

    {  filtered.length > 0 && (
      <div className='search_result_page_header'>
        <h2>Search results for: <span>{searchTerm}</span></h2>
      </div>
    )}
    <div className='product_list_search_wrapper'>

      {filtered.length > 0 ? (
        filtered.map(product => (
          <div className='product_list_card' key={product.id}>
            <div className='product_img'>
              <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.name} />
              </Link>
              <button className='add_product' onClick={() => addToCart(product.id)}>
                <IoAddOutline />
              </button>
            </div>

            <div className='product_name__add'>
              <div className='product__name'>{product.name}</div>
              <div className='product__specs'>{product.specs}</div>
            </div>

            <Link to={`/product/${product.id}`} className='product__details_Link'>
              <div className='product__details'>
                <button>Details</button>
              </div>
            </Link>
          </div>
        ))

    ) : (
        <div className='no_product_found'>
          <h2>Search results for: <span>{searchTerm}</span>  </h2>
          <p>No products found.</p>
        </div>
    )}

    </div>
    </section>

  );
};

export default SearchResultPage;
