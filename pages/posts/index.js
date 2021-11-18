const Posts = ({ posts }) => (
  <ul>
    {posts.map((post) => (
      <li key={post.id}>
        {post.body}
        <p>Created by: {post.userName}</p>
        <img
          src={post.userAvatar}
          alt="Image avatar"
          height={100}
          width={100}
        ></img>
      </li>
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
