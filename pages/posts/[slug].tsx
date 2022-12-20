// @ts-expect-error
import { getSinglePost, getPosts } from "lib/ghost/posts";
import { Post, Posts } from "../archive";

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