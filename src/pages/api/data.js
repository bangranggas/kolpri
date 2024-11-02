// src/pages/api/data.js
export async function GET() {
  const timestamp = new Date().getTime();
  const response = await fetch(`https://cdn.jsdelivr.net/gh/bangranggas/webby/data/data.json?timestamp=${timestamp}`);
  const data = await response.json();

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
