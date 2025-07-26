import React from 'react';
import { MyPlayer } from './MyPlayer.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>CRA App - Video Player Demo</h1>
        <p>
          This CRA app consumes the headless-video-player-lib library.
        </p>
        <p>
          Headless libraries only encapsulate logic (like done here in usePlayer custom hook)
          and leave the UI to be handled by the consumer (UI is unopinionated)
        </p>
        <br />
        <div style={{ marginBottom: '20px' }}>
          <MyPlayer
            src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
            width={400}
          />
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
