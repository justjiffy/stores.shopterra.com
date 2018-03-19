import React, { Component } from 'react'
import '../styles/App.css'

import RatingSystem from './shared/RatingSystem'

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { return images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../images/about', false, /\.(png|jpe?g|svg)$/));

class Intro extends Component {
  render() {
    return (
      <div>
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
        <h3>We help shoppers better understand your product and it’s impact.</h3>
      </div>
    )
  }
}

class GoodFor extends Component {
  render() {
    return (
      <div className="GoodFor">
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
      </div>
    )
  }
}


class Example extends Component {
  render() {
    return (
      <div className="Example">
        <p>Example Ratings</p>
        <div className="versus">
          <img src={images["example_left.png"]} alt="example" />
          <p>vs.</p>
          <img src={images["example_right.png"]} alt="example" />
        </div>
        <div className="versus">
          <RatingSystem system="Leaf" />
          <RatingSystem system="Leaf" />
        </div>
        <div className="versus">
          <RatingSystem system="Heart" />
          <RatingSystem system="Heart" />
        </div>
        <hr></hr>
        <p className="patent">Blurb about the patent pending system, and your cooperation with other agencies as well as Eshe’s credentials.</p>
        <img src={images["agency_uspto.png"]} alt="uspto" />
        <img src={images["agency_fsa.png"]} alt="fsa" />
      </div>
    )
  }
}

class Why extends Component {
  render() {
    return (
      <div className="Why">
        <h1>Why Sell On Shopterra?</h1>
        <h3>Grow your customer base.</h3>
        <p>A small paragraph outlining the ethos behind the company. A high level description of the problem you want to solve for customers.</p>
      </div>
    )
  }
}

class Categories extends Component {
  render() {
    return (
      <div className="Categories">
        <h1>Categories we'll specialize in first</h1>
        <div className="grid">
          <div>
            <img src={images["category_personalcare.png"]} />
            <p>Personal Care</p>
          </div>
          <div>
            <img src={images["category_personalcare.png"]} />
            <p>Nutriments</p>
          </div>
          <div>
            <img src={images["category_personalcare.png"]} />
            <p>Home Care</p>
          </div>
          <div>
            <img src={images["category_personalcare.png"]} />
            <p>Pet Care</p>
          </div>
        </div>
      </div>
    )
  }
}
export default class About extends Component {
  render() {
    return (
      <div>
        <section className="About">
          <Intro />
          <GoodFor image={images["icon_heart_series.svg"]} who="You" color="pink" />
          <GoodFor image={images["icon_leaf_series.svg"]} who="Earth" color="green" />
          <Example />
        </section>
        <Why />
        <Categories />
      </div>
    )
  }
}
