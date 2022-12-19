import { getPosts } from 'lib/ghost/posts';
import { GetStaticProps } from 'next';

interface Posts {

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

const Archive = () => {
    return (
        <div>
          <h1>Post Form</h1>
        </div>
    )}
  
export default Archive;