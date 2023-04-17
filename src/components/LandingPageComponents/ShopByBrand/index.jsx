import React, { useEffect, useState } from "react";
import Link from "next/link";
import BrandCard from "../ShopByBrand/BrandCard/index";

const Index = () => {

  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetch('/api/landingpage/brands')
      .then((res) => res.json())
      .then((res) => {
        setBrands(res.allData);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(brands);

  return (
    <div className="shopbybrand my-8 ">
      <div className="max-w-7xl mx-auto px-[3vw]">
        <div className="flex justify-between ">
          <p className="text-gray-900 text-xl sm:text-2xl font-bold">Shop by Brand</p>
          <Link href='/all/allBrands' className="text-dabgreen font-medium text-sm">view all</Link>
        </div>
        <div className=" customScroll flex overflow-x-scroll">

          {
            brands.map((brand, index) => <BrandCard key={index} brand={brand} />)
          }

        </div>
      </div>
    </div>
  );
};

export default Index;
