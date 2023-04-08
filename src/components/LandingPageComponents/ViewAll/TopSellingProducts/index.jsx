import React from 'react'
import { useEffect } from 'react'
import TopSellingBatteriesCard from '../../TopSellingBatteries/TopSellingBatteriesCard/index'

const Index = () => {

  const [topSellingProducts, setTopSellingProducts] = React.useState([]);

  useEffect(() => {
    fetch('/api/alltopsellingproducts')
      .then((response) => response.json())
      .then((data) => setTopSellingProducts(data.data.data));
  }, []);

  return (
    <div className='topsellingbatteries my-8'>
      <div className="topsellingbatteries__container max-w-7xl mx-auto px-[3vw]">
        <div className="flex justify-between ">
          <p className="text-gray-900 text-xl sm:text-2xl font-bold">All Best Selling Products</p>
        </div>
        <div className='flex flex-wrap justify-center gap-6 my-4'>
          {
            topSellingProducts
              ? topSellingProducts.map((item, idx) => <TopSellingBatteriesCard key={idx} item={item} />)
              : <p className="text-gray-500 text-sm">No products found</p>
          }
        </div>
      </div>
    </div>
  )
}

export default Index