import React, { Component } from 'react';
export class ProductForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: this.props.product ? this.props.product.name : "",
      img: this.props.product ? this.props.product.images[0].url : "",
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
      <div className="product-form">
        <form onSubmit={this.handleSubmit}>
          <label>Name:
            <input id="name" value={this.state.name} onChange={this.handleChange} />
          </label>
          <label>Image URL:
            <input id="img" value={this.state.img} onChange={this.handleChange} />
          </label>
          <label>Price:
            <input id="price" value={this.state.price} onChange={this.handleChange} />
          </label>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    )
  }
}
