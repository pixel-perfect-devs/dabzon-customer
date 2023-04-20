import React from 'react'
import { createClient } from 'next-sanity';
import { useRouter } from 'next/router';
import BlogDetailsPage from '../../components/BlogComponents/BlogDetailsPage/index'

const BlogDetails = ({blog}) => {
  const [item, setItem] = React.useState({});
  React.useEffect(() => {
    setItem(blog);
  }, []);

  return (
    <div className='BlogDetails '>
      <BlogDetailsPage item={item} />
    </div>
  )
}

export default BlogDetails

const client = createClient({
  projectId: "q21v17fe",
  dataset: "production",
  apiVersion: "2021-10-14",
  useCdn: false
});

export async function getServerSideProps(context) {
  const { blogId } = context.query;
  const query = `*[_type == "blog" && _id == "${blogId}"]`;
  const blog = await client.fetch(query);

  return {
    props: {
      blog: blog[0],
    },
  };
}