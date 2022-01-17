import { TAuthor } from "./TAuthors";
import { TImage } from "./TImage";
import { TPost } from "./TPost";

export default interface IPostsContext {
    posts: TPost[] | undefined;
    authors: TAuthor[] | undefined;
    images: TImage [] | undefined
  }