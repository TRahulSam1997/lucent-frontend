// @ts-expect-error
import { getPosts } from 'lib/ghost/posts';
import { GetStaticProps } from 'next';

export interface Posts {
    [x: string]: any;

}

export interface Post {
    slug: string;
    id: string; 
    title: string;
    excerpt: string;
    html: string;
}

export interface Props {
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
    // console.log(props)
    return (
        <div>
          <h1>Post Form</h1>
          <ul>
            {props.posts.map((post: Post) => (
                <li key={post.id}>
                    {post.title}
                    <p>
                        {post.excerpt}
                    </p>
                </li>
            ))}
          </ul>
        </div>
    )}
  
export default Archive;