import { Fragment, useEffect, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid'
import capacity from "../../../../public/productdetailsview/capacity.png";
import Image from 'next/image';
import { useRouter } from 'next/router';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Index({ productState, capacityArray }) {

    const router = useRouter();
    console.log("capacityArray ", capacityArray)
    return (
        <Menu as="div" className="capacity__drop__down relative border border-green-600 hover:text-green-600 focus:text-green-600 px-4 py-2 rounded-xl flex items-center gap-3 text-green-600 ">
            <Menu.Button className="flex items-center gap-2">
                <Image className="" loading="lazy" src={capacity} alt="Image is loading..." width={30} height={30} />
                <div className="flex flex-col text-sm">
                    <p className="">capacity</p>
                    <p className="">{productState.productCapacity}</p>
                </div>
                <ChevronDownIcon className="-mr-1 h-5 w-5" aria-hidden="true" />
            </Menu.Button>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-300"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute top-16 left-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        {
                            capacityArray.length !==0 
                            ? capacityArray.map((item, index) => <Menu.Item key={index} onClick={() => router.push(`/product/${item.productId}`) }>
                                {({ active }) => (
                                    <p className={classNames(
                                        active ? 'cursor-pointer text-dabgreen' : 'text-gray-800',
                                        'block px-4 py-2 text-base'
                                    )}
                                    >
                                        {item.capacity}
                                    </p>
                                )}
                            </Menu.Item>
                            )
                            : null
                        }
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
