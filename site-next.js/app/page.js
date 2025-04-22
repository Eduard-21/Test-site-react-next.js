import Link from "next/link";

async function fetchData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const result = await res.json();
  return result;
}

export default async function Home() {

  const data = await fetchData();
  return (
    <div>
      <h1>Pagina Principala </h1>
      {data.map(el => (
        <div key={el.id} className="post">
          <h2>{el.title}</h2>
          <p>{el.body}</p>
          <Link href={`/post/${el.id}`}>Detalii</Link>
        </div>
      ))}
    </div>
  ) 
}
