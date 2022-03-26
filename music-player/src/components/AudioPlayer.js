import React, { useRef, useState, useEffect } from "react";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key.toLocaleLowerCase() === "l") {
        togglePlaySpeedUp();
      } else if (e.key.toLocaleLowerCase() === "j") {
        // togglePlaySpeedDown();
      } else if (e.key.toLocaleLowerCase() === "k") {
        console.log("k is pressed");
      }
    });
  }, []);

  const audioPlayer = useRef();

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    }
  };

  const togglePlaySpeedUp = () => {
    console.log(audioPlayer.current.playbackRate);
    if (audioPlayer.current.playbackRate === 1) {
      audioPlayer.current.playbackRate = 2;
    } else if (audioPlayer.current.playbackRate === 2) {
      audioPlayer.current.playbackRate = 3;
    } else if (audioPlayer.current.playbackRate === 3) {
      audioPlayer.current.playbackRate = 4;
    } else if (audioPlayer.current.playbackRate === 4) {
      audioPlayer.current.playbackRate = 5;
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
        <button onClick={togglePlaySpeedDown} className="button-rhythm">
          J
        </button>
        <button onClick={togglePlayPause} className="button-rhythm">
          K
        </button>
        <button onClick={togglePlaySpeedUp} className="button-rhythm">
          L
        </button>
      </div>
    </div>
  );
};

export default AudioPlayer;
