import React, { Component } from 'react';

import '../styles/Registration.css'

export class ProductForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: this.props.product ? this.props.product.name : "Title of Product",
      img: [this.props.product ? this.props.product.images[0].url : "",
            "",
            "",
            ""],
      price: this.props.product ? this.props.product.price   : "",
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    return this.props.onSubmit(this.state, this.props.product)
  }

  render() {
    return (
      <div className="Form">
        <h1>Add Product</h1>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Listing Photos</legend>
              <label>Add up to 4 photos of your product</label>
              <div className="select">
                <div className="img">
                  <p>Cover Photo</p>
                </div>
                <div className="img"></div>
                <div className="img"></div>
                <div className="img"></div>
              </div>
              <p>Products photos should be a square ratio and on a solid background color – preferably white</p>
        </fieldset>
        <hr />
        <fieldset>
            <legend>Listing Details</legend>
            <input id="name" value={this.state.name} onChange={this.handleChange} />
        </fieldset>
        <hr />
        <fieldset>
          <legend>Listing Pricing</legend>
          <label>Listing Price:</label>
            <input id="price" value={this.state.price} onChange={this.handleChange} />
          <label>Shipping Cost:</label>
            <input id="price" value={this.state.price} onChange={this.handleChange} />
        </fieldset>
        <hr />
        <fieldset>
          <legend>Listing Dimensions</legend>
          <label>Item Weight</label>
          <input id="weight" value="lbs" />
        </fieldset>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
    )
  }
}

export class FillShop extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    const {props} = this

    return (
      <div className="Form">
        <h1>Fill up your shop</h1>
        <p>{"Start filling your shop with products. Add as many as you like."}</p>
        <div className="select">
          <div className="new" onClick={props.showAddProduct}>
            <p>Add A listing</p>
          </div>
          <div className="placeholder"></div>
          <div className="placeholder"></div>
          <div className="placeholder"></div>
        </div>
      </div>
    )
  }
}
