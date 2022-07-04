import Animate from "../components/animations/animate"
import FeaturedPosts from "../components/home-page/featured-posts"
import Hero from "../components/home-page/hero"

export default function Home() {
  const DUMMY_POSTS = [
    {
      slug: 'getting-started-with-next-js',
      title: 'Getting Started with Next JS',
      image: 'getting-started-nextjs.png',
      excerpt: 'Next JS is the React framework for production.',
      date: '2022-02-10'
    },
    {
      slug: 'a-random-post',
      title: 'This is a random post',
      image: 'getting-started-nextjs.png',
      excerpt: 'Next JS is amazing',
      date: '2022-05-10'
    },
    {
      slug: 'another-random-post',
      title: 'This is another random post',
      image: 'getting-started-nextjs.png',
      excerpt: 'Next JS is ultra amazing!!!',
      date: '2022-05-10'
    }
  ]

  return (
    <Animate>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Animate>
  )
}
