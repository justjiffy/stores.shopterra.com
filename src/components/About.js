import React, { Component } from 'react'
import '../styles/App.css'

import RatingSystem from './shared/RatingSystem'

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { return images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../images/about', false, /\.(png|jpe?g|svg)$/));

class GoodFor extends Component {
  render() {
    return (
      <section className="good">
        <img className="rating" src={this.props.image} alt="rating" />
        <h2 className={this.props.color}>Good For {this.props.who}</h2>
        <p>Some of the factors we consider:</p>
          <ul>
            <li>rating factor</li>
            <li>rating factor</li>
            <li>rating factor</li>
            <li>rating factor</li>
            <li>rating factor</li>
            <li>rating factor</li>
            <li>rating factor</li>
            <li>rating factor</li>
          </ul>
      </section>
    )
  }
}

class Example extends Component {
  render() {
    return (
      <div className="Example">
        <h3>Example Ratings</h3>
        <div className="versus">
          <img src={images["example_left.png"]} alt="example" />
          <span>VS.</span>
          <img src={images["example_right.png"]} alt="example" />
        </div>
        <div className="versus">
          <RatingSystem />
          <span></span>
          <RatingSystem />
        </div>
      </div>
    )
  }
}

export default class About extends Component {
  render() {
    return (
      <section className="About">
        <h2>We want to connect your brand with customers who care that you care.</h2>
        <div className="icons">
          <div>
            <img src={images["icon_presence.png"]} alt="presence" />
            <span>Have An Online Presence</span>
          </div>
          <div>
            <img src={images["icon_sales.png"]} alt="sales" />
            <span>Increase Your Sales</span>
          </div>
          <div>
            <img src={images["icon_save.png"]} alt="save" />
            <span>Save Time & Money</span>
          </div>
          </div>
          <h2>We help shoppers better understand your product and it’s impact.</h2>

        <GoodFor image={images["icon_heart_series.svg"]} who="You" color="pink" />
        <GoodFor image={images["icon_leaf_series.svg"]} who="Earth" color="green" />
        <Example />
      </section>
    )
  }
}
