import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import MobileNavBar from './MobileNavBar/index';
import avatar from '../../../public/avatar.png'
import logo from '../../../public/icons/logo.svg'
import recent from '../../../public/icons/recent.svg'
import recent__close from '../../../public/icons/recent__close.svg'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function NavBar() {
    // idk what to do with this
    const [login, setLogin] = useState(1);

    const router = useRouter();
    const [navbar, setNavbar] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const { cart } = useSelector(state => state.cart);
    const [recentSearches, setRecentSearches] = useState([]);

    useEffect(() => {
        if (localStorage.getItem('recentSearches')) setRecentSearches(JSON.parse(localStorage.getItem('recentSearches')));
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!searchQuery) return;
        // save recent searches to local storage
        if(recentSearches.includes(searchQuery)) return;
        setRecentSearches(prev => prev = [...prev, searchQuery]);
        localStorage.setItem('recentSearches', JSON.stringify([...recentSearches, searchQuery]));

        // todo search the query in the database and show the results then redirect to the search page when the user clicks on the search results
        
        console.log(searchQuery);
    }

    const handleDeleteRecentSearch = (e, idx) => {
        e.preventDefault();
        const recentSearch = recentSearches.filter((it, index) => index !== idx);
        setRecentSearches(recentSearch);
        localStorage.setItem('recentSearches', JSON.stringify(recentSearch));
    }

    return (
        <div className='Navbar sticky top-0 z-10 inline-block w-full bg-dabgreen md:bg-white'>
            <nav className="backdrop-blur-md z-10 py-0 flex justify-between gap-3 max-w-7xl  items-center my-4 mx-auto px-[3vw] flex-wrap">
                <Link href='/' className="logo inline-block bg-dabgreen text-white p-1 font-normal rounded-full">
                    <Image width={50} height={50} className="" src={logo} alt="logo" />
                </Link>
                <button className="group search__container md:flex flex-row gap-3 bg-[#f3f4f6] rounded-3xl px-4 py-2 hidden items-center relative">
                    <svg className='sm:w-5' xmlns="http://www.w3.org/2000/svg" fill="gray" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                    <input onKeyDown={(e) => e.key === 'Enter' ? handleSubmit(e) : null} onChange={(e) => setSearchQuery(e.target.value.toLowerCase())} className='border-0 outline-0 bg-transparent ' type="search" name="search" id="search" placeholder='Search...' />
                    <div className="recent_search_and__search__results bg-white rounded-md shadow-md absolute top-[70px] left-0 hidden group-focus-within:block w-full z-20" autoComplete="off">
                        {
                            searchQuery.length === 0
                                ? (recentSearches.length > 0
                                    ? <div className="recent__searches my-3 p-3 text-left">
                                        <p className="recent__search flex gap-2 items-center">
                                            <Image className="icon" src={recent} width={16} height={16} alt="react" />
                                            <span className="text-sm">Recent Searches</span>
                                        </p>
                                        <div className="recent__searches__list flex flex-wrap gap-2 mt-2">
                                            {
                                                recentSearches.map((it, idx) => <span key={idx} className="recent__search__item bg-[#f3f4f6] rounded-md px-2 py-1 text-sm flex gap-2 items-center">
                                                    <span className="text-sm">{it}</span>
                                                    <Image className="icon" onClick={(e) => handleDeleteRecentSearch(e, idx)} src={recent__close} width={16} height={16} alt="close" />
                                                </span>)
                                            }
                                        </div>
                                    </div>
                                    :
                                    null
                                )
                                :
                                <div className="search__results my-3 p-3 text-left">
                                    <p className="search__results__title text-sm">Search Results</p>
                                    <div className="search__results__list flex flex-col gap-2 mt-2">
                                        <Link href='/'>
                                            <p className="search__results__item bg-[#f3f4f6] rounded-md px-2 py-1 text-sm flex gap-2 items-center">
                                                <span className="text-sm">Samsung</span>
                                            </p>
                                        </Link>
                                        <Link href='/'>
                                            <p className="search__results__item bg-[#f3f4f6] rounded-md px-2 py-1 text-sm flex gap-2 items-center">
                                                <span className="text-sm">Samsung</span>
                                            </p>
                                        </Link>
                                    </div>
                                </div>
                        }

                    </div>
                </button>
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
                                <Link href='/auth/login' className="login border border-dabgreen text-dabgreen font-semibold hover:bg-dabgreen hover:text-white focus:bg-dabgreen focus:text-white px-6 py-2 rounded-full">Log In</Link>
                                <Link href='/auth/signup' className="signup border border-dabgreen text-dabgreen font-semibold hover:bg-dabgreen hover:text-white focus:bg-dabgreen focus:text-white px-6 py-2 rounded-full">Sign Up</Link>
                            </>
                            :
                            <button onClick={() => router.push('/user/profile')} className="logout border border-dabgreen text-dabgreen font-semibold hover:bg-dabgreen hover:text-white focus:bg-dabgreen focus:text-white rounded-full">
                                <Image className='w-10 rounded-full' src={avatar} alt="avatar" width={1000} height={1000} />
                            </button>
                    }
                    <Link href='/user/cart' className="cart__icon my-auto relative">
                        <svg className='sm:w-5' xmlns="http://www.w3.org/2000/svg" fill="#10b981" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                        </svg>
                        <span className={`absolute -top-2 -right-2 bg-dabgreen text-white rounded-full w-4 h-4 flex items-center justify-center text-xs ${cart.length < 1 && 'hidden'} `}>{cart.length}</span>
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
