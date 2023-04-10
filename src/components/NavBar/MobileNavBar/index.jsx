import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

const MobileNavBar = () => {

    const router = useRouter();
    const { pathname } = router;
    const { cart } = useSelector(state => state.cart);

    const [active, setActive] = useState({ home: false, search: false, profile: false, cart: false, });

    const activeLink = (pathname) => {
        switch (pathname) {
            case '/':
                setActive({ home: true, search: false, profile: false, cart: false, });
                break;
            case '/user/search':
                setActive({ home: false, search: true, profile: false, cart: false, });
                break;
            case '/user/profile':
                setActive({ home: false, search: false, profile: true, cart: false, });
                break;
            case '/user/cart':
                setActive({ home: false, search: false, profile: false, cart: true, });
                break;
            default:
                setActive({ search: false, profile: false, cart: false, home: false });
        }
    }

    useEffect(() => {
        activeLink(pathname);
        // console.log(pathname)
    }, [])

    return (
        <div className='sm:hidden'>
            <section id="bottom-navigation" className="fixed inset-x-0 bottom-0 z-10 bg-white shadow">
                <div id="tabs" className="flex justify-between items-center ">
                    <Link id="homepagelink" href="/" className={`group w-full focus:text-[#10b981] hover:text-[#10b981] justify-center inline-block text-center pt-2 pb-1 my-3 hover:my-0 focus-within:my-0 outline-0 ${active.home && 'text-[#10b981]'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-house-door inline-block mb-1" viewBox="0 0 16 16">
                            <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z" />
                        </svg>
                        <span className={`${active.home ? 'block' : 'hidden'} text-xs`}>Home</span>
                        <div className={`block w-full bg-[#10b981] rounded-t-3xl ${active.home ? 'h-2' : 'h-0'} transition-all duration-300`}></div>
                    </Link>
                    <Link href="/user/search" className={`group w-full focus:text-[#10b981] hover:text-[#10b981] justify-center inline-block text-center pt-2 pb-1 my-3 hover:my-0 focus-within:my-0 outline-0 ${active.search && 'text-[#10b981]'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-search inline-block mb-1" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                        <span className={`${active.search ? 'block' : 'hidden'} text-xs`}>Search</span>
                        <div className={`block w-full bg-[#10b981] rounded-t-3xl ${active.search ? 'h-2' : 'h-0'} transition-all duration-300`}></div>
                    </Link>
                    <Link href="/user/cart" className={`group w-full focus:text-[#10b981] hover:text-[#10b981] justify-center inline-block text-center pt-2 pb-1 my-3 hover:my-0 focus-within:my-0 outline-0 ${active.cart && 'text-[#10b981]'}`}>
                        <span className="cart__icon relative">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart3 inline-block mb-1" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg>
                            <span className={`absolute -top-2 -right-2 bg-green-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs ${cart.length < 1 && 'hidden'} `}>{cart.length}</span>
                        </span>
                        <span className={`${active.cart ? 'block' : 'hidden'} text-xs`}>Cart</span>
                        <div className={`block w-full bg-[#10b981] rounded-t-3xl ${active.cart ? 'h-2' : 'h-0'} transition-all duration-300`}></div>
                    </Link>
                    <Link href="/user/profile" className={`group w-full focus:text-[#10b981] hover:text-[#10b981] justify-center inline-block text-center pt-2 pb-1 my-3 hover:my-0 focus-within:my-0 outline-0 ${active.profile && 'text-[#10b981]'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person inline-block mb-1" viewBox="0 0 16 16">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                        </svg>
                        <span className={`${active.profile ? 'block' : 'hidden'} text-xs`}>Profile</span>
                        <div className={`block w-full bg-[#10b981] rounded-t-3xl ${active.profile ? 'h-2' : 'h-0'} transition-all duration-300`}></div>
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default MobileNavBar