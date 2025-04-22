import Link from "next/link";

const post = ({post}) => {
    return (
      <div>
        <Link href="/">Inapoi</Link>
        <h2> {post.title} </h2>
        <p>{post.body}</p>
        <strong>Post ID : {post.userId}</strong>
      </div>
    );
  };

  export default post;