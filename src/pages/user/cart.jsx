import React, { useEffect, useState } from 'react'
import PaymentSuccess from "../../components/Cart/Payment/PaymentSuccess/index";
import FullCart from '../../components/Cart/FullCart/index'
import EmptyCart from '../../components/Cart/EmptyCart/index'
import FooterComponents from '../../components/FooterComponents/index'
import NavBar from '../../components/NavBar/index'
import TopSellingBatteries from '../../components/LandingPageComponents/TopSellingBatteries/index'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { getCookie } from '@/cookie'
import AddressModal from "../../components/Modals/Address/index";

const Cart = () => {
  const router = useRouter();
  const { cart } = useSelector((state) => state.cart);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (getCookie("userSession") === '') {
      router.replace("/auth/login?redirect=cart");
    }
  }, [])

  return (
    <div className="cart__page ">
      <NavBar />
      <div className='cart__container max-w-7xl mx-auto px-[4vw] my-3'>
        <p className="cart__heading text-xl font-semibold text-gray-900">Cart</p>
        <div className="cart__container">
          {
            cart.length > 0
              ?
              <FullCart />
              :
              <EmptyCart />
          }
        </div>
      </div>
      {
      modal 
      ?(
        <div className="fixed top-0 left-0 z-50 backdrop-blur-sm w-full h-full overflow-y-scroll px-[2vw] ">
        <AddressModal setModal={setModal} />
      </div>) 
      : null}
      
      {/* recommend for you section */}
      {/* <TopSellingBatteries title="Recommeded for you" /> */}
      <div className="footer hidden sm:block">
        <FooterComponents />
      </div>
    </div>
  );
};

export default Cart;
