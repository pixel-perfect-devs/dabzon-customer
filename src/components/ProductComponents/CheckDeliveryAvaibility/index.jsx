import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Index({ deliveryAvailabilityCity, setDeliveryAvailabilityCity, data, defaultDeliveryCity }) {
    return (
        <Menu as="div" className="delivery__city__drop__down relative ">
            <Menu.Button className="flex items-center justify-between w-full px-6 border border-gray-600 hover:text-gray-600 focus:text-gray-600 py-2 rounded-full gap-3 text-gray-600 ">
                <ChevronDownIcon className="-mr-1 h-5 w-5" aria-hidden="true" />
                <p>{deliveryAvailabilityCity ? deliveryAvailabilityCity : defaultDeliveryCity}</p>
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
                <Menu.Items className="absolute top-12 left-0 z-10 mt-2 w-52 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        {
                            data.map((item, index) => <Menu.Item key={index} onClick={() => setDeliveryAvailabilityCity(prev => prev=item)}>
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
