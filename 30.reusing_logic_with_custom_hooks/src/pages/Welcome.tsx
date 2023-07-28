import { useEffect, useRef, useState } from "react";
import { useFadeIn } from "./fadeIn";

export function Welcome() {
  const ref = useRef<HTMLHeadingElement>(null);

  // useEffect(() => {
  //   const duration = 1000;
  //   const node = ref.current;

  //   let startTime: number | null = performance.now();
  //   let frameId: number | null = null;

  //   function onFrame(now: number) {
  //     if (!startTime) return;
  //     const timePassed = now - startTime;
  //     const progress = Math.min(timePassed / duration, 1);
  //     onProgress(progress);
  //     if (progress < 1) {
  //       frameId = requestAnimationFrame(onFrame);
  //     }
  //   }

  //   function onProgress(progress: number) {
  //     if (node) {
  //       node.style.opacity = progress.toString();
  //     }
  //   }

  //   function start() {
  //     onProgress(0);
  //     startTime = performance.now();
  //     frameId = requestAnimationFrame(onFrame);
  //   }

  //   function stop() {
  //     frameId && cancelAnimationFrame(frameId);
  //     startTime = null;
  //     frameId = null
  //   }

  //   start()
  //   return () => stop();
  // }, []);

  useFadeIn(ref, 1000);

  return (
    <h1 className="welcome" ref={ref}>
      Welcome
    </h1>
  )
}

export default function WelcomePage() {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? 'Remove' : 'Show'}
      </button>
      <hr />
      {show && <Welcome />}
    </>
  )
}
