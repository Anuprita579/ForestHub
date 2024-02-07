import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';
import L from 'leaflet';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';

const Maps = () => {
  const [forestLocations, setForestLocations] = useState([]);

  useEffect(() => {
    // Replace 'YOUR_LOCATIONIQ_API_KEY' with your LocationIQ API key
    const locationIQApiKey = 'pk.ef0df4a0dbef4cf5187f28f4d9130bf6';

    // Replace 'forest' with your desired location type
    const locationType = 'forest';

    const fetchForestLocations = async () => {
      try {
        const response = await axios.get(
          `https://us1.locationiq.com/v1/search.php?key=${locationIQApiKey}&q=${encodeURIComponent(
            locationType
          )}&format=json`
        );
        setForestLocations(response.data);
      } catch (error) {
        console.error('Error fetching forest locations:', error);
      }
    };

    fetchForestLocations();
  }, []);

  const customMarkerIcon = new L.Icon({
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  const getShortDisplayName = (displayName) => {
    const firstCommaIndex = displayName.indexOf(',');
    return firstCommaIndex !== -1 ? displayName.slice(0, firstCommaIndex) : displayName;
  };

  return (
    <div className='h-screen w-screen' >
      {forestLocations.length > 0 && (
        <MapContainer center={[forestLocations[0].lat, forestLocations[0].lon]} zoom={12} style={{ height: '100%', width: '100%' }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />

          {forestLocations.map((location, index) => (
            <Marker key={index} position={[location.lat, location.lon]} icon={customMarkerIcon}>
              <Popup>
                {location.display_name}
                <div>
                  <Link to={`https://en.wikipedia.org/wiki/${encodeURIComponent(getShortDisplayName(location.display_name))}`}><button className='bg-green-800 p-2 m-2 text-white'>Know More</button></Link>
                  <Link to="/identify"><button className='bg-green-800 p-2 m-2 text-white'>Book Ticket</button></Link>
                </div>
                
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      )}
    </div>
  );
};

export default Maps;
