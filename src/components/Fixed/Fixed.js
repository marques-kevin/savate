import React, { PureComponent } from "react";
import Style from "./Fixed.scss";
import classNames from "classnames";

class Fixed extends PureComponent {
  getHeight() {
    return this.container.offsetHeight;
  }

  componentDidMount() {
    this.props.onHeight(this.getHeight());
  }

  render() {
    return (
      <div
        ref={ref => (this.container = ref)}
        className={classNames({
          [Style.fixedTop]: this.props.top,
          [Style.fixedBottom]: this.props.bottom
        })}
      >
        {this.props.children}
      </div>
    );
  }
}

Fixed.defaultProps = {
  onHeight: () => console.warn("default: Fixed.onHeight")
};

export default Fixed;
