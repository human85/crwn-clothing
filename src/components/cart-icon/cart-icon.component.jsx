import './cart-icon.styles.scss'
import { ReactComponent as ShoppingIcon } from '@/assets/shopping-bag.svg'
import { CartContext } from '@/contexts/cart.context'
import { useContext } from 'react'

function CartIcon({ onClick }) {
  const { cartCount } = useContext(CartContext)

  return (
    <div className="cart-icon-container" onClick={onClick}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  )
}

export default CartIcon
