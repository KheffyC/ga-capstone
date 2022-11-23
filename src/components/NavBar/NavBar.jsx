import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service'

const NavBar = ({ setUser, user }) => {


  const handleLogOut = () => {

    userService.logOut();
    setUser()
  }


  return (
    <nav>
      LOGO 
      &nbsp; | &nbsp;
      XBOX
      &nbsp; | &nbsp;
      Nintendo
      &nbsp; | &nbsp;
      PC
      &nbsp; | &nbsp;
      PS4
      &nbsp; | &nbsp;
      {user ? 
      <>Welcome, {user.name}!
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>Log Out</Link>
      </>
      :
      <Link to="/signin">Sign In</Link>
    }

    </nav>
  )
}

export default NavBar