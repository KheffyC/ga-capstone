import { Link, NavLink } from 'react-router-dom'
import * as userService from '../../utilities/users-service'

const NavBar = ({ setUser, user, navbarPlatforms }) => {

  let activeStyle = {
    textDecoration: "underline",
    backgroundColor: 'white',
    color: 'black'
  };


  
  const navPlatforms = navbarPlatforms.map((platform, idx) => (
    <NavLink to={`/platforms/${platform.slug}`} key={idx} style={ ( { isActive } ) => isActive ? activeStyle : undefined}   >
      <p>{platform.name}</p>
    </NavLink>))

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
      <hr />
    </nav>
  )
}

export default NavBar


