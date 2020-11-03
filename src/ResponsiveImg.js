export const ResponsiveImg = () =>
 <div>
   <picture>
    <source media="(min-width:1600px)" srcSet="welcome01-1600.jpg"/>
    <source media="(min-width:800px)" srcSet="welcome01-800.jpg"/>
    <img src="welcome01-400.jpg" alt="Welcome" />
  </picture>
</div>