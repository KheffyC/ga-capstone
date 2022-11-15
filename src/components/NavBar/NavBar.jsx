import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service'

const NavBar = ({ setUser, user }) => {


  const handleLogOut = () => {

    userService.logOut();
    setUser()
  }


  return (
    <nav>
      {user.name}
      &nbsp; | &nbsp;
      <Link to="/orders">Order History</Link>
      &nbsp; | &nbsp;
      <Link to="/orders/new">New Order</Link>
      &nbsp; | &nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  )
}

export default NavBar