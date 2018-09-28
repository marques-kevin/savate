import React, { PureComponent } from "react";
import Style from "./Fixed.scss";
import classNames from "classnames";

class Fixed extends PureComponent {
  componentDidMount() {
    console.log(this.container.getBoundingClientRect().height);
    this.props.onHeight(this.container.getBoundingClientRect().height);
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

export default Fixed;
