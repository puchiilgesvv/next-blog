import PostItem from "./post-item"
import classes from "./posts-grid.module.css"
import { motion } from "framer-motion"

export default function PostsGrid(props) {
    const { posts } = props

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.15
            }
        }
    }

    return (
        <motion.ul
            className={classes.grid}
            variants={container}
            initial="hidden"
            animate="visible"
        >
            {posts.map(post => (
                <PostItem post={post} key={post.slug} />
            ))}
        </motion.ul>
    )
}