import Image from 'next/image'
import React from 'react'
import avatar from '../../../../../public/avatar.png'

const Index = ({item}) => {
    return (
        <div className='first__row__item__container'>
            <div className='first__row__item w-80 md:w-[450px] my-8 bg-[#fefcfb] rounded-3xl relative shadow-sm'>
                <span className="w-12 md:w-16 bg-[#fefcfb] object-cover rounded-full absolute border-[#FFFFFFD6] border-8 -top-6 left-9 ">
                    <Image alt="team" height={100} width={100} src={item?.image ? item?.image : avatar} className=" rounded-full drop-shadow-lg" />
                </span>
                <div className='p-3 md:p-6'>
                    <div className='pt-3 md:pt-5 w-full'>
                        <p className='text-gray-900 text-lg md:text-2xl font-semibold'>{item?.name}</p>
                        <p className='stars text-xs'>
                        {
                            // [...Array(+(item?.rating)/2).keys()].map((item, idx) => <span key={idx}>⭐</span>)
                        }
                        </p>
                        <p className='text-gray-400 text-sm break-words'>{item?.comment}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index