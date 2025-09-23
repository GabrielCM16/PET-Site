declare module '*.png' {
  const value: string;
  export default value;
}
declare module '*.css';

declare module "gifler" {
  export = gifler;

  type Animation = {
    width: number;
    height: number;
    render: (ctx: CanvasRenderingContext2D, x: number, y: number) => void;
  };

  interface Gifler {
    (src: string): {
      get: (cb: (a: Animation) => void) => void;
    };
  }

  const gifler: Gifler;
}


declare module "*.gif" {
  const value: string;
  export default value;
}