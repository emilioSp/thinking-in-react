import React from 'react';

const Cat = props => {
  const mouse = props.mouse;
  return (
    <img height="100" width="100" src="https://upload.wikimedia.org/wikipedia/commons/1/1a/Arthur%2C_the_cat.jpg" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
  );
}

class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div style={{ height: '200px' }} onMouseMove={this.handleMouseMove}>
        <div>
          {
            React.Children.map(this.props.children, child => React.cloneElement(child, { mouse: this.state }))
          }
        </div>
      </div>
    );
  }
}

const MouseWithComponent = Component => props => {
  return <Mouse>
    <Component {...props}/>
  </Mouse>
}

const MouseWithCat = MouseWithComponent(Cat);

export class MouseTrackerCloneElement extends React.Component {
  render() {
    return (
      <div>
        <h1>Move the mouse around! (Clone element)</h1>
        <MouseWithCat/>
      </div>
    );
  }
}