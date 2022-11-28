import { Link, NavLink } from 'react-router-dom'
import * as userService from '../../utilities/users-service'

const NavBar = ({ setUser, user, navbarPlatforms }) => {

  let activeStyle = {
    textDecoration: "none",
    fontWeight: 700,
    color: 'rgba(37, 99, 235, 1)',
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
        <div>
          {user ?
            <div className='flex mb-5'>
              <div className='mr-5'>
                <Link to="/myprofile">
                  <button className='bg-transparent hover:bg-indigo-800 text-white font-semibold hover:text-black py-1 px-4 border border-blue-800 hover:border-transparent rounded'>
                    View My Profile
                  </button>
                </Link>
              </div>
              <div>
                <Link to="" onClick={handleLogOut}  > <button className='bg-transparent hover:bg-red-500 text-white font-semibold hover:text-black py-1 px-4 border border-blue-800 hover:border-transparent rounded'>Log Out</button></Link>
              </div>
            </div> 
            :
            <Link to="/signin">
              <button className='bg-transparent hover:bg-blue-300 text-white font-semibold hover:text-black py-1 px-4 border border-blue-800 hover:border-transparent rounded'>
                Sign In
              </button>
            </Link>
          }
        </div>
      </div>
      <div className="flex h-16 items-center justify-around">
        {navPlatforms}
      </div>
      <hr />
    </nav>
  )
}

export default NavBar


