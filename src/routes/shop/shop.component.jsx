import SHOP_DATA from '@/shop-data.json'
import { ProductsContext } from '@/contexts/products.context'
import { useContext, useEffect } from 'react'
import ProductCard from '@/components/product-card/product-card.component'
import './shop.styles.scss'
import useStore from '@/store'
import Button from '@/components/button/button.component'

function Shop() {
  const { products, setProducts } = useContext(ProductsContext)
  const { bears, increasePopulation, asyncChange } = useStore(state => state)

  useEffect(() => {
    setProducts(SHOP_DATA)
  }, [setProducts])

  return (
    <div className="products-container">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
      <p>{bears}</p>
      <Button onClick={increasePopulation}>+1</Button>
      <Button onClick={asyncChange}>Async</Button>
    </div>
  )
}

export default Shop
