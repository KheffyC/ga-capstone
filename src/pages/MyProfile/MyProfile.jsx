import { Link } from 'react-router-dom'
import { useState } from 'react'
import ReusableCard from "../../components/ReusableCard/ReusableCard"

const MyProfile = ({ user, updatedProfile }) => {
  const [property, setProperty] = useState('wishlist')
  const [collections, setCollections] = useState(false)

  const noCollectionsObj = {
    name: 'Add New Collection',
    image_background: 'https://static.vecteezy.com/system/resources/previews/009/344/470/original/plus-sign-transparent-free-png.png'
  }

  const handleClick = (e) => {
    setProperty(e.target.innerHTML)
    setCollections(false)
  }

  return (
    <section className="w-full min-h-screen">
      <div className="relative items-center w-full px-2 pt-12 mx-auto md:px-8 lg:px-16 max-w-7xl">
        <div className="flex w-full mx-auto">
                <div className="items-center flex">
                  <div className="lg:pr-24 text-left">
                    <h1 className="max-w-full text-3xl font-bold leading-none tracking-tighter text-white lg:text-5xl lg:max-w-full">
                      {user.name}
                    </h1>
                  </div>
                  <div className="flex flex-wrap items-end text-right px-5">
                    <p className="max-w-md mt-4 font-semibold text-white md:max-w-xl lg:mt-0 px-5 cursor-pointer" onClick={handleClick}>alreadyPlayed</p>
                    <p className="max-w-md mt-4 font-semibold text-white md:max-w-xl lg:mt-0 px-5 cursor-pointer" onClick={handleClick}>wishlist</p>
                    <p className="max-w-md mt-4 font-semibold text-white md:max-w-xl lg:mt-0 px-5 cursor-pointer"onClick={() => setCollections(true)}>Collections</p>
                    <p className="max-w-md mt-4 font-semibold text-white md:max-w-xl lg:mt-0 px-5">Settings</p>
                  </div>
                </div>
        </div>
          <hr />
          <div className="mt-10">
              {collections ? 
              <>
                <h1 className="text-2xl font-semibold capitalize dark:text-white mb-10">Collections</h1>
                <div className="flex flex-wrap justify-center">
                 <ReusableCard card={noCollectionsObj} />
                </div>
              </>
              :
              <>
                <h1 className="text-2xl font-semibold capitalize dark:text-white mb-10">{property}</h1>
                <div className="flex flex-wrap justify-center">
                  {updatedProfile[`${property}`].map((elem, idx) => <Link to={`/games/${elem.id}`}><ReusableCard key={idx} card={elem} /></Link>)}
                </div>
              </>  
              }
          </div>
      </div>
    </section>
  )
}

export default MyProfile
