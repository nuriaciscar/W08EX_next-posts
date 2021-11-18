const Post = ({ post }) => (
  <li key={post.id}>
    <h3>{post.title}</h3>
    <p>{post.body}</p>
  </li>
);

export default Post;
