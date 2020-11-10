import React from 'react';

export class UnControlledSearch extends React.Component {
  input;
  constructor(props) {
    super(props);
    this.input = React.createRef();
    this.handleOnChangeInput = this.handleOnChangeInput.bind(this);
  }

  handleOnChangeInput() {
    console.log(this.input.value);
  }

  render() {
    return <div>
      <label>UnController input <input type="text" ref={el => this.input = el} onChange={this.handleOnChangeInput}/></label>
    </div>
  }
}