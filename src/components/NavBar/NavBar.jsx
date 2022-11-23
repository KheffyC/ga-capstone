import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service'

const NavBar = ({ setUser, user, platforms }) => {
  
  const handleLogOut = () => {

    userService.logOut();
    setUser()
  }

  const navPlatforms = platforms.map((platform, idx) => (<p key={idx}>{platform}</p>))


  return (

    <nav>
      <div className='flex justify-between align-items'> 
        LOGO 
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


