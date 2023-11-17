import SHOP_DATA from '@/shop-data.json'
import { ProductsContext } from '@/contexts/products.context'
import { useContext, useEffect } from 'react'
import ProductCard from '@/components/product-card/product-card.component'
import './shop.styles.scss'

function Shop() {
  const { products, setProducts } = useContext(ProductsContext)

  useEffect(() => {
    setProducts(SHOP_DATA)
  }, [setProducts])

  return (
    <div className="products-container">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default Shop
