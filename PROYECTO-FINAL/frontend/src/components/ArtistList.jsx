// src/components/ArtistList.jsx
import React, { useEffect, useState } from 'react';

export default function ArtistList() {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/artists')
      .then(res => res.json())
      .then(setArtists);
  }, []);

  return (
    <div>
      <h2>Artistas</h2>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>
            <img src={artist.photoUrl} alt={artist.name} width={50} />
            <strong>{artist.name}</strong>
            <p>{artist.bio}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

