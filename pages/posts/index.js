

const Posts = ({ posts }) => {
// const deletePost = () =>{
// if (id !== null && user.name===){
// deletePostFunction({posts.id})
// }
// };

return
(<ul>
    {posts.map((post) => (
      <li key={post.id}>
        <p>{post.body}</p>
        <p>Created by: {post.userName}</p>
        {/* <img
          src={post.userAvatar}
          alt="Image avatar"
          height={100}
          width={100}
        /> */}
        
        <button>DELETE</button>
      </li>
    ))}
  </ul>)

}

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

//   export const deletePostFunction = async (id) => {
// const response = await axios.delete(`https://isdi-blog-posts-api.herokuapp.com/posts/${id}`);

//   }