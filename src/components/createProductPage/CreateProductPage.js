import React, { useState } from 'react'
import './createProductPage.css'

import Footer from '../../layout/Footer'

const CreateProductPage = () => {

      const [previews, setPreviews] = useState([null, null, null, null]);

  const handleChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newPreviews = [...previews];
        newPreviews[index] = reader.result;
        setPreviews(newPreviews);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <>
        <section className="create_product_container">
            <div className='create_product_container'>
                <form>
                    <div className="upload_wrapper">
                        <label>Product image</label>
                        <div className='upload_files'>
                        {Array(4).fill('').map((_, index) => (
                          <label key={index} htmlFor={`image${index}`} className="upload_label">
                            <input accept="image/*" type="file" id={`image${index}`} hidden onChange={(e) => handleChange(e, index) }/>
                            <img className="upload_box" src={   previews[index] ||   'https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/e-commerce/uploadArea.png' } alt="upload" />
                          </label>
                        ))}
                        </div>
                    </div>
                    <div className='product_name'>
                        <label for="productName">Product Name</label>
                        <input type="text" placeholder='Type here' id='productName'/>
                    </div>
                    <div className='product_description_create_product'>
                        <label for="productName">Product Description</label>
                        <textarea placeholder='Type here' id='productName'/>
                    </div>
                    <div className='category'>
                        <label for="productName">Categories</label>
                        <select id="category" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40">
                            <option value="">Select Category</option>
                            {[{ name: 'Electronics' }, { name: 'Clothing' }, { name: 'Accessories' }].map((item, index) => (
                                <option key={index} value={item.name}>{item.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className='product_price'>
                        <div>
                            <label for="productName">Product Price</label>
                            <input type='number' id='productName' value={0} />
                        </div>
                        <div>
                            <label for="productName">Offer Discount</label>
                            <input type='number' id='productName' value={0} />
                        </div>
                    </div>
                    <div className='product_add_btn'>
                        <button>Add</button>
                    </div>
                </form>
            </div>
        </section>
        <Footer />
    </>
  )
}

export default CreateProductPage
