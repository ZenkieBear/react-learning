import { useEffect, useRef, useState } from "react";
import ChatRoom from "./ChatRoom";

export function MyComponent() {
// export default function MyComponent() {
  useEffect(() => {
    
  });
  return <div />
}

function VideoPlayer({ src, isPlaying}: VideoPlayerProps) {
  const ref = useRef<HTMLVideoElement>(null);

  // const current = ref.current as HTMLVideoElement;
  // if (isPlaying) {
  //   current.play();
  // } else {
  //   current.pause();
  // }
  useEffect(() => {
    const current = ref.current as HTMLVideoElement;
    if (isPlaying) {
      console.log('Calling video.play()')
      current.play();
    } else {
      console.log('Calling video.pause()')
      current.pause();
    }
    // skip unnecessarily re-running the Effect by specifying an array
  }, [isPlaying])
  return <video ref={ref} src={src} loop playsInline />
}

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [text, setText] = useState('');

  return (
    <>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <VideoPlayer
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        isPlaying={isPlaying}
      />
      <ChatRoom />
    </>
  )
}
