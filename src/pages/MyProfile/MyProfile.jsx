
const MyProfile = ({ user }) => {
  return (
<section className="w-full">
  <div className="relative items-center w-full px-2 pt-12 mx-auto md:px-8 lg:px-16 max-w-7xl">
    <div className="flex w-full mx-auto">
            <div className="items-center flex">
              <div className="lg:pr-24 text-left">
                <h1 className="max-w-full text-3xl font-bold leading-none tracking-tighter text-white lg:text-5xl lg:max-w-full">
                  {user.name}
                </h1>
              </div>
              <div className="flex items-end text-right px-5">
                <p className="max-w-md mt-4 font-semibold text-white md:max-w-xl lg:mt-0 px-5"> Library</p>
                <p className="max-w-md mt-4 font-semibold text-white md:max-w-xl lg:mt-0 px-5">Wishlist</p>
                <p className="max-w-md mt-4 font-semibold text-white md:max-w-xl lg:mt-0 px-5">Collections</p>
                <p className="max-w-md mt-4 font-semibold text-white md:max-w-xl lg:mt-0 px-5">Settings</p>
              </div>
            </div>
    </div>
        <div className="">
            hello
        </div>
  </div>
</section>

  )
}

export default MyProfile