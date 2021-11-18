import axios from "axios";
import Post from "../components/Pos/Post";

const Home = ({ posts }) => (
  <>
    <h1>CSRPage</h1>
    {posts ? (
      posts.map((post) => <Post key={post.id} post={post} />)
    ) : (
      <h3>LOADING</h3>
    )}
  </>
);

export async function getServerSideProps() {
  const { data: posts } = await axios(
    "https://isdi-blog-posts-api.herokuapp.com/posts"
  );

  return { props: { posts } };
}

export default Home;
