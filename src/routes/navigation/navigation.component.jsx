import { Outlet, NavLink } from 'react-router-dom'
import { ReactComponent as Crown } from '../../assets/crown.svg'

function Navigation() {
  return (
    <>
      <div className="navigation">
        <NavLink className="logo-container" to="/">
          <Crown />
        </NavLink>
        <div className="nav-links-container">
          <NavLink className="nav-link" to="/shop">
            Shop
          </NavLink>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Navigation
