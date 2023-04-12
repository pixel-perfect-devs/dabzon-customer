import Image from 'next/image'
import React from 'react'
import payment__success__bg from "../../../../../public/payment_success.svg"

const Index = () => {
  return (
    <div className='payment__success bg-[#064e3b] text-white'>
      <div className="payment__success__container max-w-sm mx-auto py-14 flex flex-col items-center space-y-3">
        <div className="container__icon bg-white rounded-full p-4">
          <Image src={payment__success__bg} alt="payment__success" width={100} height={100} className='' />
        </div>
        <p className="container__text font-semibold text-xl">Congratulations</p>
        <p className="container__desc">Your order has been successfully placed</p>
        <p className="container__order__id space-x-5">
          <span className="order__id__text">Order ID</span> 
          <span className="order__id">DABZ44829307jdshv</span>
          </p>
        <div className="container__buttons flex gap-5 sm:gap-0 sm:space-x-8 !my-8 flex-wrap justify-center ">
          <button className="invoice border-white border-2 rounded-3xl px-5 py-2 hover:text-dabgreen hover:bg-gray-300">Download Invoice</button>
          <button className="order__status border-white border-2 rounded-3xl px-5 py-2 hover:text-dabgreen hover:bg-gray-300">Check Order Status</button>
        </div>
      </div>
    </div>
  )
}

export default Index