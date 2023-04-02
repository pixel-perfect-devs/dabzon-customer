import Link from 'next/link'
import React from 'react'
import BlogSectionCard from './BlogSectionCard/index'
import blog1 from '../../../public/blog/blog1.jpg'
import { useRouter } from 'next/router'

const Index = ({ source, blogHeading }) => {

    const router = useRouter();

    let data = [];

    if (source === 'home') {
        data = [
            {
                id: 1,
                imgUrl: blog1,
                title: "title Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus veritatis velit sed vel reiciendis vero dolore culpa cum laboriosam! Cupiditate.",
                content: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, vitae et est nihil sunt incidunt totam placeat modi quisquam maxime fugiat corrupti, corporis quae ab dicta id ex rem accusamus doloribus ducimus odit nesciunt consequatur similique. Repellat dolores, magni soluta quo, ipsam nulla, obcaecati quae incidunt nobis aperiam doloret ipsa! Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias maiores magni sint reprehenderit ipsam inventore?",
                date: '31/1/2002',
                author: 'vishal dhangar',
                type: 'Battery'
            },
            {
                id: 2,
                imgUrl: blog1,
                title: "title",
                content: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, vitae et est nihil sunt incidunt totam placeat modi quisquam maxime fugiat corrupti, corporis quae ab dicta id ex rem accusamus doloribus ducimus odit nesciunt consequatur similique. Repellat dolores, magni soluta quo, ipsam nulla, obcaecati quae incidunt nobis aperiam doloret ipsa! Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias maiores magni sint reprehenderit ipsam inventore?",
                date: '31/1/2002',
                author: 'vishal dhangar',
                type: 'Invertor'
            },
        ]
    }else{
        data = [
            {
                id: 1,
                imgUrl: blog1,
                title: "title Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus veritatis velit sed vel reiciendis vero dolore culpa cum laboriosam! Cupiditate.",
                content: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, vitae et est nihil sunt incidunt totam placeat modi quisquam maxime fugiat corrupti, corporis quae ab dicta id ex rem accusamus doloribus ducimus odit nesciunt consequatur similique. Repellat dolores, magni soluta quo, ipsam nulla, obcaecati quae incidunt nobis aperiam doloret ipsa! Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias maiores magni sint reprehenderit ipsam inventore?",
                date: '31/1/2002',
                author: 'vishal dhangar',
                type: 'Battery'
            },
            {
                id: 2,
                imgUrl: blog1,
                title: "title",
                content: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, vitae et est nihil sunt incidunt totam placeat modi quisquam maxime fugiat corrupti, corporis quae ab dicta id ex rem accusamus doloribus ducimus odit nesciunt consequatur similique. Repellat dolores, magni soluta quo, ipsam nulla, obcaecati quae incidunt nobis aperiam doloret ipsa! Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias maiores magni sint reprehenderit ipsam inventore?",
                date: '31/1/2002',
                author: 'vishal dhangar',
                type: 'Invertor'
            },
            {
                id: 3,
                imgUrl: blog1,
                title: "title",
                content: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, vitae et est nihil sunt incidunt totam placeat modi quisquam maxime fugiat corrupti, corporis quae ab dicta id ex rem accusamus doloribus ducimus odit nesciunt consequatur similique. Repellat dolores, magni soluta quo, ipsam nulla, obcaecati quae incidunt nobis aperiam doloret ipsa! Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias maiores magni sint reprehenderit ipsam inventore?",
                date: '31/1/2002',
                author: 'vishal dhangar',
                type: 'Invertor'
            },
            {
                id: 4,
                imgUrl: blog1,
                title: "title",
                content: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, vitae et est nihil sunt incidunt totam placeat modi quisquam maxime fugiat corrupti, corporis quae ab dicta id ex rem accusamus doloribus ducimus odit nesciunt consequatur similique. Repellat dolores, magni soluta quo, ipsam nulla, obcaecati quae incidunt nobis aperiam doloret ipsa! Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias maiores magni sint reprehenderit ipsam inventore?",
                date: '31/1/2002',
                author: 'vishal dhangar',
                type: 'Invertor'
            },
        ]
    }

    const redirectToBlogDetailPage = (id) => {
        router.push(`/blogs/${id}`);
    }

    return (
        <div className='blog my-8'>
            <div className="blog__container max-w-7xl mx-auto px-[3vw]">

                <div className="blog__heading flex justify-between ">
                    <p className="text-gray-900 text-xl sm:text-2xl font-bold">{blogHeading}</p>
                    {source!=='blog' && <Link href='/blogs' className="text-green-500 font-medium text-sm">view all</Link>}
                </div>

                <div className="blog__item__container px-4 md:px-14 py-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5 my-4 justify-between">
                    {
                        data.map((item, index) => <BlogSectionCard key={index} item={item} redirectToBlogDetailPage={redirectToBlogDetailPage} />)
                    }
                </div>

            </div>
        </div>
    )
}

export default Index