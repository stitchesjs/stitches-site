import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import readingTime from 'reading-time';
import type { BlogFrontmatter } from 'types/blog';
import type { DocFrontmatter } from 'types/doc';

const ROOT_PATH = process.cwd();
export const DATA_PATH = path.join(ROOT_PATH, 'data');

export const BLOG_PATH = path.join(DATA_PATH, 'blog');

// the list of all mdx files inside the `BLOG_PATH` directory
export const blogPostsPaths = fs.readdirSync(BLOG_PATH).filter((path) => /\.mdx?$/.test(path));

// the front matter and content of all mdx files based on `blogPostsPaths`
export const getAllBlogPostsFrontmatter = () => {
  return blogPostsPaths.map((filePath) => {
    const source = fs.readFileSync(path.join(BLOG_PATH, filePath), 'utf8');
    const { data } = matter(source);

    return {
      ...(data as BlogFrontmatter),
      slug: filePath.replace('.mdx', ''),
    } as BlogFrontmatter;
  });
};

export const getBlogPostBySlug = (slug) => {
  const source = fs.readFileSync(path.join(BLOG_PATH, `${slug}.mdx`), 'utf8');
  const { data, content } = matter(source);

  return {
    frontmatter: {
      ...(data as BlogFrontmatter),
      wordCount: content.split(/\s+/g).length,
      readingTime: readingTime(content),
      slug,
    } as BlogFrontmatter,
    content,
  };
};

export const DOCS_PATH = path.join(DATA_PATH, 'docs');
// the list of all mdx files inside the `DOCS_PATH` directory
export const docsPaths = fs.readdirSync(DOCS_PATH).filter((path) => /\.mdx?$/.test(path));

// the front matter and content of all mdx files based on `docsPaths`
export const getAllDocsFrontmatter = () => {
  return docsPaths.map((filePath) => {
    const source = fs.readFileSync(path.join(DOCS_PATH, filePath), 'utf8');
    const { data } = matter(source);

    return {
      ...(data as DocFrontmatter),
      slug: filePath.replace('.mdx', ''),
    } as DocFrontmatter;
  });
};

export const getDocBySlug = (slug) => {
  const source = fs.readFileSync(path.join(DOCS_PATH, `${slug}.mdx`), 'utf8');
  const { data, content } = matter(source);

  return {
    frontmatter: {
      ...(data as DocFrontmatter),
      slug,
    } as DocFrontmatter,
    content,
  };
};
