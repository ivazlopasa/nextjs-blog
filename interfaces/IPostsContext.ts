import IAuthor from "./IAuthors";
import IImage from "./IImage";
import  IPost  from "./IPost";

export default interface IPostsContext {
    posts: IPost[] | undefined;
    authors: IAuthor[] | undefined;
    images: IImage [] | undefined
  }