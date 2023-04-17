import React from 'react'
import profile from '../../../../public/avatar.png'
import order from '../../../../public/account/order.svg'
import address from '../../../../public/account/address.svg'
import Image from 'next/image'
const Index = ({setRight}) => {
  return (
    <div className='flex flex-col items-center sm:items-start'>

    
        <div onClick={()=>setRight(1)} className="box-border  border-gray-200 bg-green-100  border h-16 lg:w-72 w-56 flex items-center   rounded-lg m-2">
          <div className='w-10 h-10  mx-4'>
            
          <Image
            className=" w-10 h-10 "
            loading="lazy"
            src={profile}
            alt="Image is loading..."
            width={1000}
            height={1000}
            />
            </div>
          <div className="flex flex-col">
            <p className=" text-lg  text-green-900">Hello !!</p>
            <p className="  text-xs  text-green-800">Kapil Krishna Yadav</p>
          </div>
        </div>
      

      
        <div onClick={()=>setRight(2)} className="box-border  border-gray-200 bg-green-100  border  h-16 lg:w-72 w-56  flex items-center   rounded-lg m-2">
          <div className='w-10 h-10 mx-4'>
            
          <Image
            className=" w-10 h-10 "
            loading="lazy"
            src={order}
            alt="Image is loading..."
            width={1000}
            height={1000}
            />
            </div>
          <div className="flex flex-col">
            <p className=" text-lg text-green-900">MY Order</p>
            <p className="  text-xs text-green-800">20+ order till Today</p>
          </div>
        </div>
      

      
        <div className="box-border  border-gray-200 bg-green-100  border  h-16 lg:w-72 w-56 flex items-center   rounded-lg m-2">
          <div className='w-10 h-10 mx-4'>
            
          <Image
            className=" w-10 h-10 "
            loading="lazy"
            src={address}
            alt="Image is loading..."
            width={1000}
            height={1000}
            />
            </div>
          <div className="flex flex-col">
            <p className=" text-lg text-green-900">Saved Address</p>
            <p className="  text-xs text-green-800">2+ Address Saved</p>
          </div>
        </div>
      

      
        <div className="box-border  border-gray-200 bg-green-100  border  h-16 lg:w-72 w-56  flex items-center   rounded-lg m-2">
          <div className='w-10 h-10 mx-4'>
            
          <Image
            className=" w-10 h-10"
            loading="lazy"
            src={address}
            alt="Image is loading..."
            width={1000}
            height={1000}
            />
            </div>
          <div className="flex flex-col">
            <p className=" text-lg text-green-900">My Stuff</p>
            <p className="  text-xs text-green-800">2+ Address Saved</p>
          </div>
        </div>
        <button className='bg-red-200 lg:w-72 w-56 h-10  my-2 rounded-[100px] mx-2'>Log Out</button>
      
            </div>
  )
}

export default Index