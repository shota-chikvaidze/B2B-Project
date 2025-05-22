import React from 'react'
import './AddCategorie.css'

import { RiAddLargeFill } from "react-icons/ri";

const AddCategories = () => {
  return (
    <>
      <section className='addCate_section'>
        <div className='addCate_container'>
          <div className='add_categorie'>
            Add Categorie
            <RiAddLargeFill className='add_icon'/>
          </div>
          <div className='add_sub_categorie'>
            Add Sub Categorie
            <RiAddLargeFill className='add_icon'/>
          </div>
        </div>
      </section>
    </>
  )
}

export default AddCategories
