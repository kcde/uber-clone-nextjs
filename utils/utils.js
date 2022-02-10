export async function getCoords(search) {
  const req = await fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${search}.json?${new URLSearchParams({
      access_token:
        'pk.eyJ1IjoibGFtYmEtanV3b24iLCJhIjoiY2t6YnhmYm9zMXRlNDJwczh6eXVqcWd1YyJ9.ovakTKfnCbRdvNmkRIu-8w',
      limit: 1,
    })}`
  );

  const res = await req.json();

  const data = await res.features[0].center;
  return data;
}
