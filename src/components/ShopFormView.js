import React, { Component } from 'react'
// import ProductForm          from '../components/ProductFormView'

import '../styles/Registration.css'

export default class ShopForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      street: "",
      street2: "",
      city: "",
      state: "",
      zip: ""
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value })
  }

  render() {
    const {props} = this

    return (
      <div className="Form">
          <h1>Your Shop Profile</h1>
          <p>{"Let's get your store-front set up with some basic details"}</p>
          <form onSubmit={(e) => { e.preventDefault(); props.submit(this.state); props.showFillShop() }}>
            <fieldset>
              <legend>Company Details</legend>
              <input id="name" value={this.state.name} onChange={this.handleChange} placeholder="Company Name" type="text" />
              <div className="file">
                <label htmlFor="file">image<br/>Upload Your Shop Cover Photo</label>
                <input type="file" />
              </div>
              <textarea rows="5" defaultValue="Company Description"></textarea>
              <input placeholder="Company Website" type="text" />
            </fieldset>
            <fieldset>
              <legend>Business Address</legend>
              <input id="street" value={this.state.street} onChange={this.handleChange} placeholder="Street" type="text" />
              <input id="street2" value={this.state.street2} onChange={this.handleChange} placeholder="Street2" type="text" />
              <div className="address">
                <input id="city" className="city" value={this.state.city} onChange={this.handleChange} placeholder="City" type="text" />
                <input id="state" className="state" value={this.state.state} onChange={this.handleChange} placeholder="State" type="text" />
                <input id="zip" className="zip" value={this.state.zip} onChange={this.handleChange} placeholder="Zip" type="text" />
              </div>
            </fieldset>
            <button type="submit">Save & Continue</button>
          </form>
      </div>
    )
  }
}
