import { useRouter } from 'next/router';
import React from 'react'
import BlogDetailsPage from '../../components/BlogComponents/BlogDetailsPage/index'
import blog1 from '../../../public/blog/blog1.jpg'

const BlogDetails = () => {
  const router = useRouter()
  const { blogId } = router.query;

  const [item, setItem] = React.useState({});
  React.useEffect(() => {
    if (blogId) {
      const QUERY = encodeURIComponent(`*[_type == "blog" && _id == "${blogId}"]`);
      fetch(`https://${process.env.NEXT_PUBLIC_PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${process.env.NEXT_PUBLIC_DATASET}?query=${QUERY}`)
        .then((res) => res.json())
        .then((data) => setItem(data.result[0]))
    }
  }, [blogId]);

  console.log(item);

  // fetch blog details from the blogId and remove the hard coded item
  //   let item = {
  //     id: 2,
  //     imgUrl: blog1,
  //     title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, vitae et est ni",
  //     content: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, vitae et est nihil sunt incidunt totam placeat modi quisquam maxime fugiat corrupti, corporis quae ab dicta id ex rem accusamus doloribus ducimus odit nesciunt consequatur similique. Repellat dolores, magni soluta quo, ipsam nulla, obcaecati quae incidunt nobis aperiam doloret ipsa! Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias maiores magni sint reprehenderit ipsam inventore?",
  //     date: '31/1/2002',
  //     author: 'vishal dhangar',
  //     type: 'Invertor'
  // };

  return (
    <div className='BlogDetails '>
      <BlogDetailsPage item={item} />
    </div>
  )
}

export default BlogDetails