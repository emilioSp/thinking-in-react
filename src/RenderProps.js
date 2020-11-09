import React from 'react';

export const Cat = props => {
  const mouse = props.mouse;
  return (
    <img height="100" width="100" src="https://upload.wikimedia.org/wikipedia/commons/1/1a/Arthur%2C_the_cat.jpg" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
  );
}

export class Mouse extends React.Component {
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
            this.props.render(this.state)
          }
        </div>
      </div>
    );
  }
}

const MouseWithComponent = Component => props => <Mouse render={ mouse => <Component {...props} mouse={mouse} /> }/>

const MouseWithCat = MouseWithComponent(Cat);

export class MouseTrackerRenderProps extends React.Component {
  render() {
    return (
      <div>
        <h1>Move the mouse around! (Render props)</h1>
        <MouseWithCat/>
      </div>
    );
  }
}