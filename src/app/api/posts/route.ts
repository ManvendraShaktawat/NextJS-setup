import { NextResponse } from "next/server";

async function fetchPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}

export async function GET() {
  const posts = await fetchPosts();
  return NextResponse.json(posts);
}

export async function POST(request: Request) {
  const body = await request.json(); // Parse the incoming JSON data
  console.log("Received POST request:", body); // Log the data (for testing)
  // The above node log is only showing once as Next.js is by default caching the POST call response
  return NextResponse.json({ message: "Post data received", data: body });
}
