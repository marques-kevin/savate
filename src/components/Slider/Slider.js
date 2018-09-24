import React, { PureComponent } from "react";
import classNames from "classnames";
import Style from "./Slider.scss";
// import Hammer from "hammerjs";

const updateStyle = (element, px) =>
  (element.style.transform = `translateX(${px}px)`);

export default class Slider extends PureComponent {
  componentDidMount() {
    this.initSlider();
  }

  componentWillUnmount() {
    if (this.removeListeners) this.removeListeners();
  }

  initSlider() {
    const { slider, background, props } = this;
    const bgBounding = background.getBoundingClientRect();
    const sliderBounding = slider.getBoundingClientRect();
    const sliderMaxX = bgBounding.width - sliderBounding.width + bgBounding.x;
    const sliderMin = bgBounding.x;
    const newXMax = sliderMaxX - sliderBounding.x - 2;
    const newXMin = sliderMin - sliderBounding.x + 2;

    let x;

    const mousemove = e => {
      const clientX = e.clientX || e.touches[0].clientX;
      const newX = clientX - x;
      if (newX + 1 >= sliderMaxX - sliderBounding.x)
        return updateStyle(slider, newXMax);
      if (sliderBounding.x + newX <= sliderMin + 1)
        return updateStyle(slider, newXMin);
      slider.style.transform = `translateX(${newX}px)`;
    };

    const mousedown = e => {
      x = e.clientX || e.touches[0].clientX;
      window.addEventListener("mousemove", mousemove);
      window.addEventListener("touchmove", mousemove);
      window.addEventListener("mouseup", mouseup);
      window.addEventListener("touchend", mouseup);
    };

    const mouseup = () => {
      window.removeEventListener("mousemove", mousemove);
      window.removeEventListener("mouseup", mouseup);
      const sliderBcr = slider.getBoundingClientRect();
      if (sliderBcr.x + 10 >= sliderMaxX) props.onChoice("challenger");
      if (sliderBcr.x - 10 <= sliderMin) props.onChoice("user");
      return updateStyle(slider, 0);
    };

    slider.addEventListener("mousedown", mousedown);
    slider.addEventListener("touchstart", mousedown);

    this.removeListeners = () => {
      slider.removeEventListener("mousedown", mousedown);
      window.removeEventListener("mousemove", mousemove);
      window.removeEventListener("mouseup", mouseup);
      window.removeEventListener("touchstart", mousedown);
      window.removeEventListener("touchmove", mousemove);
      window.removeEventListener("touchend", mouseup);
    };
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

Slider.defaultProps = {
  onChoice: () => console.warn("defaut: Slider.onChoice")
};
