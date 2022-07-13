import styles from '../styles/Home.module.css'
import { Footer } from '../components/Footer';
import Link from 'next/link';
import Head from 'next/head'
import Image from 'next/image';
import fs from 'fs'
import matter from 'gray-matter';
import { useEffect, useState } from 'react';

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
      posts,
    }
  }
}

export default function Home({ posts }) {

  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_VIEWCOUNT_INC}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      })
  }, [])

  return (
    <div className={ styles.container }>
      <Head>
        <title>MnxBlog | ReadMe Solutions - minimalist NextJS readme blog</title>
        <meta charSet="utf-8" />
        <meta name="description" content="README.md Solutions | nextjs minimalist readme blog, Feel free to fork it on github and make contributions...👋" key="desc" />
        <meta name="keyword" content="README, NextJS, TailwindCSS, CSS3, Markdown, Nodejs, Vercel, Minimalist" />
        <meta property="og:url" content="https://www.mnxblog.live" />
        <meta property="og:description" content="README.md Solutions | nextjs minimalist readme blog, Feel free to fork it on github and make contributions...👋" />
        <meta property="og:title" content="ReadMe files with guide to your problem" />
        <meta property="og:image" content="https://www.mnxblog.live/mnxblog.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mnxblog" />
        <meta name="twitter:description" content="README.md Solutions | nextjs minimalist readme blog, Feel free to fork it on github and make contributions...👋" />
        <meta name="twitter:title" content="ReadMe files with guide to your problem" />
        <meta name="twitter:creator" content="@ullaskunder3" />
        <meta name="twitter:image" content="https://www.mnxblog.live/mnxblog.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        <meta name="keywords" content="ReadMe.md, HTML, CSS, NextJS, TailWindCSS, Nodejs" />
        <meta name="author" content="Ullas Kunder" />
        <link rel="icon" type="image/ico" href="/favicon.ico" />
      </Head>
      <main className='w-full font-sans leading-normal tracking-normal my-0 mx-auto'>
        <div className='text-center select-none'>
          <p className='inline-block text-4xl lg:text-5xl mt-5 mb-2 font-bold cursor-pointer text-teal-800'>mnxBlog;</p>
          <p className='text-gray-600 text-lg font-semibold'>Open source is a thankless job. We do it anyway. 🙂</p>
          <p className='mb-4'>ReadMe Solutions.</p>
        </div>
        <hr className='border' />
        <div className="max-w-max mb-10 mx-3 md:mx-auto">
          <div className={ styles.cardshelf }>
            <div className={ styles.cardshelf__header }>
              <p className='md:inline'>Help is here. </p>
              <span className='text-slate-500'>Whenever and however you need it.</span>
            </div>
            <div className='md:flex'>
              <div className={ styles.childContainer }>
                <div className={ styles.childWrapper }>
                  <p>View Count</p>
                  <p className={ styles.viewCount } id="viewCounter">
                    { data ? data.value : "calculating..." }
                  </p>
                </div>
              </div>
              <div className={ styles.childContainer }>
                <div className={ styles.childWrapper }>
                  README is Awesome
                  <Image src="/markdown.svg" alt="markdown" width="100" height="100" />
                </div>
                <div className={ styles.childWrapper }>
                  Write your own readme Solution (feature is in progress)
                </div>
              </div>
            </div>
          </div>
          { posts?.map((post) => {
            return (
              <Link key={ `${post.slug}` } href={ `/blog/${post.slug}` }>
                <div className={ `${styles.borderGradient} p-5 hover:bg-slate-100 cursor-pointer select-none` }>
                  <div key={ post.frontMatter.id } className='mb-4'>
                    <span className='text-sm font-semibold text-slate-700'>{ post.frontMatter.date }</span>
                    <h1 className={ `${styles.textGradient} text-2xl font-bold text-slate-700` }>{ post.frontMatter.title }</h1>
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
