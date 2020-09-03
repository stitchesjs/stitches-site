// @ts-ignore
import { frontMatter } from '../pages/docs/**/*.mdx';
import { FrontMatter } from '../types';

export const docsPosts: FrontMatter[] = frontMatter;

export const getDocById = (id) => {
  const [post] = docsPosts.filter((post) => post.id === id);

  if (Object.keys(post).length === 0) {
    throw new Error(`Cannot find documentaion post by id - ${id}`);
  }

  return post;
};
