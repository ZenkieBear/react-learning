import { RefObject, useEffect } from "react";
import { FadeInAnimation } from "./animation";

export function useFadeIn<T extends HTMLElement>(ref: RefObject<T>, duration: number) {
  useEffect(() => {
    // const node = ref.current as T;

    // let startTime: number | null = performance.now();
    // let frameId: number | null = null;

    // function onFrame(now: number) {
    //   const timePassed = now - (startTime as number);
    //   const progress = Math.min(timePassed / duration, 1);
    //   onProgress(progress);
    //   if (progress < 1) {
    //     frameId = requestAnimationFrame(onFrame);
    //   }
    // }

    // function onProgress(progress: number) {
    //   node.style.opacity = progress.toString();
    // }

    // function start() {
    //   onProgress(0);
    //   startTime = performance.now();
    //   frameId = requestAnimationFrame(onFrame);
    // }

    // function stop() {
    //   frameId && cancelAnimationFrame(frameId);
    //   startTime = null;
    //   frameId = null;
    // }

    // start();
    // return () => stop();

    const animation = new FadeInAnimation(ref.current as HTMLHeadElement);
    animation.start(duration);
    return () => animation.stop();
  }, [ref, duration]);
}