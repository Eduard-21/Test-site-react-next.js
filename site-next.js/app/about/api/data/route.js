export const dynamic = "force-static";

export async function GET(request) {
  const data = {
    name: "John Doe",
    age: 30,
    bio: "Some info",
  };

  return new Response(JSON.stringify(data));
}

export async function POST(request) {
  return new Response(request.body);
}

export async function DELETE(request) {
  return new Response(request.body);
}