// Add type for styling modules
declare module '*.(scss|css)' {
  const content: {[className: string]: string};
  export default content;
}
