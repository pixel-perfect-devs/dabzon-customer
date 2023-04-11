import React from 'react'
import PaymentSuccess from '../../components/Cart/Payment/PaymentSuccess/index'
import FullCart from '../../components/Cart/FullCart/index'
import EmptyCart from '../../components/Cart/EmptyCart/index'
import FooterComponents from '../../components/FooterComponents/index'
import NavBar from '../../components/NavBar/index'
import TopSellingBatteries from '../../components/LandingPageComponents/TopSellingBatteries/index'
import { useDispatch, useSelector } from 'react-redux'

const Cart = () => {

  const [paymentsuccess, setPaymentsuccess] = React.useState(false);
  const dispatch = useDispatch();
  // const { cart } = useSelector((state) => state.cart);

  // ! todo remove this after checkout is done
  const cart = ["hello", 'hey'];

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
                cart.length > 0
                  ?
                  <FullCart paymentsuccess={paymentsuccess} setPaymentsuccess={setPaymentsuccess} />
                  :
                  <EmptyCart />
              }
            </div>
          </div>
      }
      {/* recommend for you section */}
      {/* <TopSellingBatteries title="Recommeded for you" /> */}
      <div className="footer hidden sm:block">
        <FooterComponents />
      </div>
    </div>
  )
}

export default Cart