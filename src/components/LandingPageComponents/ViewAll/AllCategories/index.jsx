import React from 'react'
import CategoryCard from '../../ShopByCategory/CategoryCard/index'

const Index = () => {

  // fetch data from api and remove the hard coded data
  let data = [
    "Car Batteries",
    "Bike Batteries",
    "Bike Batteries",
    "Bike Batteries",
    "Bike Batteries",
    "Bike Batteries",
    "Heavy Engine Batteries",
    "Inverter Batteries",
    "Roller Batteries",
    "Tractor Batteries",
  ];

  return (
    <div className='all__categories my-8'>
      <div className='all__categories__container max-w-7xl mx-auto px-[3vw]'>
        <div className="flex justify-between">
          <p className="text-gray-900 text-xl sm:text-2xl font-bold">All Category</p>
        </div>
        <div className="flex flex-wrap">
          {data.map((post, index) => {
            return <CategoryCard key={index} items={post} />;
          })}
        </div>
      </div>
    </div>
  )
}

export default Index