import React from 'react'
// @ts-expect-error
import { getAllAuthors } from 'lib/ghost/authors';
import { Context } from '../posts/[slug]';
// @ts-expect-error
import { getAuthor } from 'lib/ghost/authors';

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

const AuthorPage = (props: AuthorProps) => {
  return (
    <div> 
      <h1>{props.author.name}</h1>
      <div dangerouslySetInnerHTML={{ __html: props.author.bio }} />
    </div>
  )
}

export const getStaticPaths = async () => {
  const authors: Authors = await getAllAuthors();

  const paths: string = authors.map((author: Author) => ({
    params: { name: author.name }
  }))

  return { paths, fallback: false }
}

export default AuthorPage

export const getStaticProps = async (context: Context): Promise<{
  notFound: boolean } | { props: AuthorProps }> => {
  const author: Author = await getAuthor(context.params.name);

  if (!author) {
    return {
      notFound: true,
    }
  }

  return {
    props: { author }
  }
}