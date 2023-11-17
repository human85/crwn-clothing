import { createContext, useEffect, useState } from 'react'

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0
})

function CartProvider({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
    setCartCount(newCartCount)
  }, [cartItems])

  const addItemToCart = item => {
    if (cartItems.some(cI => cI.id === item.id)) {
      setCartItems(
        cartItems.map(cI => {
          if (cI.id === item.id) {
            return {
              ...cI,
              quantity: cI.quantity + 1
            }
          }

          return cI
        })
      )
    } else {
      setCartItems([
        ...cartItems,
        {
          ...item,
          quantity: 1
        }
      ])
    }
  }

  const value = { isCartOpen, setIsCartOpen, cartItems, cartCount, addItemToCart }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export default CartProvider
