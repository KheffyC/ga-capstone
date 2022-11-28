import { Link } from 'react-router-dom'

const ReusableCard = ({ card }) => {
  return (
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mb-10">
        <img class="rounded-t-lg" src={card.image_background ? card.image_background : card.background_image} alt="" />
        <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{card.name}</h5>
        </div>
    </div>
  )
}

export default ReusableCard