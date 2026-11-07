
import React, { useRef, useState, useEffect } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = 0.2;

    const tryAutoplay = async () => {
      try {
        await audio.play();
        setPlaying(true);
      } catch (error) {
        console.log("Autoplay blocked. Waiting for user interaction.");
      }
    };

    tryAutoplay();

    // Start music after the first visitor interaction if autoplay is blocked.
    const startMusic = async () => {
      try {
        await audio.play();
        setPlaying(true);
      } catch (error) {
        console.log("Music playback unavailable:", error);
      }
    };

    window.addEventListener("pointerdown", startMusic, { once: true });

    return () => {
      window.removeEventListener("pointerdown", startMusic);
    };
  }, []);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
      } catch (error) {
        console.error(error);
      }
    } else {
      audio.pause();
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/audio/atlasaudio-relaxing-piano-621596.mp3"
        loop
        preload="auto"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />

      <button
        onClick={toggleMusic}
        className="fixed bottom-24 right-5 z-[10000] bg-teal-600 hover:bg-teal-700 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-xl"
        aria-label={playing ? "Pause music" : "Play music"}
      >
        {playing ? "🔊" : "🎵"}
      </button>
    </>
  );
}
