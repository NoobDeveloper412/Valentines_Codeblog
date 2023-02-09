import Link from "next/link";
import Layout from "/components/layout/Layout";
import matter from "gray-matter";
import { readFileSync, readdirSync } from "fs";


export default function Home( {pages} ) {
    var pagination;
    if (pages.length > 6) {
        pagination = <li className="page-item wow animate__animated animate__fadeIn" data-wow-delay=".2s"><Link className="page-link active" href="#">2</Link></li>;
    } else
    if (pages.length > 12)  {
        pagination = [
            <li className="page-item wow animate__animated animate__fadeIn" data-wow-delay=".2s"><Link className="page-link active" href="#">2</Link></li>,
            <li className="page-item wow animate__animated animate__fadeIn" data-wow-delay=".3s"><Link className="page-link active" href="#">3</Link></li>
        ]
    } else
    if (pages.length > 18)  {
        pagination = [
            <li className="page-item wow animate__animated animate__fadeIn" data-wow-delay=".2s"><Link className="page-link active" href="#">2</Link></li>,
            <li className="page-item wow animate__animated animate__fadeIn" data-wow-delay=".3s"><Link className="page-link active" href="#">3</Link></li>,
            <li className="page-item wow animate__animated animate__fadeIn" data-wow-delay=".4s"><Link className="page-link" href="#">...</Link></li>,
        ]
    }
    console.log(pagination);

    return (
        <>
            <Layout>
                <div className="cover-home3">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-1" />
                            <div className="col-xl-10 col-lg-12">
                                <div className="row align-items-end mt-50">
                                    <div className="col-lg-7 mb-20">
                                        <div className="d-inline-block position-relative">
                                            <h1 className="color-white mb-20 color-linear wow animate__animated animate__fadeIn">JavaScript</h1><span className="btn btn-linear-small btn-number-arts">{pages.length} Articles</span>
                                        </div>
                                        <p className="color-gray-500 text-base wow animate__animated animate__fadeIn">Simple guides and code snippets about JavaScript programming language and frameworks.
                                        <br/>Spoiler alert : I'm struggling with this language and won't be great help.</p>
                                    </div>
                                    <div className="col-lg-5 mb-20 text-start text-lg-end">
                                        <div className="box-breadcrumbs wow animate__animated animate__fadeIn">
                                            <ul className="breadcrumb">
                                                <li><Link className="home" href="/">Home</Link></li>
                                                <li><Link href={"/" + pages[0].frontmatter.category}>{pages[0].frontmatter.category_title}</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="border-bottom border-gray-800 mt-10 mb-30" />
                                    </div>
                                </div>
                                <div className="mt-40 mb-50">
                                    <div className="row mt-50 mb-10" data-masonry="{&quot;percentPosition&quot;: true }">
                                        {pages.slice(0, 6).map((item, i) => (
                                            console.log(item),
                                            <div className="col-lg-4">
                                                <div className="card-blog-1 border-gray-800 bg-gray-850 hover-up">
                                                    <div className="card-image mb-20">
                                                        <Link className="post-type" href="#" />
                                                        <Link href={`/${item.frontmatter.category}/${item.frontmatter.slug}`}>
                                                            <img src={`assets/imgs/page/${item.frontmatter.category}/${item.frontmatter.slug}.png`} alt="Genz" />
                                                        </Link>
                                                    </div>
                                                    <div className="card-info">
                                                        <div className="row">
                                                            <div className="col-7"><h6 className="color-gray-700 text-sm">Difficulty: {item.frontmatter.difficulty}</h6></div>
                                                            <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">3 mins read</span></div>
                                                        </div><Link href={`/${item.frontmatter.category}/${item.frontmatter.slug}`}>
                                                            <h5 className="color-linear mt-10">{item.frontmatter.title}</h5></Link>
                                                        <div className="row align-items-center mt-20">
                                                            <div className="col-10">
                                                                <div className="box-author"><img src="assets/imgs/page/about/author.png" alt="Genz" />
                                                                    <div className="author-info">
                                                                        <h6 className="color-linear-2">Valentin Cavarec</h6><span className="color-gray-700 text-sm">{item.frontmatter.date}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        
                                    </div>
                                    <nav className="mb-50">
                                        <ul className="pagination">
                                            <li className="page-item wow animate__animated animate__fadeIn" data-wow-delay=".0s"><Link className="page-link page-prev" href="#"><i className="fi-rr-arrow-small-left" /></Link></li>
                                            <li className="page-item wow animate__animated animate__fadeIn" data-wow-delay=".2s"><Link className="page-link active" href="#">1</Link></li>
                                            {pages && pages.length>6 && ( 
                                                <li className="page-item wow animate__animated animate__fadeIn" data-wow-delay=".2s"><Link className="page-link" href="#">2</Link></li>
                                            )}
                                            {pages && pages.length>12 && ( 
                                                <li className="page-item wow animate__animated animate__fadeIn" data-wow-delay=".2s"><Link className="page-link" href="#">2</Link></li>,
                                                <li className="page-item wow animate__animated animate__fadeIn" data-wow-delay=".3s"><Link className="page-link" href="#">3</Link></li>
                                            )}
                                            {pages && pages.length>18 && ( 
                                                <li className="page-item wow animate__animated animate__fadeIn" data-wow-delay=".2s"><Link className="page-link" href="#">2</Link></li>,
                                                <li className="page-item wow animate__animated animate__fadeIn" data-wow-delay=".3s"><Link className="page-link" href="#">3</Link></li>,
                                                <li className="page-item wow animate__animated animate__fadeIn" data-wow-delay=".2s"><Link className="page-link" href="#">...</Link></li>
                                            )}
                                            <li className="page-item wow animate__animated animate__fadeIn" data-wow-delay=".5s"><Link className="page-link page-next" href="#"><i className="fi-rr-arrow-small-right" /></Link></li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="mb-70" />
                                <h2 className="color-linear d-inline-block mb-10 wow animate__animated animate__fadeInUp">Popular Tags</h2>
                                <p className="text-lg color-gray-500 wow animate__animated animate__fadeInUp">Most searched keywords</p>
                                <div className="row mt-70 mb-50">
                                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                                        <div className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeIn" data-wow-delay="0s">
                                            <div className="card-image"><Link href="/blog-archive"><img src="assets/imgs/page/homepage1/tag1.png" alt="Genz" /></Link></div>
                                            <div className="card-info"><Link className="color-gray-500" href="/blog-archive">Travel</Link></div>
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                                        <div className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeIn" data-wow-delay="0.1s">
                                            <div className="card-image"><Link href="/blog-archive"><img src="assets/imgs/page/homepage1/tag2.png" alt="Genz" /></Link></div>
                                            <div className="card-info"><Link className="color-gray-500" href="/blog-archive"> Culture</Link></div>
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                                        <div className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeIn" data-wow-delay="0.2s">
                                            <div className="card-image"><Link href="/blog-archive"><img src="assets/imgs/page/homepage1/tag3.png" alt="Genz" /></Link></div>
                                            <div className="card-info"><Link className="color-gray-500" href="/blog-archive">Lifestyle</Link></div>
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                                        <div className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeIn" data-wow-delay="0.3s">
                                            <div className="card-image"><Link href="/blog-archive"><img src="assets/imgs/page/homepage1/tag4.png" alt="Genz" /></Link></div>
                                            <div className="card-info"><Link className="color-gray-500" href="/blog-archive">Fashion</Link></div>
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                                        <div className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeIn" data-wow-delay="0.4s">
                                            <div className="card-image"><Link href="/blog-archive"><img src="assets/imgs/page/homepage1/tag5.png" alt="Genz" /></Link></div>
                                            <div className="card-info"><Link className="color-gray-500" href="/blog-archive">Food</Link></div>
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                                        <div className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeIn" data-wow-delay="0.5s">
                                            <div className="card-image"><Link href="/blog-archive"><img src="assets/imgs/page/homepage1/tag6.png" alt="Genz" /></Link></div>
                                            <div className="card-info"><Link className="color-gray-500" href="/blog-archive">Space</Link></div>
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                                        <div className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeIn" data-wow-delay="0.1s">
                                            <div className="card-image"><Link href="/blog-archive"><img src="assets/imgs/page/homepage1/tag7.png" alt="Genz" /></Link></div>
                                            <div className="card-info"><Link className="color-gray-500" href="/blog-archive">Animal</Link></div>
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                                        <div className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeIn" data-wow-delay="0.2s">
                                            <div className="card-image"><Link href="/blog-archive"><img src="assets/imgs/page/homepage1/tag8.png" alt="Genz" /></Link></div>
                                            <div className="card-info"><Link className="color-gray-500" href="/blog-archive">Minimal</Link></div>
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                                        <div className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeIn" data-wow-delay="0.3s">
                                            <div className="card-image"><Link href="/blog-archive"><img src="assets/imgs/page/homepage1/tag9.png" alt="Genz" /></Link></div>
                                            <div className="card-info"><Link className="color-gray-500" href="/blog-archive">Interior</Link></div>
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                                        <div className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeIn" data-wow-delay="0.4s">
                                            <div className="card-image"><Link href="/blog-archive"><img src="assets/imgs/page/homepage1/tag10.png" alt="Genz" /></Link></div>
                                            <div className="card-info"><Link className="color-gray-500" href="/blog-archive">Plant</Link></div>
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                                        <div className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeIn" data-wow-delay="0.5s">
                                            <div className="card-image"><Link href="/blog-archive"><img src="assets/imgs/page/homepage1/tag11.png" alt="Genz" /></Link></div>
                                            <div className="card-info"><Link className="color-gray-500" href="/blog-archive">Nature</Link></div>
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                                        <div className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeIn" data-wow-delay="0.6s">
                                            <div className="card-image"><Link href="/blog-archive"><img src="assets/imgs/page/homepage1/tag12.png" alt="Genz" /></Link></div>
                                            <div className="card-info"><Link className="color-gray-500" href="/blog-archive">Business</Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    )
}

export function getDirectories(postsDirectory) {
    return readdirSync(postsDirectory, { withFileTypes: true }).filter((dirent) => dirent.isDirectory()).map((dirent) => dirent.name);
  }

export async function getServerSideProps(context) {
    const table = [];
    const page = context.resolvedUrl
    readdirSync(`content/${page}`).forEach(file => {
        const fileName = readFileSync(`content/${page}/${file}`, 'utf-8');
        
        const { data: frontmatter, content } = matter(fileName);
        table.push(frontmatter)
    });
    const pages = table.map((frontmatter, content) => (
        {
            frontmatter: frontmatter,
            content: content,
        }
    ));
    return {
      props: {
        pages
      }
    };
  }