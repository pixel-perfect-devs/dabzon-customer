import React from "react";
import Link from "next/link";
import BrandCard from "../ShopByBrand/BrandCard/index";


const Index = () => {

  let data = [
    'AMARON',
    'BOCH',
    'EXCIDE',
    'LIVEFAST',
    'MDS',
    'AC_DELCO',
  ]

  return (
    <div className="shopbybrand my-8 ">
      <div className="max-w-7xl mx-auto px-[3vw]">
        <div className="flex justify-between ">
          <p className="text-gray-900 text-xl sm:text-2xl font-bold">Shop by Brand</p>
          <Link href='/all/allBrands' className="text-green-500 font-medium text-sm">view all</Link>
        </div>
        <div className=" customScroll flex overflow-x-scroll">

          {
            data.map((brand, index) => <BrandCard key={index} brand={brand} />)
          }

        </div>
      </div>
    </div>
  );
};

export default Index;
