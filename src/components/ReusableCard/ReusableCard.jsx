
const ReusableCard = ({ card }) => {
  return (
    <div className="max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow-md mb-10">
        <img className="rounded-t-lg" src={card.image_background ? card.image_background : card.background_image} alt="background" />
        <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{card.name}</h5>
        </div>
    </div>
  )
}

export default ReusableCard