import React from "react";
import { createContext, useContext } from "react";
import { useQuery } from "react-query";
import IPostsContext from "../interfaces/IPostsContext";
import { TAuthor } from "../interfaces/TAuthors";
import { TPost } from "../interfaces/TPost";

const PostsContext = createContext({} as IPostsContext);

/**
 * Getting posts data from json
 * @returns posts
 */
const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: TPost[] = await res.json();
  return {
    props: {
      posts,
    },
  };
};

/**
 * Getting users(authors) data from json
 * @returns authors
 */
const fetchAuthors = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const authors: TAuthor[] = await res.json();
  return {
    props: {
      authors,
    },
  };
};

export function PostsWrapper({ children }: { children: any }) {
  const { data: postsData } = useQuery("posts", fetchPosts);
  const posts = postsData?.props.posts;

  const { data: authorsData } = useQuery("authors", fetchAuthors);
  const authors = authorsData?.props.authors;

  return (
    <PostsContext.Provider value={{ posts, authors }}>
      {children}
    </PostsContext.Provider>
  );
}

export function usePostsContext() {
  return useContext(PostsContext);
}
