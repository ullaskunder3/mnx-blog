import React from 'react'
import fs from 'fs'
import matter from 'gray-matter';
import md from 'markdown-it';
import Link from 'next/link';
import {Footer} from '../../components/Footer';
import Head from 'next/head';

export async function getStaticPaths() {
    const files = fs.readdirSync('posts');
    const paths = files.map((filename) => ({
        params: {
            slug: filename.replace('.md', ''),
        },
    }))
    return {
        paths,
        fallback: false,
    }
}
export async function getStaticProps({ params: { slug } }) {
    const mdFile = fs.readFileSync(`posts/${slug}.md`);
    const { data: frontMatter, content } = matter(mdFile);

    return {
        props: {
            frontMatter, content
        }
    }
}
function BlogPage({ frontMatter, content }) {
    return (
        <div className="bg-white rounded-xl md:max-w-5xl mt-5 my-0 mx-auto">
            <Head>
                <title>MnxBlog | ReadMe Solutions</title>
                <meta charset="utf-8" />
                <meta name="description" content="README.md Solutions | Feel free to fork it on github and make contributions, A reminder that if you're ever in need a geek helper...👋" key="desc"/>
                <meta property="og:url" content="https://www.mnxblog.live" />
                <meta property="og:description" content={`README.md Solutions ${frontMatter.title} | Feel free to fork it on github and make contributions.`} />
                <meta property="og:title" content={`ReadMe files for ${frontMatter.title}`} />
                <meta property="og:type" content="website" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
                <meta name="keywords" content="ReadMe.md, HTML, CSS, NextJS, TailWindCSS, Nodejs" />
                <meta name="author" content="Ullas Kunder" />
            </Head>
            <Link href="/" className=''>
                <a className='bg-transparent hover:bg-green-500 text-black-700 font-semibold hover:text-white py-2 m-5 px-10 border border-500 hover:border-transparent'>Back</a>
            </Link>
            <div className="md:flex mb-10">
                <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{ frontMatter.title }</div>
                    <hr className='mb-5' />
                    <article className="prose lg:prose-xl max-w-5xl" dangerouslySetInnerHTML={ { __html: md().render(content) } } />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default BlogPage;