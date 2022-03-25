import React, { useRef, useState } from "react";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const audioPlayer = useRef();

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    }
  };

  return (
    <div>
      <p>Audio Player</p>

      <audio ref={audioPlayer} controls>
        <source
          src="https://www2.cs.uic.edu/~i101/SoundFiles/StarWars60.wav"
          type="audio/wav"
        />
        Your browser does not support the audio element.
      </audio>

      <div>
        <button className="button-rhythm">J</button>
        <button onClick={togglePlayPause} className="button-rhythm">K</button>
        <button className="button-rhythm">L</button>
      </div>
    </div>
  );
};

export default AudioPlayer;
