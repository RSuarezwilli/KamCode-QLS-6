import React from 'react';
import ArtistList from './components/ArtistList';
import SongList from './components/SongList';

function App() {
  return (
    <div>
      <h1>Biblioteca de Música</h1>
      <ArtistList />
      <SongList />
    </div>
  );
}

export default App;
