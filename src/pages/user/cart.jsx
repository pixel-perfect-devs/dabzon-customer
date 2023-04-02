import React from 'react'
import PaymentSuccess from '../../components/Cart/Payment/PaymentSuccess/index'
import FullCart from '../../components/Cart/FullCart/index'
import EmptyCart from '../../components/Cart/EmptyCart/index'
import FooterComponents from '../../components/FooterComponents/index'
import NavBar from '../../components/NavBar/index'
import TopSellingBatteries from '../../components/LandingPageComponents/TopSellingBatteries/index'
import { useSelector } from 'react-redux'

const Cart = () => {

  const [paymentsuccess, setPaymentsuccess] = React.useState(false);
  const cartState = useSelector((state) => state.cart);

  return (
    <div className='cart__page '>
      <NavBar />
      {
        paymentsuccess
          ?
          <PaymentSuccess />
          :
          <div className='cart__container max-w-7xl mx-auto px-[4vw] my-3'>
            <p className="cart__heading text-xl font-semibold text-gray-900">Cart</p>
            <div className="cart__container">
              {
                cartState.length > 0
                  ?
                  <FullCart />
                  :
                  <EmptyCart />
              }
            </div>
          </div>
      }
      {/* recommend for you section */}
      <TopSellingBatteries title="Recommeded for you" />
      <FooterComponents />
    </div>
  )
}

export default Cart