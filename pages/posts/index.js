import Animate from "../../components/animations/animate";
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";

export default function PostPage(props) {
    return (
        <Animate>
            <AllPosts posts={props.posts} />
        </Animate>
    )
}

export async function getServerSideProps() {
    const allPosts = getAllPosts()
    return {
        props: {
            posts: allPosts
        }
    }
}