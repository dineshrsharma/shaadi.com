import React, { Component } from 'react';
import { Carousel } from 'react-materialize';

class CarouselPane extends Component {


  componentDidMount = () => {
    console.log("componentDidMount");
  }

  componentWillUnmount = () => {
    console.log("componentWillUnmount");
  }

  render() {
    const { frames } = this.props;
    console.log(this.props);

    if (!frames) return <div>No frames to show!</div>

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

export default CarouselPane;