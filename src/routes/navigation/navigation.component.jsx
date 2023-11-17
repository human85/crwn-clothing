import { Outlet, NavLink } from 'react-router-dom'
import { ReactComponent as Crown } from '../../assets/crown.svg'
import './navigation.styles.scss'
import { UserContext } from '@/contexts/user.context'
import { useContext } from 'react'
import { signOutUser } from '@/utils/firebase/firebase.util'
import CartIcon from '@/components/cart-icon/cart-icon.component'
import CartDropdown from '@/components/cart-dropdown/cart-dropdown.component'
import { CartContext } from '@/contexts/cart.context'

function Navigation() {
  const { currentUser } = useContext(UserContext)
  const { isCartOpen, setIsCartOpen } = useContext(CartContext)

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)

  return (
    <>
      <div className="navigation">
        <NavLink className="logo-container" to="/">
          <Crown />
        </NavLink>
        <div className="nav-links-container">
          <NavLink className="nav-link" to="/shop">
            SHOP
          </NavLink>
          {currentUser ? (
            <NavLink className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink className="nav-link" to="/auth">
              SIGNIN
            </NavLink>
          )}
          <CartIcon onClick={toggleIsCartOpen} />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  )
}

export default Navigation
