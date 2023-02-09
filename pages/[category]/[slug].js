import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown'
import Layout from "../../components/layout/Layout";
import data from "../../util/blogData";
import { FacebookShareButton, FacebookIcon, LinkedinShareButton, LinkedinIcon, TwitterIcon, TwitterShareButton, RedditShareButton, RedditIcon } from "next-share";
import matter from "gray-matter";
import { readFileSync } from "fs";

async function getContent(path) {
    const file = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(await read(path))

    return file
}

const BlogDetails = ({frontmatter, content}) => {
    
    return (
        <>
            <Layout>
                    <>
                        <div className="cover-home3">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-1" />
                                    <div className="col-xl-10 col-lg-12">
                                        <div className="pt-30 border-bottom border-gray-800 pb-20">
                                            <div className="box-breadcrumbs">
                                                <ul className="breadcrumb">
                                                    <li>
                                                        <Link className="home" href="/">Home</Link></li>
                                                    <li>
                                                        <Link href={"/" + frontmatter.category}>{frontmatter.category_title}</Link></li>
                                                    <li><span>{frontmatter.title}</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="row mt-50 align-items-end">
                                            <div className="col-lg-9 col-md-8">
                                                <h2 className="color-linear mb-30">{frontmatter.title} </h2>
                                                <div className="box-author mb-20"><img src="/assets/imgs/page/about/author.png" alt="Genz" />
                                                    <div className="author-info">
                                                        <h6 className="color-linear-2">{frontmatter.author}</h6><span className="color-gray-700 text-sm mr-30">{frontmatter.date}</span><span className="color-gray-700 text-sm">{frontmatter.ttr} to read</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4">
                                                <div className="box-share border-gray-800">
                                                    <h6 className="d-inline-block color-gray-500 mr-10">Share</h6>
                                                    <span className="btns-share">
                                                        <FacebookShareButton url = { "https://vcavarec.com/" + frontmatter.category + "/" + frontmatter.slug } quote = { frontmatter.shortdesc }>
                                                            <FacebookIcon size={32} round/>
                                                        </FacebookShareButton>
                                                    </span>
                                                    <span className="btns-share">
                                                        <TwitterShareButton url = { "https://vcavarec.com/" + frontmatter.category + "/" + frontmatter.slug } title = { frontmatter.title }>
                                                            <TwitterIcon size={32} round/>
                                                        </TwitterShareButton>
                                                    </span>
                                                    <span className="btns-share">
                                                        <LinkedinShareButton url = { "https://vcavarec.com/" + frontmatter.category + "/" + frontmatter.slug }>
                                                            <LinkedinIcon size={32} round/>
                                                        </LinkedinShareButton>
                                                    </span>
                                                    <span className="btns-share">
                                                        <RedditShareButton url = { "https://vcavarec.com/" + frontmatter.category + "/" + frontmatter.slug } title = { frontmatter.title }>
                                                            <RedditIcon size={32} round/>
                                                        </RedditShareButton>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-50">
                                            <div className="col-lg-8">
                                                <div className="content-detail border-gray-800">
                                                    {frontmatter.title}
                                                    <ReactMarkdown>{content}</ReactMarkdown>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="sidebar">
                                                    <div className="box-sidebar bg-gray-850 border-gray-800">
                                                        <div className="head-sidebar">
                                                            <h5 className="line-bottom">Categories</h5>
                                                        </div>
                                                        <div className="content-sidebar">
                                                            <div className="list-cats">
                                                                <div className="item-cats border-gray-800 wow animate__animated animate__fadeIn">
                                                                    <div className="cat-left">
                                                                        <div className="image-cat">
                                                                            <Link href="/blog-archive"><img src="/assets/imgs/page/healthy/cat1.png" alt="Genz" /></Link></div>
                                                                        <div className="info-cat">
                                                                            <Link className="color-gray-500 text-xl" href="/blog-archive">Travel Tips</Link></div>
                                                                    </div>
                                                                    <div className="cat-right">
                                                                        <Link className="btn btn-small text-sm color-gray-500 bg-gray-800" href="/blog-archive">36
                                                                            posts</Link></div>
                                                                </div>
                                                                <div className="item-cats border-gray-800 wow animate__animated animate__fadeIn">
                                                                    <div className="cat-left">
                                                                        <div className="image-cat">
                                                                            <Link href="/blog-archive-2"><img src="/assets/imgs/page/healthy/cat2.png" alt="Genz" /></Link></div>
                                                                        <div className="info-cat">
                                                                            <Link className="color-gray-500 text-xl" href="/blog-archive-2">Technology</Link></div>
                                                                    </div>
                                                                    <div className="cat-right">
                                                                        <Link className="btn btn-small text-sm color-gray-500 bg-gray-800" href="/blog-archive-2">14
                                                                            posts</Link></div>
                                                                </div>
                                                                <div className="item-cats border-gray-800 wow animate__animated animate__fadeIn">
                                                                    <div className="cat-left">
                                                                        <div className="image-cat">
                                                                            <Link href="/blog-archive-3"><img src="/assets/imgs/page/healthy/cat3.png" alt="Genz" /></Link></div>
                                                                        <div className="info-cat">
                                                                            <Link className="color-gray-500 text-xl" href="/blog-archive-3">Business</Link></div>
                                                                    </div>
                                                                    <div className="cat-right">
                                                                        <Link className="btn btn-small text-sm color-gray-500 bg-gray-800" href="/blog-archive-3">87
                                                                            posts</Link></div>
                                                                </div>
                                                                <div className="item-cats border-gray-800 wow animate__animated animate__fadeIn">
                                                                    <div className="cat-left">
                                                                        <div className="image-cat">
                                                                            <Link href="/blog-archive-4"><img src="/assets/imgs/page/healthy/cat4.png" alt="Genz" /></Link></div>
                                                                        <div className="info-cat">
                                                                            <Link className="color-gray-500 text-xl" href="/blog-archive-4">Food</Link></div>
                                                                    </div>
                                                                    <div className="cat-right">
                                                                        <Link className="btn btn-small text-sm color-gray-500 bg-gray-800" href="/blog-archive-4">125
                                                                            posts</Link></div>
                                                                </div>
                                                                <div className="item-cats border-gray-800 wow animate__animated animate__fadeIn">
                                                                    <div className="cat-left">
                                                                        <div className="image-cat">
                                                                            <Link href="/blog-archive-5"><img src="/assets/imgs/page/healthy/cat5.png" alt="Genz" /></Link></div>
                                                                        <div className="info-cat">
                                                                            <Link className="color-gray-500 text-xl" href="/blog-archive-5">Lifestyle</Link></div>
                                                                    </div>
                                                                    <div className="cat-right">
                                                                        <Link className="btn btn-small text-sm color-gray-500 bg-gray-800" href="/blog-archive-5">6
                                                                            posts</Link></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="box-sidebar bg-gray-850 border-gray-800">
                                                        <div className="head-sidebar wow animate__animated animate__fadeIn">
                                                            <h5 className="line-bottom">Popular Posts</h5>
                                                        </div>
                                                        <div className="content-sidebar">
                                                            <div className="list-posts">
                                                                <div className="item-post wow animate__animated animate__fadeIn">
                                                                    <div className="image-post">
                                                                        <Link href="/single-sidebar"><img src="/assets/imgs/page/homepage1/img-post.jpg" alt="Genz" /></Link></div>
                                                                    <div className="info-post border-gray-800">
                                                                        <Link href="/single-sidebar">
                                                                            <h6 className="color-white">Creating is a privilege but it’s also a gift</h6></Link><span className="color-gray-700">15 mins read</span>
                                                                        <ul className="d-inline-block">
                                                                            <li className="color-gray-700">15 April 2022</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="item-post wow animate__animated animate__fadeIn">
                                                                    <div className="image-post">
                                                                        <Link href="/single-sidebar"><img src="/assets/imgs/page/homepage1/img-post2.jpg" alt="Genz" /></Link></div>
                                                                    <div className="info-post border-gray-800">
                                                                        <Link href="/single-sidebar">
                                                                            <h6 className="color-white">Being unique is better than being perfect</h6></Link><span className="color-gray-700">15 mins read</span>
                                                                        <ul className="d-inline-block">
                                                                            <li className="color-gray-700">15 April 2022</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="item-post wow animate__animated animate__fadeIn">
                                                                    <div className="image-post">
                                                                        <Link href="/single-sidebar"><img src="/assets/imgs/page/homepage1/img-post3.jpg" alt="Genz" /></Link></div>
                                                                    <div className="info-post border-gray-800">
                                                                        <Link href="/single-sidebar">
                                                                            <h6 className="color-white">Every day, in every city and town across the country</h6></Link><span className="color-gray-700">15 mins read</span>
                                                                        <ul className="d-inline-block">
                                                                            <li className="color-gray-700">15 April 2022</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="item-post wow animate__animated animate__fadeIn">
                                                                    <div className="image-post">
                                                                        <Link href="/single-sidebar"><img src="/assets/imgs/page/homepage1/img-post4.jpg" alt="Genz" /></Link></div>
                                                                    <div className="info-post border-gray-800">
                                                                        <Link href="/single-sidebar">
                                                                            <h6 className="color-white">Your voice, your mind, your story, your vision</h6></Link><span className="color-gray-700">15 mins read</span>
                                                                        <ul className="d-inline-block">
                                                                            <li className="color-gray-700">15 April 2022</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="item-post wow animate__animated animate__fadeIn">
                                                                    <div className="image-post">
                                                                        <Link href="/single-sidebar"><img src="/assets/imgs/page/homepage1/img-post4.jpg" alt="Genz" /></Link></div>
                                                                    <div className="info-post border-gray-800">
                                                                        <Link href="/single-sidebar">
                                                                            <h6 className="color-white">Your voice, your mind, your story, your vision</h6></Link><span className="color-gray-700">15 mins read</span>
                                                                        <ul className="d-inline-block">
                                                                            <li className="color-gray-700">15 April 2022</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="box-sidebar bg-gray-850 border-gray-800">
                                                        <div className="head-sidebar wow animate__animated animate__fadeIn">
                                                            <h5 className="line-bottom">Last Comment</h5>
                                                        </div>
                                                        <div className="content-sidebar">
                                                            <div className="list-comments">
                                                                <div className="item-comment border-gray-800 wow animate__animated animate__fadeIn">
                                                                    <p className="color-gray-500 mb-20">“ Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard roadrunner “</p>
                                                                    <div className="box-author-small"><img src="/assets/imgs/page/homepage1/author6.png" alt="Genz" />
                                                                        <div className="author-info"><span className="d-block color-gray-700 text-sm">Jane Cooper</span><span className="color-gray-700 text-xs">15 April 2022</span></div>
                                                                    </div>
                                                                </div>
                                                                <div className="item-comment border-gray-800 wow animate__animated animate__fadeIn">
                                                                    <p className="color-gray-500 mb-20">“ Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard roadrunner “</p>
                                                                    <div className="box-author-small"><img src="/assets/imgs/page/homepage1/author7.png" alt="Genz" />
                                                                        <div className="author-info"><span className="d-block color-gray-700 text-sm">Katen Doe</span><span className="color-gray-700 text-xs">15 April 2022</span></div>
                                                                    </div>
                                                                </div>
                                                                <div className="item-comment border-gray-800 wow animate__animated animate__fadeIn">
                                                                    <p className="color-gray-500 mb-20">“ Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard roadrunner “</p>
                                                                    <div className="box-author-small"><img src="/assets/imgs/page/homepage1/author8.png" alt="Genz" />
                                                                        <div className="author-info"><span className="d-block color-gray-700 text-sm">Barbara Cartland</span><span className="color-gray-700 text-xs">15 April 2022</span></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="box-sidebar bg-gray-850 border-gray-800">
                                                        <div className="head-sidebar">
                                                            <Link href="/"><img src="/assets/imgs/template/logo.svg" alt="Genz" /></Link>
                                                            <h6 className="color-gray-700">Follow us on instagram</h6>
                                                        </div>
                                                        <div className="content-sidebar">
                                                            <div className="row mt-30 mb-10">
                                                                <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                                                                    <Link href="#"><img className="bdrd-8" src="/assets/imgs/page/homepage1/gallery.png" alt="Genz" /></Link></div>
                                                                <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                                                                    <Link href="#"><img className="bdrd-8" src="/assets/imgs/page/homepage1/gallery2.png" alt="Genz" /></Link></div>
                                                                <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                                                                    <Link href="#"><img className="bdrd-8" src="/assets/imgs/page/homepage1/gallery3.png" alt="Genz" /></Link></div>
                                                                <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                                                                    <Link href="#"><img className="bdrd-8" src="/assets/imgs/page/homepage1/gallery4.png" alt="Genz" /></Link></div>
                                                                <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                                                                    <Link href="#"><img className="bdrd-8" src="/assets/imgs/page/homepage1/gallery5.png" alt="Genz" /></Link></div>
                                                                <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                                                                    <Link href="#"><img className="bdrd-8" src="/assets/imgs/page/homepage1/gallery6.png" alt="Genz" /></Link></div>
                                                                <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                                                                    <Link href="#"><img className="bdrd-8" src="/assets/imgs/page/homepage1/gallery7.png" alt="Genz" /></Link></div>
                                                                <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                                                                    <Link href="#"><img className="bdrd-8" src="/assets/imgs/page/homepage1/gallery8.png" alt="Genz" /></Link></div>
                                                                <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                                                                    <Link href="#"><img className="bdrd-8" src="/assets/imgs/page/homepage1/gallery9.png" alt="Genz" /></Link></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="box-sidebar bg-gray-850 border-gray-800">
                                                        <div className="head-sidebar">
                                                            <h5 className="line-bottom d-inline-block wow animate__animated animate__fadeIn">Popular Tags</h5>
                                                        </div>
                                                        <div className="content-sidebar pb-20">
                                                            <Link className="btn btn-tags bg-gray-850 border-gray-800 mr-10 mb-10 bdrd16 wow animate__animated animate__fadeIn" href="/blog-archive">Technology</Link>
                                                            <Link className="btn btn-tags bg-gray-850 border-gray-800 mr-10 mb-10 bdrd16 wow animate__animated animate__fadeIn" href="/blog-archive">Travel</Link>
                                                            <Link className="btn btn-tags bg-gray-850 border-gray-800 mr-10 mb-10 bdrd16 wow animate__animated animate__fadeIn" href="/blog-archive">Interior</Link>
                                                            <Link className="btn btn-tags bg-gray-850 border-gray-800 mr-10 mb-10 bdrd16 wow animate__animated animate__fadeIn" href="/blog-archive">Minimal</Link>
                                                            <Link className="btn btn-tags bg-gray-850 border-gray-800 mr-10 mb-10 bdrd16 wow animate__animated animate__fadeIn" href="/blog-archive">Plant</Link>
                                                            <Link className="btn btn-tags bg-gray-850 border-gray-800 mr-10 mb-10 bdrd16 wow animate__animated animate__fadeIn" href="/blog-archive">Nature</Link>
                                                            <Link className="btn btn-tags bg-gray-850 border-gray-800 mr-10 mb-10 bdrd16 wow animate__animated animate__fadeIn" href="/blog-archive">Business</Link>
                                                            <Link className="btn btn-tags bg-gray-850 border-gray-800 mr-10 mb-10 bdrd16 wow animate__animated animate__fadeIn" href="/blog-archive">Animal</Link>
                                                            <Link className="btn btn-tags bg-gray-850 border-gray-800 mr-10 mb-10 bdrd16 wow animate__animated animate__fadeIn" href="/blog-archive">Healthy</Link>
                                                            <Link className="btn btn-tags bg-gray-850 border-gray-800 mr-10 mb-10 bdrd16 wow animate__animated animate__fadeIn" href="/blog-archive">Space</Link></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

                    </>
            </Layout>
        </>
    );
};

