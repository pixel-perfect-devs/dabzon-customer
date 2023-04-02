import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import MobileNavBar from './MobileNavBar/index';
import avatar from '../../../public/avatar.png'

function NavBar() {

    const router = useRouter();
    const [navbar, setNavbar] = useState(false);
    const [login, setLogin] = useState(1);

    return (
        <div className='Navbar relative inline-block w-full bg-[#10b981] md:bg-white'>
            <nav className="backdrop-blur-md z-10 py-0 flex justify-between gap-3 max-w-7xl  items-center my-6 mx-auto px-[3vw] flex-wrap">
                <Link href='/' className="logo inline-block bg-[#10b981] text-white px-7 pt-3 pb-2.5 font-normal rounded-full">logo</Link>
                <div className="search__container md:flex flex-row gap-3 bg-[#f3f4f6] rounded-3xl px-8 py-2 hidden">
                    <svg className='sm:w-5' xmlns="http://www.w3.org/2000/svg" fill="gray" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>

                    <input className='border-0 outline-0 bg-transparent' type="search" name="search" id="search" placeholder='Search...' />
                </div>
                <div className="navlinks md:flex gap-4 hidden">
                    <Link href='/'>Home</Link>
                    <Link href='/all/allCategories'>Category</Link>
                    <Link href='/all/allBrands'>Brand</Link>
                    <Link href='/utility/about'>About Us</Link>
                    <Link href='/utility/contact'>Contact Us</Link>
                </div>
                <div className="account__and__carts md:flex space-x-4 hidden">
                    {
                        !login ?
                            <>
                                <Link href='/auth/login' className="login border border-green-500 text-green-500 font-semibold hover:bg-green-500 hover:text-white focus:bg-green-500 focus:text-white px-6 py-2 rounded-full">Log In</Link>
                                <Link href='/auth/signup' className="signup border border-green-500 text-green-500 font-semibold hover:bg-green-500 hover:text-white focus:bg-green-500 focus:text-white px-6 py-2 rounded-full">Sign Up</Link>
                            </>
                            :
                            <button onClick={() => router.push('/user/profile')} className="logout border border-green-500 text-green-500 font-semibold hover:bg-green-500 hover:text-white focus:bg-green-500 focus:text-white rounded-full">
                                <Image className='w-10 rounded-full' src={avatar} alt="avatar" width={1000} height={1000} />
                            </button>
                    }
                    <Link href='/user/cart' className="cart__icon my-auto ">
                        <svg className='sm:w-5' xmlns="http://www.w3.org/2000/svg" fill="#10b981" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                        </svg>
                    </Link>
                </div>

                <button onClick={() => setNavbar(!navbar)} className="hamburger flex md:hidden mx-6">
                    <svg className='w-8' xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg>
                </button>
            </nav>
            <div className={`navlinks text-center text-white ${navbar ? 'flex' : 'hidden'} flex-col gap-4 md:hidden my-8`}>
                <Link href='/'>Home</Link>
                <Link href='/all/allCategories'>Category</Link>
                <Link href='/all/allBrands'>Brand</Link>
                <Link href='/utility/about'>About Us</Link>
                <Link href='/utility/contact'>Contact Us</Link>
            </div>
            <MobileNavBar />
        </div>
    );
}

export default NavBar;
