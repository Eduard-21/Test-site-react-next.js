import Post from "@/app/component/post";

export async function generateStaticParams() {
  // Definește valorile statice pentru `id`
  const ids = ["1", "2", "3"]; // Poți adăuga mai multe ID-uri aici
  return ids.map((id) => ({ id }));
}

export async function generateMetadata({ params }) {
  const post = await fetchData(params.id);
  return {
    title: post.title,
    description: post.body,
  };
}

async function fetchData(id) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
  const result = await res.json();
  return result;
}

const PagePost = async ({ params: { id } }) => {
  const post = await fetchData(id);
  return (
    <div className="post">
      <Post post={post} />
    </div>
  );
};

export default PagePost;

//   export default async function Post({ params }) {
//     return (
//       <div>
//         <h1>Post ID:</h1>
//         <p>{params.id}</p>
//       </div>
//     );
//   }
