import React from "react";
import Image from "next/image";
import FAQ from "../../../../public/FAQ_image.png";

const Index = () => {

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
                Will the sessions be live?
              </p>
              <p className="text-gray-700 text-base">
                Yes - All Sessions are live.{" "}
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
                Is it actually worth Rs.2000?
              </p>
              <p className="text-gray-700 text-base">
                Contrary to popular belief, Lorem Ipsum is not simply random text.
                It has roots in a piece of classical Latin literature from 45 BC,
                making it over 2000 years old. Richard McClintock, a Latin
                professor at Hampden-Sydney College in Virginia, looked up one of
                the more obscure Latin words, consectetur,{" "}
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
                What is the time and duration of session?
              </p>
              <p className="text-gray-700 text-base">
                00 years old. Richard McClintock, a Latin professor at
                Hampden-Sydney College in Virginia, looked up one of the more
                obscure Latin words, consectetur,{" "}
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
                Will there be open Q&A sessions where we can ask questions to
                Mentors?
              </p>
              <p className="text-gray-700 text-base">
                Contrary to popular belief, Lorem Ipsum is not simply random text.{" "}
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
                Who is eligible for this Mentorship Program?
              </p>
              <p className="text-gray-700 text-base">
                Contrary to popular belief, Lorem Ipsum is not simply random text.
                It has roots in a piece of classical Latin literature{" "}
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
                What if I am not happy after attending the program?
              </p>
              <p className="text-gray-700 text-base">
                years old. Richard McClintock, a Latin professor at Hampden-Sydney
                College in Virginia, looked up one of the more obscure Latin
                words, consectetur{" "}
              </p>
            </div>
          </div>
        </div>




      </div>
    </div>
  );
};

export default Index;
