import Link from 'next/link'
import React, { useEffect } from 'react'
import TopSellingBatteriesCard from './TopSellingBatteriesCard/index'

const Index = ({title}) => {

  const [topSellingProducts, setTopSellingProducts] = React.useState([]);
  
  const fetchTopSellingProducts = async () => {
    // const res = await fetch('http://localhost:1337/api/all-products?filters[TopSellingProduct][$eq]=true?pagination[pageSize]=8');
    // const data = await res.json();
    // console.log(data)
    // if(data.data) setTopSellingProducts(data.data);
  }

  useEffect(() => {
    fetchTopSellingProducts();
  }, [])
  
  return (
    <div className='topsellingbatteries my-8'>
      <div className="topsellingbatteries__container max-w-7xl mx-auto px-[3vw]">
        <div className="flex justify-between ">
          <p className="text-gray-900 text-xl sm:text-2xl font-bold">{title}</p>
          <Link href='/all/topSellingProducts' className="text-green-500 font-medium text-sm">view all</Link>
        </div>
        <div className='flex flex-wrap justify-center gap-6 my-4'>
          {
            [0,0,0,0].length > 0 ? 
            [0,0,0,0].map((item, idx) => <TopSellingBatteriesCard key={idx} item={item.attributes} />)
            :
            <p className="text-gray-500 text-sm">No products found</p>
          }
        </div>
      </div>
    </div>
  )
}

export default Index