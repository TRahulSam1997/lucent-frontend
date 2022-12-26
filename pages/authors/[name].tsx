import React from 'react'
import { getAllAuthors } from '../../lib/ghost/authors';

interface Author {
  name: string;
  bio: string;
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

export const getStaticPaths = async () => {
  const authors = await getAllAuthors()
  
}

export default AuthorPage