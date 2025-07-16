// app/api/users/route.ts

export const users = [
  { id: 1, name: "Rahat" },
  { id: 2, name: "alamin" }
];

// GET request handler
export async function GET() {
  return Response.json(users); // ✅ This is correct in Next.js 15
}

// POST request handler
export async function POST(request: Request) {
  const body = await request.json(); // ✅ Need to await the async `.json()`

  const newUser = {
    id: users.length + 1,
    name: body.name as string
  };

  users.push(newUser);

  return new Response(JSON.stringify(newUser), {
    headers: {
      "Content-Type": "application/json"
    },
    status: 201
  });
}
