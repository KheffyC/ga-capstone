import * as usersService from '../../utilities/users-service'

const OrderHistoryPage = () => {

  const handleCheckToken = async() => {
    const expDate = await usersService.checkToken()
    console.log(expDate, 'working')
  }


  return (
    <>
      <h1>OrderHistoryPage</h1>
      <button onClick={handleCheckToken}>Check when my Login Expires</button>
    </>
  )
}

export default OrderHistoryPage
