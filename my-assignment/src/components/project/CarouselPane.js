import React, { Component } from 'react';
import CarouselRender from './CarouselRender';

class CarouselPane extends Component {
  render() {
    const { frames } = this.props;

    if (!frames) return <div className="center card">No frames to show!</div>

    return (
      <div className="card">
        <CarouselRender frames={frames} />
      </div>
    )
  }
}

export default CarouselPane;