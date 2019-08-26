import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Modal, Button } from 'react-materialize';
import CarouselPane from './CarouselPane';
import SelectSlidePane from './SelectSlidePane';

class Project extends Component {
  state = {
    options: [
      { value: 'One', label: 1 },
      { value: 'Two', label: 2 },
      { value: 'Three', label: 3 },
      { value: 'Four', label: 4 },
      { value: 'Five', label: 5 },
      { value: 'Six', label: 6 },
      { value: 'Seven', label: 7 },
      { value: 'Eight', label: 8 },
      { value: 'Nine', label: 9 },
      { value: 'Ten', label: 10 },
      { value: 'Eleven', label: 11 },
      { value: 'Twelve', label: 12 },
      { value: 'Thirteen', label: 13 },
      { value: 'Fourteen', label: 14 },
      { value: 'Fifteen', label: 15 },
      { value: 'Sixteen', label: 16 },
      { value: 'Seventeen', label: 17 },
      { value: 'Eighteen', label: 18 },
      { value: 'Nineteen', label: 19 },
      { value: 'Twenty', label: 20 }
    ],
    frames: null,
    history: []
  };

  setCarouselFrames = (frames) => {
    const framesPanels = this.state.options.map(option => {
      if (option.label <= frames.label) {
        return option;
      } else {
        return undefined;
      }
    })

    const datas = framesPanels.filter(function (element) {
      return element !== undefined;
    });

    this.setState({
      ...this.state,
      frames: datas,
      history: [...this.state.history, frames.label]
    })
  }

  render() {
    const { auth } = this.props;
    if (auth.auth.authError === 'new' || auth.auth.authError === 'Login failed') return <Redirect to='/' />

    const trigger = <Button className="center">Open Modal</Button>;

    return (
      <div className="container">
        <SelectSlidePane options={this.state.options} setCarouselFrames={this.setCarouselFrames} />
        <CarouselPane frames={this.state.frames} />
        <Modal header="Carousel Log" trigger={trigger}>
          {
            this.state.history.length ? this.state.history.map((history) =>
              (<span key={history}> {history} ,</span>)) : <span>No history to display!</span>
          }
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state
  }
}

export default connect(mapStateToProps)(Project);