/*const postsDirectory = path.join(process.cwd(), 'content');

export function getDirectories(postsDirectory) {
  return readdirSync(postsDirectory, { withFileTypes: true }).filter((dirent) => dirent.isDirectory()).map((dirent) => dirent.name);
}

export function getAllFiles() {
  const test = getDirectories(postsDirectory);
  let table = [];
  for (const folder of test) {
    const subfolder = path.join(postsDirectory, folder);
    readdirSync(subfolder).forEach(file => {
        table.push({ file: file, folder: folder });
    });
  }
  return table;
}

export function testFiles() {
    readdirSync(postsDirectory, (err, files) => {
    files.forEach(file => {
        console.log(file);
    });
    });
}


export function getServerSidePaths() {
    const t = getAllFiles();
    console.log(t);
    const paths = t.map((f) => (
        {
        params: {
            category: f.folder,
            slug: f.file,
        },
    }));
    console.log(paths);
    return {
        paths,
        fallback: false,
    };
  }*/


export async function getServerSideProps(context) {
    const fileName = readFileSync(`content/${context.query.category}/${context.query.slug}.md`, 'utf-8');
    const { data: frontmatter, content } = matter(fileName);
    return {
      props: {
        frontmatter,
        content,
      },
    };
  }

export default BlogDetails;