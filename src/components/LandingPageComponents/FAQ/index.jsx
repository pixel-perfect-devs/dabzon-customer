import React, { useState, useEffect } from "react";
import Image from "next/image";
import FAQ from "../../../../public/FAQ_image.png";

const Index = () => {
  const [faqData, setFaqData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/landingpage/faq/get');
        const data = await response.json();
        // console.log(data.allData[0]?.ques);
        setFaqData(data.allData);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
        // console.log(faqData[0]);
      }
    }

    fetchData();
  }, []);


  return (
    <div className="faq__section my-8">
      <div className="faq__section__heading">
        <p className="text-dabgreen font-semibold text-2xl sm:text-3xl text-center my-3">Frequently asked questions 🤔 </p>
        <p className="text-dabgreen text-xl sm:text-lg text-center ">Get Answers to Your Most Pressing FAQs</p>
      </div>

      <div className="flex justify-center md:justify-evenly flex-wrap m-4">

        {/* ..........................left portion start .....................*/}

        <div className="flex flex-col md:w-1/3">
          <div className="flex my-5">
            <Image
              className="mx-2 h-10"
              loading="lazy"
              src={FAQ}
              width={40}
              height={40}
              alt="Image is loading..."
            />
            <div className="flex flex-col">
              <p className="text-gray-900 text-xl font-bold">
                {faqData[0]?.ques}
              </p>
              <p className="text-gray-700 text-base">
                {faqData[0]?.ans}
              </p>
            </div>
          </div>

          <div className="flex my-5">
            <Image
              className="mx-2 h-10"
              loading="lazy"
              src={FAQ}
              width={40}
              height={40}
              alt="Image is loading..."
            />
            <div className="flex flex-col">
              <p className="text-gray-900 text-xl font-bold">
                {faqData[1]?.ques}
              </p>
              <p className="text-gray-700 text-base">
                {faqData[1]?.ans}
              </p>
            </div>
          </div>

          <div className="flex  my-5">
            <Image
              className="mx-2 h-10"
              loading="lazy"
              src={FAQ}
              width={40}
              height={40}
              alt="Image is loading..."
            />
            <div className="flex flex-col">
              <p className="text-gray-900 text-xl font-bold">
                {faqData[2]?.ques}
              </p>
              <p className="text-gray-700 text-base">
                {faqData[2]?.ans}
              </p>
            </div>
          </div>
        </div>

        {/* ........................left portion end.....................*/}

        <div className="flex flex-col md:w-1/3 ">
          <div className="flex my-5">
            <Image
              className="mx-2 h-10"
              loading="lazy"
              src={FAQ}
              width={40}
              height={40}
              alt="Image is loading..."
            />
            <div className="flex flex-col">
              <p className="text-gray-900 text-xl font-bold">
                {faqData[3]?.ques}
              </p>
              <p className="text-gray-700 text-base">
                {faqData[3]?.ans}
              </p>
            </div>
          </div>

          <div className="flex my-5">
            <Image
              className="mx-2 h-10"
              loading="lazy"
              src={FAQ}
              width={40}
              height={40}
              alt="Image is loading..."
            />
            <div className="flex flex-col">
              <p className="text-gray-900 text-xl font-bold">
                {faqData[4]?.ques}
              </p>
              <p className="text-gray-700 text-base">
                {faqData[4]?.ans}
              </p>
            </div>
          </div>

          <div className="flex my-5">
            <Image
              className="mx-2 h-10"
              loading="lazy"
              src={FAQ}
              width={40}
              height={40}
              alt="Image is loading..."
            />
            <div className="flex flex-col">
              <p className="text-gray-900 text-xl font-bold">
                {faqData[5]?.ques}
              </p>
              <p className="text-gray-700 text-base">
                {faqData[5]?.ans}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
