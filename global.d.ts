declare module '*.module.scss' {
  const content: any;
  export default content;
}

declare module '*.png' {
  const content: any;
  export default content;
}

declare module '*.jpg' {
  const content: any;
  export default content;
}

declare module '*.svg' {
  import React = require('react');
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

declare type RootState = import('./src/app/app-store').RootState;
declare type AppDispatch = import('./src/app/app-store').AppDispatch;
