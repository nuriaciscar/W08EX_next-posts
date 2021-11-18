import { useRouter } from "next/router";

const Post = ({ post }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <h2>LOADING... </h2>;
  }
  return (
    <>
      <p>{post.body}</p>
    </>
  );
};
export const getStaticPaths = async () => {
  const response = await fetch(
    "https://isdi-blog-posts-api.herokuapp.com/posts"
  );
  const postApi = await response.json();

  const paths = postApi.map((post) => ({ params: { id: `${post.id}` } }));
  return {
    paths,
    fallback: true, // See the "fallback" section below
  };
};

export const getStaticProps = async ({ params: { id } }) => {
  const response = await fetch(
    `https://isdi-blog-posts-api.herokuapp.com/posts${id}`
  );
  const postApi = await response.json();
  return {
    props: {
      post: postApi,
    },
  };
};
