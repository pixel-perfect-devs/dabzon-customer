import Image from 'next/image'
import React from 'react'

const Index = ({item, redirectToBlogDetailPage}) => {

    return (
        <div className="blogSectionCard rounded-md overflow-hidden shadow-lg cursor-pointer" onClick={() => redirectToBlogDetailPage(item.id)} >
            <div className='blogSectionCard__image__container w-full'>
                <Image width={1000} height={1000} className="w-full" src={item.imgUrl} alt="img" />
            </div>
            <div className='blogSectionCard__buttons '>
                <div type="button" className="inline-block rounded-full bg-[#10b981] sm:ml-4 px-6 mr-4 mt-4 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)]">
                    Trending
                </div>
                <button
                    type="button"
                    className="inline-block mr-4 mt-4 rounded-full bg-blue-500 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)]">
                    {item.type}
                </button>
            </div>
            <div className="blogSectionCard__text px-6 py-4">
                <div className="font-bold text-base md:text-xl mb-2 truncate">{item.title}</div>
                <p className="text-gray-700 text-xs md:text-sm">
                    {item.content}
                </p>
            </div>
            <div className="blogSectionCard__date__author px-6 pt-4 pb-2">
                <span className="inline-block bg-black rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">{item.date}</span>
                <span className="inline-block bg-black rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">@{item.author}</span>
            </div>
        </div>
    )
}

export default Index