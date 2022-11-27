import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service'

const NavBar = ({ setUser, user, navbarPlatforms }) => {
  
  const navPlatforms = navbarPlatforms.map((platform, idx) => (<Link to={`/platforms/${platform.slug}`} key={idx}  ><p>{platform.name}</p></Link>))

  const handleLogOut = () => {

    userService.logOut();
    setUser()
  }





  return (

    <nav>
      <div className='flex justify-between align-items'> 
        <Link to="/">LOGO</Link>
        &nbsp; | &nbsp;
        {user ? 
        <>Welcome, {user.name}!
        <Link to="" onClick={handleLogOut}>Log Out</Link>
        </>
        :
        <Link to="/signin">Sign In</Link>
        }
      </div>
      <div className="flex h-16 items-center justify-around">
        {navPlatforms}
      </div>

    </nav>
  )
}

export default NavBar


