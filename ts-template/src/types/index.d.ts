import React from 'react';

// styling modules
declare module '*.(scss|css)' {
  const content: {[className: string]: string};
  export default content;
}

// svgs
declare module "\*.svg" {
  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
  const src: string;  export default src;
}

// jpg/jpeg images
declare module "\*.(jpg|jpeg)" {
  const content: string;
  export default content;
}

// png images
declare module "\*.png" {
  const content: string;
  export default content;
}

// gif images
declare module "\*.gif" {
  const content: string;
  export default content;
}

// json payloads
declare module "\*.json" {
  const content: string;
  export default content;
}
