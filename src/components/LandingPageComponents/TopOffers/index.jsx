import React from "react";
import Image from "next/image";
const Index = () => {

  const [topoffers, setTopOffers] = React.useState([]);
  React.useEffect(() => {
    fetch('/api/landingpage/topoffers')
    .then((res) => res.json())
    .then((res) => setTopOffers(res.allData))
  },[])

  return (
    <div className="my-8 ">
      <div className="topoffers__container max-w-7xl mx-auto px-[3vw]">
        <p className=" text-left text-gray-900 text-xl sm:text-2xl font-bold">Top Offers</p>

        <div className="flex flex-wrap my-8 justify-center gap-y-4">
          <Image className="mx-2 w-64 md:w-[340px] md:h-[180px]" loading="lazy" src={topoffers[0]?.image1} width={1000} height={1000} alt="Image is loading..." />

          <Image className="mx-2 w-64 md:w-[340px] md:h-[180px]" loading="lazy" src={topoffers[0]?.image2} width={1000} height={1000} alt="Image is loading..." />

          <Image className="mx-2 w-64 md:w-[340px] md:h-[180px]" loading="lazy" src={topoffers[0]?.image3} width={1000} height={1000} alt="Image is loading..." />
        </div>

      </div>
    </div>
  );
};

export default Index;
