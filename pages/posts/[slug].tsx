// @ts-expect-error
import { getSinglePost, getPosts } from "lib/ghost/posts";
import { GetStaticProps } from "next";
import { Post, Posts, Props } from "../archive";

interface Params {
    slug: string;
} 

const PostPage = (props: {post: Post}) => {
    return (
        <div>
            <h1>{props.post.title}</h1>
            <div dangerouslySetInnerHTML={{__html: props.post.html}} />
        </div>
    )
}

export async function getStaticPaths<GetStaticPaths>() {
    const posts: Posts = await getPosts();

    const paths: string = posts.map((post: Post) => ({
        params: { slug: post.slug }
    }))

    return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<Props, Params> = async (context) => {
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
