import fetch from 'node-fetch';

export async function GET(context) {
  try {
    // URL JSON di GitHub
    const url = 'https://raw.githubusercontent.com/bangranggas/webby/main/data/data.json';

    // Ambil data dari GitHub
    const response = await fetch(url);
    const data = await response.json();

    return new Response(JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error fetching data:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch data' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
