import React, { useEffect, useState } from 'react';

export default function SongList() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/songs')
      .then(res => res.json())
      .then(setSongs);
  }, []);

  return (
    <div>
      <h2>Lista de Canciones</h2>
      <ul>
        {songs.map(song => (
          <li key={song.id}>
            <strong>{song.title}</strong> - {song.releaseYear} ({song.duration}s)
          </li>
        ))}
      </ul>
    </div>
  );
}
