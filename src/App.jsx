import { MyPlayer } from './MyPlayer.jsx';
import './App.css';

function App() {
  return (
    <>
      {
        'Headless libraries only encapsulate logic (like done heere in usePlayer custom hook) and leave the UI to be handled by the consumer (UI is unopinionated)'
      }
      <br /> <br />
      <MyPlayer
        src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
        width={400}
      />
    </>
  );
}

export default App;
