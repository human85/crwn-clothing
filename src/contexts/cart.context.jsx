import { createContext, useState } from 'react'

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartList: [],
  setCartList: () => null,
  cartCount: 0
})

function CartProvider({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartList, setCartList] = useState([])

  const cartCount = cartList.length

  const value = { isCartOpen, setIsCartOpen, cartList, setCartList, cartCount }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export default CartProvider
