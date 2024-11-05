import fetch from 'node-fetch';

export async function GET({ params, request }) {
  try {
    // URL JSON di GitHub
    const cat = params.cat;
    const url = 'https://raw.githubusercontent.com/bangranggas/webby/main/data/data.json';

    // Ambil data dari GitHub
    const response = await fetch(url);
    const data = await response.json();

    // Filter data berdasarkan category jika parameter tersedia
    const filteredData = cat ? data.filter((item) => item.category === cat) : data;

    return new Response(JSON.stringify(filteredData), {
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

export function getStaticPaths() {
  return [
    { params: { cat: 'SHOWOFF' } },
    { params: { cat: 'NYEP' } },
    { params: { cat: 'NGOBROL' } },
    { params: { cat: 'DIEM' } },
    { params: { cat: 'BERISIK' } },
    { params: { cat: 'PACK-NGEW' } },
    { params: { cat: 'PACK-SHOW' } },
    { params: { cat: 'VIRAL' } },
    { params: { cat: 'COLMEK' } },
    { params: { cat: 'FOTO' } },
  ];
}
