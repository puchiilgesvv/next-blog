import Animate from "../../components/animations/animate"
import PostContent from "../../components/posts/post-detail/post-content"
import { getPostData, getPostsFiles } from "../../lib/posts-util"

function SinglePostPage(props) {
    return (
        <Animate>
            <PostContent post={props.post} />
        </Animate>
    )
}

export async function getStaticProps(context) {
    const { params } = context
    const { slug } = params
    const postData = getPostData(slug)

    return {
        props: {
            post: postData
        },
        revalidate: 6000
    }
}

export async function getStaticPaths() {
    const postFilenames = getPostsFiles()
    const slugs = postFilenames.map(fileName => fileName.replace(/\.md$/, ''))
    return {
        paths: slugs.map(slug => ({ params: { slug: slug } })),
        fallback: false
    }
}

export default SinglePostPage