import React, { useState } from 'react';

export const Cat = props => {
  const mouse = props.mouse;
  return (
    <img height="100" width="100" src="https://upload.wikimedia.org/wikipedia/commons/1/1a/Arthur%2C_the_cat.jpg" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
  );
}

export const Mouse = (props) => {
  const [coords, setCoords] = useState({
    x: 0, y:0
  })

  const handleMouseMove = event => {
    setCoords({
      x: event.clientX,
      y: event.clientY
    });
  }

  return (
    <div style={{ height: '200px' }} onMouseMove={handleMouseMove}>
      <div>
        {
          props.render(coords)
        }
      </div>
    </div>
  );
}

const MouseWithComponent = Component => props => <Mouse render={ mouse => <Component {...props} mouse={mouse} /> }/>

const MouseWithCat = MouseWithComponent(Cat);

export function MouseTrackerRenderProps() {
  return (
    <div>
      <h1>Move the mouse around! (Render props)</h1>
      <MouseWithCat/>
    </div>
  );
}