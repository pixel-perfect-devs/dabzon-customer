import React from "react";
import top_offers from "../../../../public/top_offers.png";
import Image from "next/image";
const Index = () => {
  return (
    <div className="my-8 ">
      <div className="topoffers__container max-w-7xl mx-auto px-[3vw]">
        <p className=" text-left text-gray-900 text-xl sm:text-2xl font-bold">Top Offers</p>

        <div className="flex flex-wrap my-8 justify-center gap-y-4">
          <Image className="mx-2 w-64 md:w-[340px]" loading="lazy" src={top_offers} width={1000} height={1000} alt="Image is loading..." />

          <Image className="mx-2 w-64 md:w-[340px]" loading="lazy" src={top_offers} width={1000} height={1000} alt="Image is loading..." />

          <Image className="mx-2 w-64 md:w-[340px]" loading="lazy" src={top_offers} width={1000} height={1000} alt="Image is loading..." />
        </div>

      </div>
    </div>
  );
};

export default Index;
