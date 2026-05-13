declare module '*.png' {
  const value: string;
  export default value;
}
declare module '*.css';

declare module '*.pdf';

declare module '*.jpeg';

declare module '*.jpg';

declare module "*.module.css";

declare module "*.module.scss";

declare module "*.gif" {
  const value: string;
  export default value;
}

declare module '*?inline' {
  const content: string;
  export default content;
}