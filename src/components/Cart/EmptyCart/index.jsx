import Image from 'next/image'
import React from 'react'
import emptyCartBg from '../../../../public/empty_cart_bg.svg'

const Index = () => {
  return (
    <div className='EmptyCart'>
      <Image className='w-1/2 md:w-1/3 mx-auto my-12' src={emptyCartBg} width={100} height={100} alt='emptyCartBg' />
    </div>
  )
}

export default Index