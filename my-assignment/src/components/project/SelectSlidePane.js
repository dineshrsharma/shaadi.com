import React, { Component } from 'react';
import Select from 'react-select';

class SelectSlidePane extends Component {

  handleChange = (e) => {
    this.props.setCarouselFrames(e);
  }

  render() {
    return (
      <Select
        name='selectSlides'
        placeholder='Select number of carousel slides'
        defaultValue={{ value: 'First', label: 1 }}
        className="basic-single"
        options={this.props.options}
        onChange={this.handleChange}
      />
    )
  }
}

export default SelectSlidePane;