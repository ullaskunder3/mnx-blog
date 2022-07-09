import Head from 'next/head'
import styles from '../styles/Home.module.css'
import fs from 'fs'
import matter from 'gray-matter';
import Link from 'next/link';
import {Footer} from '../components/Footer';

export async function getStaticProps() {
  const files = fs.readdirSync('posts');
  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '');
    const readFiles = fs.readFileSync(`posts/${filename}`)
    const { data: frontMatter } = matter(readFiles);

    return {
      slug, frontMatter
    }
  })
  return {
    props: {
      posts
    }
  }
}

export default function Home({ posts }) {
  return (
    <div className={ styles.container }>
      <Head>
        <title>MnxBlog | ReadMe Solutions</title>
        <meta name="description" content="ReadMe Solutions and guide for tech problem" key="desc"/>
        <meta property="og:url" content="https://www.mnxblog.live" />
        <meta property="og:description" content="ReadMe Solutions and guide for tech problem" />
        <meta property="og:title" content="ReadMe files with guide to your problem" />
        <meta property="og:image" content="https://www.mnxblog.live/mnxblog.png" />
        <meta property="twitter:description" content="ReadMe Solutions and guide for tech problem" />
        <meta property="twitter:title" content="ReadMe files with guide to your problem" />
        <meta property="twitter:creator" content="@ullaskunder3" />
        <meta property="twitter:image" content="https://www.mnxblog.live/mnxblog.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        <meta name="keywords" content="ReadMe.md, HTML, CSS, NextJS, TailWindCSS, Nodejs" />
        <meta name="author" content="Ullas Kunder" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='w-full font-sans leading-normal tracking-normal my-0 mx-auto'>
        <div className='text-center select-none'>
          <p className='text-4xl lg:text-5xl mt-5 mb-2 font-bold cursor-pointer text-teal-800'>mnxBlog;</p>
          <p className='text-gray-600 text-lg font-semibold'>Open source is a thankless job. We do it anyway. 🙂</p>
          <p className='mb-4'>ReadMe Solutions.</p>
        </div>
        <hr className='border' />
        <div className="max-w-max mx-auto mb-40">
          { posts?.map((post) => {
            return (
              <Link key={ `${post.slug}` } href={ `/blog/${post.slug}` }>
                <div className={`${styles.borderGradient} p-5 hover:bg-slate-100 cursor-pointer select-none`}>
                  <div key={ post.frontMatter.id } className='mb-4'>
                    <span className='text-sm font-semibold text-slate-700'>{post.frontMatter.date}</span>
                    <h1 className={`${styles.textGradient}  text-2xl font-bold text-slate-700`}>{ post.frontMatter.title }</h1>
                    <p className='mt-3 text-lg opacity-50 font-semibold'>{ post.frontMatter.desc }</p>
                  </div>
                </div>
              </Link>
            )
          }) }
        </div>
      </main>
      <Footer />
    </div>
  )
}
