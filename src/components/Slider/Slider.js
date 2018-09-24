import React, { PureComponent } from "react";
import classNames from "classnames";
import Style from "./Slider.scss";

const updateStyle = (element, px) =>
  (element.style.transform = `translateX(${px}px)`);

export default class Slider extends PureComponent {
  componentDidMount() {
    this.initSlider();
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
      const newX = e.clientX - x;
      if (newX + 1 >= sliderMaxX - sliderBounding.x)
        return updateStyle(slider, newXMax);
      if (sliderBounding.x + newX <= sliderMin + 1)
        return updateStyle(slider, newXMin);
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
      if (sliderBcr.x + 10 >= sliderMaxX) props.onChoice("challenger");
      if (sliderBcr.x - 10 <= sliderMin) props.onChoice("user");
      return updateStyle(slider, 0);
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

Slider.defaultProps = {
  onChoice: () => console.warn("defaut: Slider.onChoice")
};
