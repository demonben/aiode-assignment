import React, { useRef, useEffect, useState } from "react";

const AudioPlayer = () => {
  const [isPressed, setIsPressed] = useState(true);
  const audioPlayer = useRef();
  const kButton = useRef();

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      shortcutHandler(e);
    });
  }, []);

  const shortcutHandler = (e) => {
    if (e.key.toLocaleLowerCase() === "l") {
      togglePlaySpeedUp();
    } else if (e.key.toLocaleLowerCase() === "j") {
      togglePlaySpeedDown();
    } else if (e.key.toLocaleLowerCase() === "k") {
      kButton.current.click();
    } else if (e.key.toLocaleLowerCase() === "escape") {
      window.location.reload(false);
    }
  };

  const togglePlayPause = () => {
    if (audioPlayer.current.playbackRate === 1) {
      audioPlayer.current.playbackRate = 0;
    } else {
      audioPlayer.current.playbackRate = 1;
    }
  };
  const togglePlaySpeedDown = () => {
    if (audioPlayer.current.playbackRate !== -5) {
      audioPlayer.current.playbackRate = audioPlayer.current.playbackRate - 1;
      console.log(audioPlayer.current.playbackRate);
    }
  };
  const togglePlaySpeedUp = () => {
    if (audioPlayer.current.playbackRate !== 5) {
      audioPlayer.current.playbackRate = audioPlayer.current.playbackRate + 1;
      console.log(audioPlayer.current.playbackRate);
    }
  };
  function gFunction() {
    let gIsPressed = isPressed;
    setIsPressed(!gIsPressed);
  }

  return (
    <div >
      <audio className="audio-player" ref={audioPlayer} controls>
        <source
          src="https://www2.cs.uic.edu/~i101/SoundFiles/StarWars60.wav"
          type="audio/wav"
        />
        Your browser does not support the audio element.
      </audio>

      <div className="button-wraper">
        <button onClick={togglePlaySpeedDown} className="button-rhythm">
          J
        </button>
        <button
          ref={kButton}
          onClick={() => {
            togglePlayPause();
            gFunction();
          }}
          className={isPressed ? "button-rhythm" : "active"}
        >
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
