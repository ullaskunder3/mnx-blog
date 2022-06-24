import React from 'react'
import fs from 'fs'
import matter from 'gray-matter';
import md from 'markdown-it';
import Link from 'next/link';
import {Footer} from '../../components/Footer';

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
        //  overflow-hidden
        <div className="max-w-md bg-white rounded-xl md:max-w-2xl mt-5 my-0 mx-auto">
            <Link href="/" className=''>
                <a className='bg-transparent hover:bg-green-500 text-black-700 font-semibold hover:text-white py-2 m-5 px-10 border border-500 hover:border-transparent'>&#60; Back</a>
            </Link>
            <div className="md:flex mb-10">
                <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{ frontMatter.title }</div>
                    <hr className='mb-5' />
                    <article className="prose lg:prose-xl" dangerouslySetInnerHTML={ { __html: md().render(content) } } />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default BlogPage;