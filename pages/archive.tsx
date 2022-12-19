// @ts-expect-error
import { getPosts } from 'lib/ghost/posts';
import { GetStaticProps } from 'next';
import { Key, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';

interface Posts {
    [x: string]: any;

}

interface Post {
    id: any; 
    title: any;
}

interface Props {
    posts: Posts;
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
    const posts = await getPosts()

    if (!posts) {
        return {
            notFound: true
        }
    }

    return {
        props: { posts }
    }
}


const Archive = (props: Props) => {
    return (
        <div>
          <h1>Post Form</h1>
          <ul>
            {props.posts.map((post: Post) => (
                <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        </div>
    )}
  
export default Archive;