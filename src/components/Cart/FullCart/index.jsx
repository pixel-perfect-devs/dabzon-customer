import Image from 'next/image'
import React, { useEffect } from 'react'
import payment__image from '../../../../public/razorpay.png'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import CartItemCard from './CartItemCard'
import { handleCheckOut } from '@/helperFunction/checkout/cartcheckout'
import { getCookie } from '@/cookie'
import { useRouter } from 'next/router'
import AddressDropwdown from "./AddressDropdown"
import AddressModal from "../../Modals/AddressModal/AddressModal"

const Index = ({ paymentsuccess, setPaymentsuccess }) => {
  const router = useRouter();
  const { cart } = useSelector((state) => state.cart);
  const [cartArray, setCartArray] = useState([]);
  const [amount, setAmount] = useState(100);
  // state to show or hide model
  const [Modal, setMddal] = useState(false);


  useEffect(() => {
    // checking if user is signed in
    if (getCookie("userSession") === '') {
      router.replace("/auth/login?redirect=cart");
    }
    setCartArray(cart);
    setAmount(cart.reduce((acc, item) => acc + (item.productDeliveryCityPrice ? +item.productDeliveryCityPrice : +item.productPrice) - (item.exchange ? +item.productWithExchange : 0) + (item.trolley ? +item.productWithTrolley : 0) - (item.couponDiscountPrice ? +item.couponDiscountPrice : 0), 0))
  }, [cart])

  // razorpay payment gateway
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    document.body.appendChild(script);
    script.onload = () => {
      console.log("razorpay script loaded");
    }
    script.onerror = () => {
      console.log("razorpay script not loaded");
    }
  }, []);

  // const handlePlus = (e, index) => {
  //   e.preventDefault();
  //   const prevQuantity = cartArray[index].quantity;
  //   setCartArray(
  //     cartArray.map((item, i) =>
  //       i === index
  //         ? { ...item, quantity: prevQuantity + 1 }
  //         : item
  //     )
  //   )
  // }

  // const handleMinus = (e, index) => {
  //   e.preventDefault();
  //   const prevQuantity = cartArray[index].quantity;
  //   if (prevQuantity > 1) {
  //     setCartArray(
  //       cartArray.map((item, i) =>
  //         i === index
  //           ? { ...item, quantity: prevQuantity - 1, }
  //           : item
  //       )
  //     )
  //   }
  //   else {
  //     alert("Quantity can't be 0");
  //   }
  // }

  // console.log(cartArray);

  const handlePayment = (e) => {
    e.preventDefault();
    if (cartArray.length === 0) {
      alert("Cart is empty");
      return;
    };
    const selected_city = "Kanpur";
    for (var i = 0; i < cartArray.length; i++) {
      var cityArray = cartArray[i].city;
      var match = false;
      for (let index = 0; index < cityArray.length; index++) {
        var element = cityArray[index];
        if (element.cityName === selected_city) {
          match = true;
        }
      }
      if (!match) {
        alert(cartArray[i].productName + " is not available in " + element.cityName);
      }
    }
    // check if user is logged in and address is selected or not then only proceed to payment
    // handleCheckOut(e, paymentsuccess, setPaymentsuccess, amount, cartArray)
  }

  return (
    <div className="cart__full flex items-start justify-center lg:justify-between flex-wrap">

      <div className="cart__item__container my-8 space-y-3 sm:space-y-6">
        {
          cartArray.length !== 0 ? cartArray?.map((i, ind, arr) => <CartItemCard item={i} key={ind} ind={ind} />) :
            null
        }
      </div>
      <div className="cart__utility space-y-10 my-8">
        {/* <div className="cart__offers space-y-2 flex flex-col">
          <p className="offers__heading font-semibold text-xl mb-3">Offers</p>
          <input type="search" className="offer__search bg-[#e5e7eb] px-5 py-2 rounded-full" placeholder='Enter coupon code' />
          <p className="coupon__result text-green-600 text-xs">Offer Applied</p>
          <button className="offer__apply bg-dabgreen py-2 px-5 rounded-full w-min text-white">Apply</button>
        </div> */}
        <div className="choose__address space-y-2 flex flex-col ">
          <p className="offers__heading font-semibold text-xl mb-3">Choose Address</p>
          <div className="flex flex-col space-y-3">
          {/* address dropdown for choose addhress section  */}
            <AddressDropwdown className='Address--Dropdown' />
          </div>
          <button className="offer__apply border-dabgreen border py-2 px-6 rounded-full w-min text-dabgreen flex gap-2 font-semibold items-center"
            onClick={() => setMddal(true)}>
            <span className="icon text-xl">+</span>
            <span className="icon">ADD</span>
          </button>
        </div>
        <div className="total__amount space-y-4 flex flex-col ">
          <p className="offers__heading font-semibold text-xl ">Total Amount</p>
          <div className="amount__container space-y-1">
            <p className="products__amount flex justify-between">
              <span className="text">Products</span>
              <span className="shipping__amount__number">₹{amount}</span>
            </p>
            <p className="shipping__amount flex justify-between">
              <span className="text">Shipping</span>
              <span className="shipping__amount__number">FREE</span>
            </p>
            <p className="shipping__amount flex justify-between border-t border-gray-400">
              <span className="text font-semibold">Total Price</span>
              <span className="shipping__amount__number font-semibold text-dabgreen">₹{amount}</span>
            </p>
          </div>
        </div>
        <div className="pay_now space-y-5 flex flex-col">
          <p className="offers__heading font-semibold text-xl ">We accept</p>
          <div className="payment__image__container flex flex-col flex-wrap gap-2 ">
            <div className="card flex gap-3 text-sm items-center border border-dabgreen px-3 py-2 rounded-lg">
              <span className='icon'>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#10b97e" className="bi bi-credit-card-2-front" viewBox="0 0 16 16" >
                  <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z" />
                  <path d="M2 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />
                </svg>
              </span>
              <p className='text flex flex-col'>
                <span>Card</span>
                <span className='text-xs'>Visa, MasterCard, RuPay, and Maestro</span>
              </p>
            </div>
            <div className="upi flex gap-3 text-sm items-center border border-dabgreen px-3 py-2 rounded-lg">
              <span className='icon'>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#10b97e" className="bi bi-credit-card-2-front" viewBox="0 0 21 24">
                  <path d="M9.516 20.254l9.15-8.388-6.1-8.388-1.185 6.516 1.629 2.042-2.359 1.974-1.135 6.244zM12.809.412l8 11a1 1 0 0 1-.133 1.325l-12 11c-.707.648-1.831.027-1.66-.916l1.42-7.805 3.547-3.01-1.986-5.579 1.02-5.606c.157-.865 1.274-1.12 1.792-.41z"></path>
                  <path d="M5.566 3.479l-3.05 16.775 9.147-8.388-6.097-8.387zM5.809.412l7.997 11a1 1 0 0 1-.133 1.325l-11.997 11c-.706.648-1.831.027-1.66-.916l4-22C4.174-.044 5.292-.299 5.81.412z"></path>
                </svg>
              </span>
              <p className='text flex flex-col'>
                <span>UPI / QR</span>
                <span className='text-xs'>GPay, PhonePay, PayTM & More</span>
              </p>
            </div>
            <div className="Netbanking flex gap-3 text-sm items-center border border-dabgreen px-3 py-2 rounded-lg">
              <span className='icon'>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#10b97e" className="bi bi-credit-card-2-front" viewBox="0 0 28 25" >
                  <path d="M4 15a1 1 0 0 1 2 0v5a1 1 0 0 1-2 0v-5zm6 0a1 1 0 0 1 2 0v5a1 1 0 0 1-2 0v-5zm6 0a1 1 0 0 1 2 0v5a1 1 0 0 1-2 0v-5zM1 25a1 1 0 0 1 0-2h20a1 1 0 0 1 0 2H1zm0-13c-.978 0-1.374-1.259-.573-1.82l10-7a1 1 0 0 1 1.146 0l1.426 1L13 9l1 3H1zm3.172-2h8.814l.017-3.378L11 5.221 4.172 10z"></path>
                  <path d="M20 16a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm0-2a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm3.663-7H27v2h-3.338c-.162 2.156-.85 4.275-2.057 6.352l-1.21-.704c1.084-1.863 1.703-3.744 1.863-5.648H13V7h9.258c-.16-1.904-.78-3.785-1.863-5.648l1.21-.704C22.814 2.725 23.501 4.844 23.663 7zm-4.058 7.648l-1.21.704C17 12.955 16.3 10.502 16.3 8c0-2.501.701-4.955 2.095-7.352l1.21.704C18.332 3.54 17.7 5.754 17.7 8c0 2.246.632 4.46 1.905 6.648z"></path>
                </svg>
              </span>
              <p className='text flex flex-col'>
                <span>Netbanking</span>
                <span className='text-xs'>All Indian banks</span>
              </p>
            </div>
          </div>
          <div className="paybutton flex gap-3 items-center">
            <p className="text-xl">₹{amount}</p>
            <button onClick={(e) => handlePayment(e)} className="offer__apply bg-dabgreen py-2 px-4 rounded-full w-max text-gray-100 hover:text-white text-sm shadow-md">Pay Now</button>
          </div>



        </div>

        {/* Address Modal  */}
        {Modal ? (

          <AddressModal setMddal={setMddal} />

        ) : null}
      </div>
    </div>
  )
}

export default Index