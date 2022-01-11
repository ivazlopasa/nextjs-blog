import { TAuthor } from "./TAuthors";
import { TPost } from "./TPost";

export default interface IPostsContext {
    posts: TPost[] | undefined;
    authors: TAuthor[] | undefined;
  }