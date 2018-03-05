import React, { Component } from 'react';
import {
  getVendor,
  users,
} from './services/db'

export class ProductForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pName: "",
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value })
  }

  render() {
    return (
      <div className="product-form">
        <form>
          <label>Product Name</label>
          <input id="pName" value={this.state.pName} onChange={this.handleChange} />
        </form>
      </div>
    )
  }
}
