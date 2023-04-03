import Link from "next/link";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard/index";
const Index = ({ data }) => {
  const [showdata, setShowData] = useState([]);
  useEffect(() => {
    setShowData(data)
  }, [data]);
    return (
      <div className="bg-gray-100 my-8 ">
        <div className="shopbycategory__container max-w-7xl mx-auto px-[3vw]">
          <div className="flex justify-between">
            <p className="text-gray-900 text-xl sm:text-2xl font-bold">Shop by Category</p>
            <Link href='/all/allCategories' className="text-green-500 font-medium text-sm">view all</Link>
          </div>
          <div className="flex overflow-x-scroll">
            {showdata.map((post, index) => {
              return <CategoryCard key={index} items={post} />;
            })}
          </div>
        </div>
      </div>
    );
  
};

export default Index;
