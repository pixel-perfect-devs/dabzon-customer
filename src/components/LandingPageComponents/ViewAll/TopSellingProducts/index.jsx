import React from 'react'
import TopSellingBatteriesCard from '../../TopSellingBatteries/TopSellingBatteriesCard/index'

const Index = () => {
  return (
    <div className='topsellingbatteries my-8'>
      <div className="topsellingbatteries__container max-w-7xl mx-auto px-[3vw]">
        <div className="flex justify-between ">
          <p className="text-gray-900 text-xl sm:text-2xl font-bold">All Best Selling Products</p>
        </div>
        <div className='flex flex-wrap justify-center gap-6 my-4'>
          { [0, 0, 0, 0, 0, 0, 0, 0].map((it, idx) => <TopSellingBatteriesCard key={idx} id={idx} />) }
        </div>
      </div>
    </div>
  )
}

export default Index