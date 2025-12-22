import { useRef, useState } from "react";

const videos = [
  "https://www.w3schools.com/html/mov_bbb.mp4",
  "https://www.w3schools.com/html/movie.mp4",
  "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
];

function App() {
  const videoRef = useRef(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const play = () => videoRef.current.play();
  const pause = () => videoRef.current.pause();
  const forward = () => (videoRef.current.currentTime += 5);
  const rewind = () => (videoRef.current.currentTime -= 5);

  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prev) =>
      prev === 0 ? videos.length - 1 : prev - 1
    );
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Video Player (useRef)</h2>

      <video
        ref={videoRef}
        width="400"
        src={videos[currentVideoIndex]}
      />

      <div style={{ marginTop: "15px" }}>
        <button onClick={play}>▶️ Play</button>
        <button onClick={pause}>⏸ Pause</button>
        <button onClick={rewind}>⏪ Rewind</button>
        <button onClick={forward}>⏩ Forward</button>
      </div>

      <div style={{ marginTop: "10px" }}>
        <button onClick={prevVideo}>⏮ Previous</button>
        <button onClick={nextVideo}>⏭ Next</button>
      </div>
    </div>
  );
}

export default App;
