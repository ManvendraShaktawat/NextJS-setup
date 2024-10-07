export default async function PostsPage() {
  const URL = "http://localhost:3000/api/posts";
  const response = await fetch(URL);
  const posts = await response.json();

  fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "New Post",
      content: "This is a new post.",
    }),
  })
    .then((response) => response.json())
    .then(console.log);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.slice(0, 5).map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
