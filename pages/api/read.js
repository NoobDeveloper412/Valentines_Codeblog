import matter from 'gray-matter';

const docsDirectory = join(process.cwd(), 'docs');

export function getDocBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(docsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return { slug: realSlug, meta: data, content };
}

