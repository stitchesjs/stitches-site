import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import readingTime from 'reading-time';

const ROOT_PATH = process.cwd();
export const DATA_PATH = path.join(ROOT_PATH, 'data');

export const BLOG_PATH = path.join(DATA_PATH, 'blog');

// the list of all mdx files inside the `BLOG_PATH` directory
export const blogPostsPaths = fs.readdirSync(BLOG_PATH).filter((path) => /\.mdx?$/.test(path));

// the front matter and content of all mdx files based on `blogPostsPaths`
export const getAllBlogPosts = () => {
  return blogPostsPaths
    .map((filePath) => {
      const source = fs.readFileSync(path.join(BLOG_PATH, filePath), 'utf8');
      const { data, content } = matter(source);

      return {
        data: {
          ...data,
          wordCount: content.split(/\s+/g).length,
          readingTime: readingTime(content),
        },
        content,
        slug: filePath.replace('.mdx', ''),
      };
    })
    .sort((a, b) => Number(new Date(b.data.publishedAt)) - Number(new Date(a.data.publishedAt)));
};

export const getBlogPostBySlug = (slug) => {
  const source = fs.readFileSync(path.join(BLOG_PATH, `${slug}.mdx`), 'utf8');
  const { data, content } = matter(source);

  return {
    data: {
      ...data,
      wordCount: content.split(/\s+/g).length,
      readingTime: readingTime(content),
    },
    content,
    slug,
  };
};

export const DOCS_PATH = path.join(DATA_PATH, 'docs');
// the list of all mdx files inside the `DOCS_PATH` directory
export const docsPaths = fs.readdirSync(DOCS_PATH).filter((path) => /\.mdx?$/.test(path));

// the front matter and content of all mdx files based on `docsPaths`
export const getAllDocs = () => {
  return docsPaths.map((filePath) => {
    const source = fs.readFileSync(path.join(DOCS_PATH, filePath), 'utf8');
    const { data, content } = matter(source);

    return {
      data,
      content,
      slug: filePath.replace('.mdx', ''),
    };
  });
};

export const getDocBySlug = (slug) => {
  const source = fs.readFileSync(path.join(DOCS_PATH, `${slug}.mdx`), 'utf8');
  const { data, content } = matter(source);

  return {
    data,
    content,
    slug,
  };
};
