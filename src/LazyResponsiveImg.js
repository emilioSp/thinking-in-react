import React, { Suspense } from 'react';

const Component = React.lazy(() =>
  /*return Promise.all([
    import("./ResponsiveImg"),
    new Promise(resolve => setTimeout(resolve, 1000))
  ]).then(([moduleExports]) => moduleExports);*/
  new Promise(resolve => setTimeout(() => {
    resolve(import('./ResponsiveImg'));
  }, 1000))
);

export const LazyResponsiveImg = () =>
  <Suspense fallback={<div>Lazy component...</div>}>
    <Component/>
  </Suspense>;
