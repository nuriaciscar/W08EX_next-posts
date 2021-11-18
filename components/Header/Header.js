import Link from "next/link";

const Header = () => (
  <ul>
    <li>
      <Link href="/posts">Posts</Link>
      <Link href="/create">Create posts</Link>
      <Link href="/postsSSG">Posts SSG</Link>
    </li>
  </ul>
);

export default Header;
