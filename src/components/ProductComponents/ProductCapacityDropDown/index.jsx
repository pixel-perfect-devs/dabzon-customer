import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid'
import capacity from "../../../../public/productdetailsview/capacity.png";
import Image from 'next/image';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Index({ capacityValue, setCapacityValue, data }) {
    return (
        <Menu as="div" className="capacity__drop__down relative border border-green-600 hover:text-green-600 focus:text-green-600 px-4 py-2 rounded-xl flex items-center gap-3 text-green-600 ">
            <Menu.Button className="flex items-center gap-2">
                <Image className="" loading="lazy" src={capacity} alt="Image is loading..." width={30} height={30} />
                <div className="flex flex-col text-sm">
                    <p className="">capacity</p>
                    <p className="">{capacityValue}</p>
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
                            data.map((item, index) => <Menu.Item key={index} onClick={() => setCapacityValue(prev => prev=item)}>
                                {({ active }) => (
                                    <p className={classNames(
                                        active ? 'cursor-pointer text-green-500' : 'text-gray-800',
                                        'block px-4 py-2 text-base'
                                    )}
                                    >
                                        {item}
                                    </p>
                                )}
                            </Menu.Item>
                            )
                        }
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
