import React, { Component } from 'react'
import '../styles/App.css'

export default class About extends Component {
  importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }

  render() {
    const images = this.importAll(require.context('../images/about', false, /\.(png|jpe?g|svg)$/));

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
      </section>
    )
  }
}
