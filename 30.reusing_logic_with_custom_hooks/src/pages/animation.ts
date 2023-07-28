import { RefObject } from "react";

// You could move most of the imperative logic inside a JavaScript class:
export class FadeInAnimation<T extends HTMLElement> {

  private node: T;
  private duration: number = 0;
  private startTime: number | null = null;
  private frameId: number | null = null;

  constructor(node: T) {
    this.node = node;
  }

  start(duration: number) {
    this.duration = duration;
    this.onProgress(0);
    this.startTime = performance.now();
    this.frameId = requestAnimationFrame(() => this.onFrame());
  }

  onFrame() {
    const timePassed = performance.now() - (this.startTime as number);
    const progress = Math.min(timePassed / this.duration, 1);
    this.onProgress(progress);
    if (progress === 1) {
      this.stop();
    } else {
      this.frameId = requestAnimationFrame(() => this.onFrame());
    }
  }

  onProgress(progress: number) {
    this.node.style.opacity = progress.toString();
  }

  stop() {
    this.frameId && cancelAnimationFrame(this.frameId);
    this.startTime = null;
    this.frameId = null;
    this.duration = 0;
  }
}