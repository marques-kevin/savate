import React, { PureComponent } from "react";
// import PropTypes from "prop-types";
import classNames from "classnames";
import Style from "./Slider.scss";

const updateStyle = (element, px) =>
  (element.style.transform = `translateX(${px}px)`);

export default class Slider extends PureComponent {
  componentDidMount() {
    this.initSlider();
  }

  initSlider() {
    const { slider, background } = this;
    const bgBounding = background.getBoundingClientRect();
    const sliderBounding = slider.getBoundingClientRect();
    const sliderMaxX =
      bgBounding.width - sliderBounding.width + bgBounding.x - sliderBounding.x;

    let x;

    const mousemove = e => {
      const newX = e.clientX - x;
      if (newX + 1 >= sliderMaxX) return false;
      slider.style.transform = `translateX(${newX}px)`;
    };

    const mousedown = e => {
      x = e.clientX;
      window.addEventListener("mousemove", mousemove);
      window.addEventListener("mouseup", mouseup);
    };

    const mouseup = () => {
      window.removeEventListener("mousemove", mousemove);
      window.removeEventListener("mousemove", mouseup);
      const sliderBcr = slider.getBoundingClientRect();
      if (sliderBcr.x + 10 < sliderMaxX) return updateStyle(slider, 0);
      return updateStyle(slider, sliderMaxX - 2);
    };

    slider.addEventListener("mousedown", mousedown);
  }

  render() {
    return (
      <div className={classNames(Style.container)}>
        <div
          ref={ref => (this.background = ref)}
          className={classNames(Style.background, {
            [Style.hasArrow]: !this.props.finished
          })}
        >
          <div
            ref={slider => (this.slider = slider)}
            className={classNames(Style.indicator, {
              [Style.indicatorChallenger]:
                this.props.finished && this.props.winner === "challenger"
            })}
          >
            Vainqueur
          </div>
        </div>
      </div>
    );
  }
}

Slider.propTypes = {};

Slider.defaultProps = {};
