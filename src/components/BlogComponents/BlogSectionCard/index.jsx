import Image from 'next/image'
import React from 'react'
import date from "../../../../public/icons/date.svg"
import account_circle from "../../../../public/icons/account_circle.svg"

const Index = ({item, redirectToBlogDetailPage}) => {

    return (
        <div className="blogSectionCard rounded-md overflow-hidden shadow-sm cursor-pointer" onClick={() => redirectToBlogDetailPage(item.id)} >
            <div className='blogSectionCard__image__container w-full'>
                <Image width={1000} height={1000} className="w-full" src={item.imgUrl} alt="img" />
            </div>
            <div className='blogSectionCard__buttons '>
                <span type="button" className="inline-block rounded-full bg-[#6366f1] sm:ml-4 px-6 mr-4 mt-4 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white ">
                    Trending
                </span>
                <span
                    type="button"
                    className="inline-block mr-4 mt-4 rounded-full bg-dabgreen px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white ">
                    {item.type}
                </span>
            </div>
            <div className="blogSectionCard__text px-6 py-4">
                <div className="font-bold text-base md:text-xl mb-2 truncate">{item.title}</div>
                <p className="text-gray-700 text-xs md:text-sm">
                    {item.content}
                </p>
            </div>
            <div className="blogSectionCard__date__author px-6 pt-4 pb-2 flex gap-3">
                <div className=" bg-black rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 flex gap-2 items-center">
                    <span className="icon">
                        <Image src={date} alt="data" width={16} height={16} />
                    </span>
                    <span className="text">{item.date}</span>
                </div>
                <span className=" bg-black rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 flex gap-2 items-center">
                    <span className="icon">
                        <Image src={account_circle} alt="data" width={16} height={16} />
                    </span>
                    <span className="text">{item.author}</span>

                </span>
            </div>
        </div>
    )
}

export default Index