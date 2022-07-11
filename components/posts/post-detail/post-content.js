import ReactMarkdown from "react-markdown";

import PostHeader from "./post-header";
import classes from "./post-content.module.css"

const DUMMY_POST = {
    slug: "getting-started-with-next-js",
    title: "Getting Started with Next JS",
    image: "getting-started-nextjs.png",
    content: "# Next JS is the React framework for production.",
    date: "2022-02-10"
}


export default function PostContent() {
    const imagePath = `/images/posts/${DUMMY_POST.image}`
    return (
        <article className={classes.content}>
            <PostHeader title={DUMMY_POST.title} image={imagePath} />
            <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
        </article>
    )
}