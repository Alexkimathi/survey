'use client';

import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { MERU_COORDS } from '@/lib/data';

export default function LeafletMap() {
  useEffect(() => {
    import('leaflet').then((L) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconUrl: '/leaflet/marker-icon.png',
        iconRetinaUrl: '/leaflet/marker-icon-2x.png',
        shadowUrl: '/leaflet/marker-shadow.png',
      });
    });
  }, []);

  return (
    <MapContainer
      center={MERU_COORDS}
      zoom={15}
      scrollWheelZoom={false}
      className="w-full h-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={MERU_COORDS}>
        <Popup>
          <strong>PointMap Solutions</strong>
          <br />
          International House, Mezzanine Floor
          <br />
          Njuri Ncheke Street, Meru, Kenya
        </Popup>
      </Marker>
    </MapContainer>
  );
}
