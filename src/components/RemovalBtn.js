import React from "react";

class RemovalBtn extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    console.log(e.target);
  }
  render() {
    // the remove button only appears if there is more than one experience item
    let check = this.props.list.length >= 2 ? true : false;
    let button;
    if (check) {
      button = (
        <button
          title="Remove the last section"
          type="button"
          onClick={this.handleClick}
        >
          Remove
        </button>
      );
    } else {
      button = <></>;
    }
    return <>{button}</>;
  }
}

export default RemovalBtn;
