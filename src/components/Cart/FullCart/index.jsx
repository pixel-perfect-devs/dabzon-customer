import Image from 'next/image'
import React, { useEffect } from 'react'
import cart_item_bg from '../../../../public/cart_item_bg.png'
import payment__image from '../../../../public/razorpay.png'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { useState } from 'react'
import deleteCartItem from "../../../../public/icons/deleteCartItem.svg"
import { deleteFromCart } from '@/reduxStore/Slices/Cart/CartSlice'
import { handleCheckOut } from '@/helperFunction/checkout/cartcheckout'

const Index = ({ paymentsuccess, setPaymentsuccess }) => {

  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  const router = useRouter();
  const [cartArray, setCartArray] = useState([]);
  const [amount, setAmount] = useState(100);

  useEffect(() => {
    setCartArray(cart);
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

  const handlePlus = (e, index) => {
    e.preventDefault();
    const prevQuantity = cartArray[index].quantity;
    setCartArray(
      cartArray.map((item, i) =>
        i === index
          ? { ...item, quantity: prevQuantity + 1 }
          : item
      )
    )
  }

  const handleMinus = (e, index) => {
    e.preventDefault();
    const prevQuantity = cartArray[index].quantity;
    if (prevQuantity > 1) {
      setCartArray(
        cartArray.map((item, i) =>
          i === index
            ? { ...item, quantity: prevQuantity - 1, }
            : item
        )
      )
    }
    else {
      alert("Quantity can't be 0");
    }
  }

  console.log(cartArray);

  return (
    <div className="cart__full flex items-start justify-center lg:justify-between flex-wrap">

      <div className="cart__item__container my-8 space-y-3 sm:space-y-6">
        {
          cartArray.length !== 0 ? cartArray?.map((i, ind) => {
            return (
              // <p key={ind} className="">helo cart</p>
              <div key={ind} className="cart__item bg-white flex p-2 m-2 sm:p-8 rounded-xl gap-2 sm:gap-5 items-center relative ">
                <span onClick={() => dispatch(deleteFromCart(i._id))} className="cart__item__remove__icon p-2 absolute top-3 right-3 cursor-pointer bg-gray-100 hover:bg-red-200 rounded-full">
                  <Image className='' src={deleteCartItem} alt='deleteCartItem' width={20} height={20} />
                </span>
                <div onClick={() => router.replace(`/product/${i._id}`)} className="image__container w-24 h-24 p-3 sm:w-48 sm:h-48 bg-[#f3f4f6] rounded-xl grid place-items-center box-border object-contain">
                  <Image src={i.productImage} alt='cart_item_bg' width={100} height={100} className='w-auto h-auto' />
                </div>
                <div className="item__text__container space-y-1 sm:space-y-2 text-xs sm:text-sm">
                  <p className="item__title text-base sm:text-lg font-semibold">{i.productName}</p>

                  <div className="item__exchange__trolley flex gap-1 sm:gap-6 ">
                    {
                      i?.productWithExchange
                        ? <p className="exchnage flex gap-1 sm:gap-2 items-center">
                          <span className="exchange__icon bg-[#f43f5e] p-2 sm:p-3 rounded-full">
                            <svg className='w-2 sm:w-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill='white'>
                              <path d="M438.6 150.6c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.7 96 32 96C14.3 96 0 110.3 0 128s14.3 32 32 32l306.7 0-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96zm-333.3 352c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 416 416 416c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0 41.4-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96z" /></svg>
                          </span>
                          <span className="exchange__text uppercase text-xs">With exchange</span>
                        </p>
                        : null
                    }
                    {
                      i?.productWithTrolley
                        ? <p className="trolley flex gap-1 sm:gap-2 items-center">
                          <span className="exchange__icon bg-dabgreen p-2 sm:p-3 rounded-full">
                            <svg className='w-3 sm:w-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill='white'>
                              <path d="M0 32C0 14.3 14.3 0 32 0H48c44.2 0 80 35.8 80 80V368c0 8.8 7.2 16 16 16H608c17.7 0 32 14.3 32 32s-14.3 32-32 32H541.3c1.8 5 2.7 10.4 2.7 16c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-5.6 1-11 2.7-16H253.3c1.8 5 2.7 10.4 2.7 16c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-5.6 1-11 2.7-16H144c-44.2 0-80-35.8-80-80V80c0-8.8-7.2-16-16-16H32C14.3 64 0 49.7 0 32zM432 96V56c0-4.4-3.6-8-8-8H344c-4.4 0-8 3.6-8 8V96h96zM288 96V56c0-30.9 25.1-56 56-56h80c30.9 0 56 25.1 56 56V96 320H288V96zM512 320V96h16c26.5 0 48 21.5 48 48V272c0 26.5-21.5 48-48 48H512zM240 96h16V320H240c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48z" />
                            </svg>
                          </span>
                          <span className="exchange__text uppercase text-xs">With trolley</span>
                        </p>
                        : null
                    }
                  </div>

                  <div className="item__item__count bg-[#f3f4f6] space-x-5 flex w-min py-1 px-2 sm:py-2 sm:px-4 font-semibold items-center rounded-lg" >
                    <span onClick={(e) => handlePlus(e, ind)} className="count__increment cursor-pointer text-lg sm:text-2xl">+</span>
                    <span className="count__text text-sm sm:text-xl">{i.quantity}</span>
                    <span onClick={(e) => handleMinus(e, ind)} className="count__decrement cursor-pointer text-lg sm:text-2xl">-</span>
                  </div>

                  <div className="item__price__discount flex gap-1 sm:gap-2">
                    <p className="discounted__price font-semibold text-lg flex items-center">
                      <span className="icon ">
                        <svg className='w-3 sm:w-5' xmlns="http://www.w3.org/2000/svg" fill="#10b981" viewBox="0 0 16 16">
                          <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
                        </svg>
                      </span>
                      <span className="price__text text-sm">{i.productPrice}</span>
                    </p>
                    <p className="discounted__price flex items-center line-through">
                      <span className="icon">
                        <svg className='w-3 sm:w-5' xmlns="http://www.w3.org/2000/svg" fill="#6b7280" viewBox="0 0 16 16">
                          <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
                        </svg>
                      </span>
                      <span className="price__text text-sm text-gray-500">{Math.round((i?.productDeliveryCityPrice ? + i.productDeliveryCityPrice : + i.productPrice) * 100 / (+i.productFakeDiscount))}</span>
                    </p>
                    <span className="discounted__price text-[#7f1d1d] font-semibold text-sm sm:text-lg">{i.productFakeDiscount}% OFF</span>
                  </div>

                </div>
              </div>
            )
          }) :
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

            <button className="hover:border-dabgreen focus:border-green-400 border px-3 py-2 flex gap-3 bg-white rounded-xl items-start">
              <span className="address__icon p-3 rounded-full bg-[#6366f1]">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-truck" viewBox="0 0 16 16">
                  <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                </svg>
              </span>
              <div className="address__text w-44 text-left">
                <p className="name">sumit kumar</p>
                <p className="address text-gray-500 text-sm">Lorem ipsum dolor sit amet, consectetur </p>
                <p className="phone text-gray-500 text-sm">8494986495</p>
              </div>
            </button>

          </div>
          <button className="offer__apply border-dabgreen border py-2 px-6 rounded-full w-min text-dabgreen flex gap-2 font-semibold items-center">
            <span className="icon text-xl">+</span>
            <span className="icon">ADD</span>
          </button>
        </div>
        <div className="total__amount space-y-2 flex flex-col ">
          <p className="offers__heading font-semibold text-xl mb-3">Total Amount</p>
          <div className="amount__container space-y-1">
            <p className="shipping__amount flex justify-between">
              <span className="text">Shipping</span>
              <span className="shipping__amount__number">FREE</span>
            </p>
            <p className="discount__amount flex justify-between">
              <span className="text">Discount</span>
              <span className="shipping__amount__number">-₹400</span>
            </p>
            <p className="shipping__amount flex justify-between">
              <span className="text">Selling Price</span>
              <span className="shipping__amount__number">₹6000</span>
            </p>
            <p className="shipping__amount flex justify-between">
              <span className="text font-semibold">Total</span>
              <span className="shipping__amount__number font-semibold text-dabgreen">₹65000</span>
            </p>
          </div>
        </div>
        <div className="pay_now space-y-2 flex flex-col">
          <p className="offers__heading font-semibold text-xl ">Pay Now</p>
          <div className="payment__image__container border border-dabgreen px-3 py-2 rounded-lg grid place-items-center">
            <Image src={payment__image} alt="payment__image" width={200} height={150} className='' />
          </div>
          <button onClick={(e) => handleCheckOut(e, paymentsuccess, setPaymentsuccess, amount, cartArray)} className="offer__apply bg-dabgreen py-2 px-5 rounded-full w-max text-white">Pay Now</button>
        </div>
      </div>
    </div>
  )
}

export default Index