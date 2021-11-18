const postsSSG = ({ posts }) => (
  <>
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.body}</li>
      ))}
    </ul>
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
