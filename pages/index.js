import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';
import glob from 'glob';

// The Blog Page Content
export default function Blog({posts}){
    return <main>
        {posts.map(post => {
            //extract slug and frontmatter
            const {slug, frontmatter} = post
            //extract frontmatter properties
            const {title, author, category, date, bannerImage, tags} = frontmatter

            //JSX for individual blog listing
            return <article key={title}>
                <Link href={`/${slug}`}>
                    <h1>{title}</h1>
                </Link>
                <h3>{author}</h3>
                <h3>{date}</h3>
            </article>
        })}
    </main>
}


//Generating the Static Props for the Blog Page
export async function getStaticProps(){
    // get list of files from the posts folder
    const files = glob.sync("posts/**/*.md");

    // get frontmatter & slug from each post
    const posts = files.map((fileName) => {
        console.log(fileName)
        const slug = fileName.replace('.md', '').replace('posts', '');
        const readFile = fs.readFileSync(`${fileName}`, 'utf-8');
        const { data: frontmatter } = matter(readFile);

        return {
          slug,
          frontmatter,
        };
    });

    // Return the pages static props
    return {
        props: {
          posts,
        },
    };
}
