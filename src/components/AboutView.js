import React, { Component } from 'react'
import Signup               from '../containers/Signup'
import '../styles/About.css'

const images = importAll(require.context('../images/about', false, /\.(png|jpe?g|svg)$/));

export default class AboutView extends Component {
  render() {
    return (
      <div className="About">
        <h1>{"Natural, sustainable living and peace of mind coming together in harmony"}</h1>
        <h3>{"Sell your product to customers that care about how it impacts them and the environment."}</h3>
        <Signup pitch="Get notified when we launch" type="preLaunch" />
        <section className="About">
          <Intro />
          <Rating />
          <Example />
        </section>
        <Why />
        <Categories />
        <div className="signup">
          <Signup pitch="Be the first to sell on Shopterra" type="preLaunch" />
        </div>
      </div>
    )
  }
}

class Rating extends Component {
  render() {
    return (
      <div className="Rating">
        <h2>Shopterra Product Rating System</h2>
        <p>{"Simple. Transparent. Independent."}</p>
        <GoodForYou />
      </div>
    )
  }
}

class Intro extends Component {
  render() {
    return (
      <div>
        <h2>We want to connect your brand with customers who care that you care.</h2>
        <h3>{"We help shoppers understand why your product is better for them and the environment."}</h3>
        <div className="icons">
          <div>
            <img src={images["value1.png"]} alt="share" />
            <span>Share Your Values</span>
          </div>
          <div>
            <img src={images["value2.png"]} alt="reach" />
            <span>Reach a Wider Audience</span>
          </div>
          <div>
            <img src={images["value3.png"]} alt="increase" />
            <span>Increase Your Sales</span>
          </div>
          <div>
            <img src={images["value4.png"]} alt="save" />
            <span>Save Time & Mone</span>
          </div>
        </div>
      </div>
    )
  }
}

class GoodForYou extends Component {
  render() {
    return (
      <div className="GoodFor">
        <img className="rating" src={images["icon_you.png"]} alt="rating" />
        <h2 className="pink">Good For You</h2>
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
        <div className="heading">
          <p className="mobile">Example Ratings</p>
          <p className="desktop">{"You’ll see this rating on all products sold on Shopterra."}</p>
        </div>
        <div className="content-container">
          <div className="content">
            <img src={images["example_product.jpg"]} alt="example" />
            <hr className="mobile"></hr>
          </div>
          <div className="content">
            <p className="patent">Blurb about the patent pending system, and your cooperation with other agencies as well as Eshe’s credentials.</p>
            <img className="uspto" src={images["agency_uspto.png"]} alt="uspto" />
            <img className="fsa" src={images["agency_fsa.png"]} alt="fsa" />
          </div>
        </div>
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
        <p className="mobile">A small paragraph outlining the ethos behind the company. A high level description of the problem you want to solve for customers.</p>
        <p className="desktop">Shopterra offers one platform for natural and environmentally conscious consumers to purchase products with confidence. Our proprietary rating system ranks active ingredients in each and every product we sell and tells you, the consumer, how it impacts your health and the environment.</p>
      </div>
    )
  }
}

class Categories extends Component {
  render() {
    return (
      <div className="Categories">
        <h1>{`Categories we'll specialize in first`}</h1>
        <div className="grid">
          <div>
            <img src={images["category_personalcare.jpg"]}  alt="category"/>
          </div>
          <div>
            <img src={images["category_nutriments.jpg"]} alt="category"/>
          </div>
          <div>
            <img src={images["category_homecare.png"]} alt="category"/>
          </div>
          <div>
            <img src={images["category_petcare.jpg"]} alt="category"/>
          </div>
        </div>
      </div>
    )
  }
}

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    const key = item.replace('./', '')
    images[key] = r(item);
  });
  return images;
}
