import { usePostsContext } from "../context/PostsContext";

export default function Author(props: { userId: number | undefined }) {
  const authors = usePostsContext().authors;

  function getAuthor(userId: number | undefined) {
    const user = authors?.find((user: { id: number }) => userId === user.id);
    return user ? `${user.username}, ${user.name}` : "No user";
  }

  return <>{getAuthor(props.userId)}</>;
}
