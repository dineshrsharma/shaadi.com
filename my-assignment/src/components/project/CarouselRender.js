import React, { Component } from 'react';
import { Carousel } from 'react-materialize';

class CarouselRender extends Component {
  componentWillUnmount = () => {
    console.log('unmount');
  }

  componentDidUpdate = () => {
    console.log('did update');
  }

  componentDidMount = () => {
    console.log('did mount');
  }

  render() {
    const { frames } = this.props;

    return (
      <Carousel options={{ fullWidth: false, indicators: true }} className="white-text center">
        {
          frames.map(frame => {
            return (
              <div className="blue" key={frame.label}>
                <h3 className="legend">{frame.label}</h3>
                <p>This is your 1st panel</p>
              </div>
            )
          })
        }
      </Carousel>
    )
  }
}

export default CarouselRender;