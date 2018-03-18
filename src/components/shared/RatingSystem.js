import React, { Component } from 'react'

import Leaf from '../../images/about/icon_leaf.svg'

export default class RatingSystem extends Component {
  render() {
    return (
      <div className="Ratings">
        <img src={Leaf} alt="leaf" />
        <img src={Leaf} alt="leaf" />
        <img src={Leaf} alt="leaf" />
        <img src={Leaf} alt="leaf" />
        <img src={Leaf} alt="leaf" />
      </div>
    )
  }
}
