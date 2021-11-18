const Posts = ({ posts }) => (
  <ul>
    {posts.map((post) => (
      <li key={post.id}>{post.body}</li>
    ))}
  </ul>
);

export default Posts;

export const getServerSideProps = async () => {
  const response = await fetch(
    "https://isdi-blog-posts-api.herokuapp.com/posts"
  );
  const posts = await response.json();

  return {
    props: { posts },
  };
};
