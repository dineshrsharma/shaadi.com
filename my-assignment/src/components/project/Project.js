import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Modal, Button } from 'react-materialize';
import CarouselPane from './CarouselPane';
import SelectSlidePane from './SelectSlidePane';

class Project extends Component {
  state = {
    options: [
      { value: 'First', label: 1 },
      { value: 'Second', label: 2 },
      { value: 'Third', label: 3 },
      { value: 'Fourth', label: 4 },
      { value: 'Fifth', label: 5 }
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