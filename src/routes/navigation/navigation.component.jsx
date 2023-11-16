import { Outlet, NavLink } from 'react-router-dom'
import { ReactComponent as Crown } from '../../assets/crown.svg'
import './navigation.styles.scss'

function Navigation() {
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
          <NavLink className="nav-link" to="/auth">
            SIGNIN
          </NavLink>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Navigation
