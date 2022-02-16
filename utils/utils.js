const token =
  'pk.eyJ1IjoibGFtYmEtanV3b24iLCJhIjoiY2t6YnhmYm9zMXRlNDJwczh6eXVqcWd1YyJ9.ovakTKfnCbRdvNmkRIu-8w';
export async function getCoords(search) {
  const req = await fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${search}.json?${new URLSearchParams({
      access_token: token,
      limit: 1,
    })}`
  );

  const res = await req.json();

  const data = await res.features[0].center;
  return data;
}

export async function getRouteDuration(pickupCoords, dropofCoords) {
  const res = await fetch(
    `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoords.join(
      ','
    )}%3B${dropofCoords.join(',')}?${new URLSearchParams({
      access_token: token,
    })}`
  );

  const data = await res.json();

  const duration = data.routes[0].duration;
  return duration;
}
