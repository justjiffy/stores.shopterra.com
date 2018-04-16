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
        <section className="About margin">
          <Intro />
          <Rating />
          <Example />
        </section>
        <Why />
        <Categories />
        <div className="signup">
          <Signup pitch="Get notified when we launch" type="preLaunch" />
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
        <div className="good-container">
          <GoodForYou />
          <GoodForEarth />
        </div>
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
            <p>Share Your Values</p>
          </div>
          <div>
            <img src={images["value2.png"]} alt="reach" />
            <p>Reach a Wider Audience</p>
          </div>
          <div>
            <img src={images["value3.png"]} alt="increase" />
            <p>Increase Your Sales</p>
          </div>
          <div>
            <img src={images["value4.png"]} alt="save" />
            <p>Save Time & Money</p>
          </div>
        </div>
      </div>
    )
  }
}

class GoodForYou extends Component {
  render() {
    return (
      <div className="GoodFor margin-fix">
        <img className="rating" src={images["icon_you.png"]} alt="rating" />
        <h2 className="pink">Good For You</h2>
        <p>{'Our “Good for You” rating reflects how safe a product is for use by you and your family, and how naturally-derived the ingredients are. A higher “Good for You” rating indicates that a product has undergone accredited safety testing and does not contain ingredients that are known to cause chronic or acute health effects. A higher rating also indicates a higher percentage of naturally-derived ingredients within the product. Products with a low “Good for You” rating will not be offered on Shopterra.'}</p>
          <ul>
            <li>Certified Safety Testing</li>
            <li>Naturally-derived or synthetic</li>
            <li>Ingredients</li>
            <li>Paraben-free</li>
            <li>CIT/MIT-free</li>
            <li>Free from formaldehyde donors</li>
            <li>Sulfate-free</li>
            <li>Glycol-free</li>
            <li>Alcohol-free</li>
            <li>Silicone-free</li>
            <li>Free of synthetic dyes and fragrances</li>
          </ul>
          <hr className="mobile"></hr>
      </div>
    )
  }
}

class GoodForEarth extends Component {
  render() {
    return (
      <div className="GoodFor">
        <img className="rating" src={images["icon_earth.png"]} alt="rating" />
        <h2 className="green">Kind to Earth</h2>
        <p>{'Our “Kind to Earth” rating reflects the degree to which a product and packaging affects the environment during use and disposal. A higher “Kind to Earth” rating indicates that the product and packaging are highly biodegradable, recyclable, and leaves a lower carbon footprint impact on the environment. Products with a low “Kind to Earth” rating will not be offered on Shopterra.'}</p>
          <ul>
            <li>Product impact to the environment</li>
            <li>Product biodegradability</li>
            <li>Product carbon footprint</li>
            <li>Packaging impact to the environment</li>
            <li>Packaging ease of re-use</li>
            <li>Recyclability</li>
          </ul>
          <hr className="mobile"></hr>
      </div>
    )
  }
}

class Example extends Component {
  render() {
    return (
      <div className="Example">
        <div className="heading desktop">
          {"You’ll see this rating on all products sold on Shopterra."}
        </div>
        <div className="content-container">
          <div className="content">
            <img src={images["example_product.png"]} alt="example" />
          </div>
          <div className="content">
            <p className="patent">{"Shopterra’s unique product rating system developed through extensive industry experience, and verified by the highly respected NSF International, assesses safety and source of ingredients, and the environmental impact of all the products we bring to you."}</p>
            <img className="nsf" src={images["agency_nsf.png"]} alt="fsa" />
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
        <p>Shopterra offers one platform for both natural and environmentally conscious consumers to purchase products with confidence. Our simple, transparent rating system, developed independently through extensive experience and verified by NSF International, increases trust in your products and differentiates your brand from conventional products that are often neither natural nor environmentally safe. We are building a community of like-minded consumers who share your values of living a natural lifestyle and we help them inspire their friends and families to choose natural, sustainable products like yours to make a difference in their lives and for our planet, so you can reach a wider audience online.</p>
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
            <img src={images["category_personalcare.jpg"]}  alt="Personal Care"/>
          </div>
          <div>
            <img src={images["category_petcare.jpg"]} alt="Pet Care"/>
          </div>
          <div>
            <img src={images["category_homecare.jpg"]} alt="Home Care"/>
          </div>
          <div>
            <img src={images["category_nutriments.jpg"]} alt="Nutriments"/>
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
