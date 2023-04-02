import Link from "next/link";
import React from "react";
import CategoryCard from "./CategoryCard/index";
const Index = () => {

  let data = [
    "Car Batteries",
    "Bike Batteries",
    "Heavy Engine Batteries",
    "Inverter Batteries",
    "Roller Batteries",
    "Tractor Batteries",
  ];

  return (
    <div className="bg-gray-100 my-8 ">
      <div className="shopbycategory__container max-w-7xl mx-auto px-[3vw]">
        <div className="flex justify-between">
          <p className="text-gray-900 text-xl sm:text-2xl font-bold">Shop by Category</p>
          <Link href='/all/allCategories' className="text-green-500 font-medium text-sm">view all</Link>
        </div>
        <div className="flex overflow-x-scroll">
          {data.map((post, index) => {
            return <CategoryCard key={index} items={post} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Index;
