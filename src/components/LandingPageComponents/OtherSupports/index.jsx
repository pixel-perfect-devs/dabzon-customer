import React from "react";
import Image from "next/image";
import shipping from "../../../../public/otherSupports/shipping.png";
import best_price from "../../../../public/otherSupports/best_price.png";
import installation from "../../../../public/otherSupports/installation.png";
import credit_card from "../../../../public/otherSupports/credit_card.png";

const Index = () => {
  return (
    <div className="overflow-x-scroll my-8">
      <div className="flex justify-between my-4 max-w-7xl items-center mx-auto">
        <div>
          <div className="box-border mx-[1.6rem] border-gray-200 bg-gray-50  border h-16 w-60 flex items-center rounded-xl">
            <Image
              className="mx-4 "
              loading="lazy"
              src={shipping}
              alt="Image is loading..."
              width={30}
              height={30}
            />
            <div className="flex flex-col">
              <p className=" text-sm text-gray-700">FREE</p>
              <p className="  text-xs text-gray-700">shipping</p>
            </div>
          </div>
        </div>

        <div>
          <div className="box-border mx-[1.6rem] border-gray-200 bg-gray-50  border  h-16 w-60 flex items-center   rounded-xl">
            <Image
              className="mx-4 "
              loading="lazy"
              src={best_price}
              alt="Image is loading..."
              width={30}
              height={30}
            />
            <div className="flex flex-col">
              <p className=" text-sm text-gray-700">PRIZE</p>
              <p className="  text-xs text-gray-700">best prize always</p>
            </div>
          </div>
        </div>

        <div>
          <div className="box-border mx-[1.6rem] border-gray-200 bg-gray-50  border  h-16 w-60 flex items-center   rounded-xl">
            <Image
              className="mx-4"
              loading="lazy"
              src={installation}
              alt="Image is loading..."
              width={30}
              height={30}
            />
            <div className="flex flex-col">
              <p className=" text-sm text-gray-700">FREE</p>
              <p className="  text-xs text-gray-700">installation</p>
            </div>
          </div>
        </div>

        <div>
          <div className="box-border mx-[1.6rem] border-gray-200 bg-gray-50  border  h-16 w-60 flex items-center   rounded-xl">
            <Image
              className="mx-4 "
              loading="lazy"
              src={credit_card}
              alt="Image is loading..."
              width={30}
              height={30}
            />
            <div className="flex flex-col">
              <p className=" text-sm text-gray-700">CREDIT CARD</p>
              <p className="  text-xs text-gray-700">support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
