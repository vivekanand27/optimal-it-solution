declare module "bootstrap" {
  export class Carousel {
    constructor(el: HTMLElement, options?: { interval?: number; ride?: string });
    dispose(): void;
  }
}
