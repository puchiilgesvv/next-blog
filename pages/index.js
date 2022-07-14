import Head from "next/head"
import Animate from "../components/animations/animate"
import FeaturedPosts from "../components/home-page/featured-posts"
import Hero from "../components/home-page/hero"
import { getFeaturedPosts } from "../lib/posts-util"

export default function Home(props) {
  return (
    <>
    <Head>
      <title>Jacob Jessie Blog</title>
      <meta name='description' content='Some SEO content description.'/>
    </Head>
    <Animate>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Animate>
    </>
  )
}

export async function getStaticProps() {
  const featuredPosts = getFeaturedPosts()

  return {
    props: {
      posts: featuredPosts
    },
    revalidate: 6000
  }
}