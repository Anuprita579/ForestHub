import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';
// import '../Excel/list.csv'

export default function Maps() {
  //const XLSX = require('xlsx');
  const locationIQApiKey = '4d4b8902c68847778ce97f2f34f1e89b';
  // const excelFilePath = "C:/Users/Shravani/Documents/GitHub/ForestHub/src/Excel/list.csv";


  const [forestLocations, setForestLocations] = useState([]);

  useEffect(() => {
    const fetchForestLocations = async () => {
      try {
        const forestLocationsArray = [
          "Anshi National Park",
          "Balphakram National Park",
          "Bandhavgarh National Park",
          "Bandipur National Park",
          "Bannerghatta National Park",
          "Vansda National Park",
          "Betla National Park",
          "Bhitarkanika National Park",
          "Blackbuck National Park, Velavadar",
          "Buxa Tiger Reserve",
          "Campbell Bay National Park",
          "Chandoli National Park",
          "Jim Corbett National Park",
          "Dachigam National Park",
          "Darrah National Park",
          "Desert National Park",
          "Dibru-Saikhowa National Park",
          "Dudhwa National Park",
          "Eravikulam National Park",
          "Mandla Plant Fossils National Park",
          "Galathea National Park",
          "Gangotri National Park",
          "Gir Forest National Park",
          "Gorumara National Park",
          "Govind Pashu Vihar Wildlife Sanctuary",
          "Great Himalayan National Park",
          "Gugamal National Park",
          "Guindy National Park",
          "Marine National Park, Gulf of Kutch",
          "Gulf of Mannar Marine National Park",
          "Hemis National Park",
          "Harike Wetland",
          "Hazaribagh National Park",
          "Indira Gandhi Wildlife Sanctuary and National Park",
          "Indravati National Park",
          "Jaldapara National Park",
          "Ntangki National Park",
          "Kalesar National Park",
          "Kanha National Park",
          "Kanger Ghati National Park",
          "Kasu Brahmananda Reddy National Park",
          "Kaziranga National Park",
          "Keibul Lamjao National Park",
          "Keoladeo National Park",
          "Khangchendzonga National Park",
          "Kishtwar National Park",
          "Kudremukh National Park",
          "Madhav National Park",
          "Mahatma Gandhi Marine National Park",
          "Mahavir Harina Vanasthali National Park",
          "Manas National Park",
          "Mathikettan Shola National Park",
          "Middle Button Island National Park",
          "Mollem National Park",
          "Mouling National Park",
          "Mount Abu Wildlife Sanctuary",
          "Mount Harriet National Park",
          "Mrugavani National Park",
          "Mudumalai National Park",
          "Mukurthi National Park",
          "Murlen National Park",
          "Namdapha National Park",
          "Nameri National Park",
          "Nanda Devi National Park",
          "Nandankanan Zoological Park",
          "Navegaon National Park",
          "Neora Valley National Park",
          "Nokrek National Park",
          "North Button Island National Park",
          "Orang National Park",
          "Palani Hills National Park",
          "Panna National Park",
          "Pench National Park",
          "Periyar National Park",
          "Phawngpui Blue Mountain National Park",
          "Pin Valley National Park",
          "Rajaji National Park",
          "Nagarhole National Park",
          "Rani Jhansi Marine National Park",
          "Ranthambore National Park",
          "Saddle Peak National Park",
          "Salim Ali National Park",
          "Sanjay National Park",
          "Sanjay Gandhi National Park",
          "Sariska Tiger Reserve",
          "Satpura National Park",
          "Silent Valley National Park",
          "Sirohi National Park",
          "Simlipal National Park",
          "Singalila National Park",
          "South Button Island National Park",
          "Sri Venkateswara National Park",
          "Sultanpur National Park",
          "Sundarbans National Park",
          "Tadoba National Park",
          "Valley of Flowers National Park",
          "Valmiki National Park",
          "Papikonda National Park"
        ];
        
        

        // Fetch coordinates for each forest location
        const promises = forestLocationsArray.map(async (location) => {
          const response = await axios.get(
            `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(location)}&key=${locationIQApiKey}`
          );
          const firstResult = response.data.results[0];
          const { lat, lng } = firstResult.geometry;

          return { name: location, lat, lon: lng };
        });

        // Wait for all promises to resolve
        const resolvedLocations = await Promise.all(promises);

        setForestLocations(resolvedLocations);
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

  const handleKnowMore = (displayName) => {
    window.open(`https://en.wikipedia.org/wiki/${encodeURIComponent(displayName)}`)
  }

  const handleShare = (displayName) => {
    const shareText = `Checkout this forest location : ${displayName}`
    const shareURL = window.location.href
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + '\n' + shareURL)}`)
  }

  return (
    <div className='h-screen w-screen'>
      {forestLocations.length > 0 && (
        <MapContainer center={[0, 0]} zoom={2} style={{ height: '100%', width: '100%' }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />

          {forestLocations.map((location, index) => (
            <Marker key={index} position={[location.lat, location.lon]} icon={customMarkerIcon}>
              <Popup>
                {location.name}
                <div>
                  <button className='bg-green-800 p-2 m-2 text-white' onClick={()=>handleKnowMore(location.display_name)}>Know More</button>
                  <button className='bg-green-800 p-2 m-2 text-white' onClick={()=>handleShare(location.display_name)}>Share</button>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      )}
    </div>
  );
}
