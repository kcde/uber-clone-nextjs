import { useEffect, useState, useRef } from 'react';
import tw from 'tailwind-styled-components';
import mapboxgl from '!mapbox-gl';

mapboxgl.accessToken =
  'pk.eyJ1IjoibGFtYmEtanV3b24iLCJhIjoiY2t6YnhmYm9zMXRlNDJwczh6eXVqcWd1YyJ9.ovakTKfnCbRdvNmkRIu-8w';

const Wrapper = tw.div`
  flex-1  h-1/2
  `;

const Map = ({ pickup, dropof }) => {
  const mapContainer = useRef(null);

  const addToMap = (map, pickupCoords, dropofCoords) => {
    const fromMarker = new mapboxgl.Marker().setLngLat(pickupCoords).addTo(map);
    const toMarker = new mapboxgl.Marker().setLngLat(dropofCoords).addTo(map);
  };

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
      center: [-70.9, 42.35],
      zoom: 1,
    });

    if (pickup && dropof) {
      addToMap(map, pickup, dropof);
      map.fitBounds([pickup, dropof], {
        padding: 80,
      });
    }
  }, [pickup, dropof]);

  return <Wrapper ref={mapContainer}></Wrapper>;
};

export default Map;
