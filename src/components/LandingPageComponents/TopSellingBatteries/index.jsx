import Link from 'next/link'
import React from 'react'
import TopSellingBatteriesCard from './TopSellingBatteriesCard/index'

const Index = ({title, topSellingProducts}) => {
  
  return (
    <div className='topsellingbatteries my-8'>
      <div className="topsellingbatteries__container max-w-7xl mx-auto px-[3vw]">
        <div className="flex justify-between ">
          <p className="text-gray-900 text-xl sm:text-2xl font-bold">{title}</p>
          <Link href='/all/topSellingProducts' className="text-dabgreen font-medium text-sm">view all</Link>
        </div>
        <div className='flex flex-wrap justify-center gap-6 my-4'>
          {
            topSellingProducts.length > 0 ? 
            topSellingProducts.map((item, idx) => <TopSellingBatteriesCard key={idx} item={item} />)
            :
            <p className="text-gray-500 text-sm">Loading...</p>
          }
        </div>
      </div>
    </div>
  )
}

export default Index