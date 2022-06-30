import Image from "next/image";
import Link from "next/link";
import classes from "./post-item.module.css"
import { motion } from "framer-motion"

export default function PostItem(props) {
    const { title, image, excerpt, date, slug } = props.post

    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })

    const imagePath = `/images/posts/${image}`
    const linkPath = `/posts/${slug}`

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    }

    return (
        <>
            <motion.li className={classes.post} variants={item}>
                <Link href={linkPath}>
                    <a>
                        <div className={classes.image}>
                            <Image src={imagePath} alt={title} height={200} width={300} layout="responsive" />
                        </div>
                        <div className={classes.content}>
                            <h3>{title}</h3>
                            <time>{formattedDate}</time>
                            <p>{excerpt}</p>
                        </div>
                    </a>
                </Link>
            </motion.li>
        </>
    )
}

