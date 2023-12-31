import { createContext, useState } from 'react'

export const ProductsContext = createContext({
  products: [],
  setProducts: () => null
})

function ProductsProvider({ children }) {
  const [products, setProducts] = useState([])
  const value = { products, setProducts }

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}

export default ProductsProvider
