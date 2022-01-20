import React from "react";
import { createContext, useContext } from "react";
import { useQuery } from "react-query";
import IPostsContext from "../interfaces/IPostsContext";
import IAuthor from "../interfaces/IAuthors";
import IPost from "../interfaces/IPost";

const PostsContext = createContext({} as IPostsContext);

/**
 * Getting posts data from json
 * @returns posts
 */
const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: IPost[] = await res.json();
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
  const authors: IAuthor[] = await res.json();
  return {
    props: {
      authors,
    },
  };
};

const fetchImages = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos");
  const images = await res.json();
  return {
    props: {
      images,
    },
  };
};

export function PostsWrapper({ children }: { children: any }) {
  const { data: postsData } = useQuery("posts", fetchPosts);
  const posts = postsData?.props.posts;

  const { data: authorsData } = useQuery("authors", fetchAuthors);
  const authors = authorsData?.props.authors;

  const { data: imagesData } = useQuery("images", fetchImages);
  const images = imagesData?.props.images;

  return (
    <PostsContext.Provider value={{ posts, authors, images }}>
      {children}
    </PostsContext.Provider>
  );
}

export function usePostsContext() {
  return useContext(PostsContext);
}
