import React from "react";

const AudioPlayer = () => {
  return (
    <div>
      <p>Audio Player</p>

      <audio controls>
        <source src="../../music/file_example_WAV_1MG.wav" type="audio/wav" />
        Your browser does not support the audio element.
      </audio>

      <div>
        <button className="button-rhythm">J</button>
        <button className="button-rhythm">K</button>
        <button className="button-rhythm">L</button>
      </div>
    </div>
  );
};

export default AudioPlayer;
