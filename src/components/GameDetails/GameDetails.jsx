

const GameDetails = ({ singleGame }) => {
  return (
    <div className="text-center boder-t-4 border-b-2" style={{background: `url(${singleGame?.background_image}) no-repeat center/cover `, height: '60vh', width: '100vw'}}>
        <hr />
        <h1 className=" max-w-5xl text-2xl font-bold leading-none tracking-tighter text-700 md:text-5xl lg:text-6xl lg:max-w-full">{singleGame?.name}</h1>
    </div>
  )
}

export default GameDetails