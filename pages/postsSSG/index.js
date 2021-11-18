import Post from "@/components/Pos/Post";

const postsSSG = ({ posts }) => (
  <>
    <h1>SSGPage</h1>

    {posts.map((post) => (
      <Post key={post.id} post={post} />
    ))}
  </>
);

export default postsSSG;

export const getStaticProps = async () => {
  const response = await fetch(
    "https://isdi-blog-posts-api.herokuapp.com/posts"
  );
  const posts = await response.json();

  return {
    props: { posts },
  };
};
