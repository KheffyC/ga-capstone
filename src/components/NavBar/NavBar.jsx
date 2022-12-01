import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom'
import * as userService from '../../utilities/users-service'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const NavBar = ({ setUser, user, navbarPlatforms }) => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  let activeStyle = {
    textDecoration: "none",
    fontWeight: 700,
    color: 'rgba(37, 99, 235, 1)',
  };

  const navigate = useNavigate()
  
  const handleLogOut = () => {
  
    userService.logOut();
    setUser()
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    let searchValue = e.target[0].value.toLowerCase()
    navigate(`/search/${searchValue}`)
    
  }

  const hamburgerNavPlatforms = navbarPlatforms.map((platform, idx) => (
    <li key={idx} onClick={() => setIsNavOpen(false)} className="border-b border-gray-400 my-8 uppercase text-white bg-black cursor-pointer">
      <NavLink to={`/platforms/${platform.id}`}  style={ ( { isActive } ) => isActive ? activeStyle : undefined} >
        {platform.name}
      </NavLink>
    </li>))

  const navPlatforms = navbarPlatforms.map((platform, idx) => (
    <li key={idx}>
      <NavLink to={`/platforms/${platform.id}`}  style={ ( { isActive } ) => isActive ? activeStyle : undefined} >
        {platform.name}
      </NavLink>
    </li>))

  return (
    <div className="flex items-center justify-between border-b border-gray-400 py-8">
      <Link to="/">
        <img src="/appLogo.png" alt="logo" className='object-scale-down h-20 w-36'/>
      </Link>
        <div className="pt-2 relative mx-auto text-gray-600 w-1/3">
          <form onSubmit={handleSubmit}>
            <input autoComplete='off'  className="border-1 border-black bg-gray-900 h-8 px-5 pr-4 w-2/3 rounded-lg text-sm text-white focus:outline-none text-left"
              type="text" name="search" placeholder="Search" />
            <button type="submit" className="absolute right-0 top-0 mt-3.5 mr-8">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
        </div>
      <nav>
        
        <section className="MOBILE-MENU flex xl:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px] bg-black no-underline">
              {hamburgerNavPlatforms}
              { user ?
              <>
                <li className="border-b border-gray-400 my-8 uppercase no-underline">
                  <Link to="/myprofile">View my Profile</Link>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <Link to="" onClick={handleLogOut}>Logout </Link>
                </li>
              </>
              :
              <>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <Link to="/signin">Sign In</Link>
                </li>
              </>  
            }
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-4 xl:flex">
          {navPlatforms}
          { user ?
          <>
            <li>
              <Link to="/myprofile">
                <button className='bg-transparent hover:bg-indigo-800 text-white font-semibold hover:text-black py-1 px-4 border border-blue-800 hover:border-transparent rounded'>
                  View My Profile
                </button>
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleLogOut}><button className='bg-transparent hover:bg-red-500 text-white font-semibold hover:text-black py-1 px-4 border border-blue-800 hover:border-transparent rounded'>Log Out</button></Link>
            </li>
          </>
          :
          <>
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
          </>
        }
        </ul>
      </nav>

    {/* CSS for nav toggle  */}
      <style>
        {`
          .hideMenuNav {
            display: none;
          }
          .showMenuNav {
            display: block;
            position: absolute;
            width: 100%;
            height: 120vh;
            top: 0;
            left: 0;
            background: black;
            z-index: 10;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
          }
        `}
    </style>

    </div>
  )
}

export default NavBar


