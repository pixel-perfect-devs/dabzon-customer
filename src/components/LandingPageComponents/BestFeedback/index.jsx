import React from 'react'
import ReviewCard from './ReviewCard'

const Index = () => {
  return (
    <div className="bestfeedback my-8">
      <div className="flex justify-start max-w-7xl mx-auto px-[3vw] ">
        <p className="text-gray-900 text-xl sm:text-2xl font-bold">Loved 💖 our customers</p>
      </div>
      {/* first row of carousel */}
      <div className="relative flex overflow-x-hidden">
        <div className=" first__row__carousel animate-marquee flex items-center gap-4 ">
          {[1, 2, 3, 4].map((item, index) => <ReviewCard key={index} />)}
        </div>

        <div className="absolute top-0 px-2 animate-marquee2 flex items-center gap-4 ">
          {[1, 2, 3, 4].map((item, index) => <ReviewCard key={index} />)}
        </div>
      </div>
      {/* second row of carousel */}
      <div className="relative flex overflow-x-hidden">
        <div className=" first__row__carousel animate-marquee flex items-center gap-4 ">
          {[1, 2, 3, 4].map((item, index) => <ReviewCard key={index} />)}
        </div>

        <div className="absolute top-0  px-2 animate-marquee2 flex items-center gap-4 ">
          {[1, 2, 3, 4].map((item, index) => <ReviewCard key={index} />)}
        </div>
      </div>
    </div>
  )
}

export default Index