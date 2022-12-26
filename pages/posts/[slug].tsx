// @ts-expect-error
import { getSinglePost, getPosts } from "lib/ghost/posts";
import { Post, Posts } from "../archive";

export interface Context {
    params: {
        slug: string;
        name: string;
    }
} 

const PostPage = (props: {post: Post}) => {
    return (
        <div>
            <h1>{props.post.title}</h1>
            <div dangerouslySetInnerHTML={{__html: props.post.html}} />
        </div>
    )
}

export async function getStaticPaths() {
    const posts: Posts = await getPosts();

    const paths: string = posts.map((post: Post) => ({
        params: { slug: post.slug }
    }))

    return { paths, fallback: false }
}

export const getStaticProps = async (context: Context): Promise<{
    notFound: boolean } | { props: Posts }> => {
    const post = await getSinglePost(context.params.slug);

    if (!post) {
      return {
        notFound: true,
      };
    }
  
    return {
      props: { post },
    };
}

export default PostPage