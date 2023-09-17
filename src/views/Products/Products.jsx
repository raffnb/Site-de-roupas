import React from 'react'
import './index.scss'
import HeaderMenu from '../../components/HearderMenu/HeaderMenu'
import Search from '../../components/Search/Search'
import { useParams } from 'react-router-dom'
import ProductDetail from '../../components/ProductDetail/ProductDetail'
const Products = ({data}) => {
  const {productsId} = useParams();

const selectedProduct = data.find(product => product.id == productsId)

  return (
    <section className="product">
      <HeaderMenu />
      <Search />
      <ProductDetail  data = {selectedProduct}/>
    </section>
    
    
  )
}

export default Products