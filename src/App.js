import {useEffect, useState} from 'react';
import './App.css';

function App() {
const [activeKey, setActiveKey] = useState('');

useEffect(() => {
  document.addEventListener('keydown', (event)=> {
  playSound(event.key.toUpperCase())
  })
}, [])

  const drumPads = [
    {
      keyCode: 81,
      key: "Q",
      id: "Heater-1",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    },
    {
      keyCode: 87,
      key: "W",
      id: "Heater-2",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
    },
    {
      keyCode: 69,
      key: "E",
      id: "Heater-3",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
    },
    {
      keyCode: 65,
      key: "A",
      id: "Heater-4",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
    },
    {
      keyCode: 83,
      key: "S",
      id: "Heater-6",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
    },
    {
      keyCode: 68,
      key: "D",
      id: "Open HH",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
    },
    {
      keyCode: 90,
      key: "Z",
      id: "Kick n' Hat",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
    },
    {
      keyCode: 88,
      key: "X",
      id: "Kick",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
    },
    {
      keyCode: 67,
      key: "C",
      id: "Closed HH",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    }
  ];

function playSound(selector) {
const audio = document.getElementById(selector);
audio.play();
setActiveKey(selector);
}

  return (
    <div className="App">
      <div id="drum-machine">
        <div className="drum-pads">
        {drumPads.map((drumPad) => (
        <div key={drumPad.src}
          onClick={() => {
          playSound(drumPad.key)}}
          className="drum-pad" id={drumPad.src}>
          {drumPad.key}
          <audio className="clip" id={drumPad.key} src={drumPad.src}></audio>
          </div>
        ))}
        </div>
        <div id="display">
          {activeKey}
        </div>
      </div>
    </div>
  );
}

export default App;
