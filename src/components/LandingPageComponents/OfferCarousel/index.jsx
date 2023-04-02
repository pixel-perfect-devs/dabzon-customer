import React from "react";
import Image from "next/image";
import offerCarousel_image from "../../../../public/offerCarousel_image.png";

const Index = () => {
  return (
    <div className=" my-20 ">
      {/* to be done */}
      <div className="flex w">
        <div className="">
          <Image loading="lazy" src={offerCarousel_image} alt="Image is loading..." width={800} height={800} />
        </div>
        <div className="">
          <Image loading="lazy" src={offerCarousel_image} alt="Image is loading..." width={800} height={800} />
        </div>
        <div className="">
          <Image loading="lazy" src={offerCarousel_image} alt="Image is loading..." width={800} height={800} />
        </div>
        <div className="">
          <Image loading="lazy" src={offerCarousel_image} alt="Image is loading..." width={800} height={800} />
        </div>
      </div>
    </div>
  );
};

export default Index;
