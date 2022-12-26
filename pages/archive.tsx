// @ts-expect-error
import { getPosts } from 'lib/ghost/posts';
import { GetStaticProps } from 'next';
import Link from 'next/link';

export interface Posts {
    [x: string]: any;
}

export interface Post {
    slug: string;
    id: string; 
    title: string;
    excerpt: string;
    html: string;
    published_at: string;
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

const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  };

const Archive = (props: Props) => {
    return (
        <div>
          <h1>Post Form</h1>
          <ul>
            {props.posts.map((post: Post) => (
                <li key={post.id}>
                    <Link href={`posts/${post.slug}`}>
                        {post.title}
                        <p>
                            {post.excerpt}
                        </p>
                        <p>
                            {new Intl.DateTimeFormat('en-US', options).format(new Date(post.published_at))}
                        </p>
                    </Link>
                    <br />
                </li>
            ))}
          </ul>
        </div>
    )}
  
export default Archive;