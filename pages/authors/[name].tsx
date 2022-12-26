import React from 'react'
import { getAllAuthors } from '../../lib/ghost/authors';

interface Author {
  name: string;
  bio: string;
}

interface Authors {
  [x: string]: any;
}

interface AuthorProps {
  author: Author;
}

const AuthorPage = (props:AuthorProps) => {
  return (
    <div> 
      <h1>{props.author.name}</h1>
      <div dangerouslySetInnerHTML={{ __html: props.author.bio }} />
    </div>
  )
}

// export const getStaticPaths = async () => {
//   const authors: Authors = await getAllAuthors();

//   const paths: string = authors.map((author: Author) => ({
//     params: { name: author.name }
//   }))

//   return { paths, fallback: false }
// }


// export async function getStaticPaths() {
//   const posts: Posts = await getPosts();

//   const paths: string = posts.map((post: Post) => ({
//       params: { slug: post.slug }
//   }))

//   return { paths, fallback: false }
// }

export default AuthorPage