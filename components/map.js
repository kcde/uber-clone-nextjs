import { useEffect, useState, useRef } from 'react';
import tw from 'tailwind-styled-components';
import mapboxgl from '!mapbox-gl';

mapboxgl.accessToken =
  'pk.eyJ1IjoibGFtYmEtanV3b24iLCJhIjoiY2t6YnhmYm9zMXRlNDJwczh6eXVqcWd1YyJ9.ovakTKfnCbRdvNmkRIu-8w';

const Wrapper = tw.div`
  flex-1 bg-red-100
  `;

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
      center: [lng, lat],
      zoom: zoom,
    });
  });
  return <Wrapper ref={mapContainer}>Map section</Wrapper>;
};

export default Map;
