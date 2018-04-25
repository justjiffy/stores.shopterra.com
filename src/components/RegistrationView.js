import React, { Component } from 'react'
import ShopForm             from '../components/ShopFormView'
import { ProductForm,
         FillShop }         from '../components/ProductFormView'

import '../styles/Registration.css'

export default class RegistrationView extends Component {
  render() {
    return (
      <div className="Registration">
        <section>
          { this.props.registration.scene === "addShop" ? <ShopForm {...this.props} /> : null }
          { this.props.registration.scene === "fillShop" ? <FillShop {...this.props} /> : null }
          { this.props.registration.scene === "addProduct" ? <ProductForm {...this.props} /> : null }
          { this.props.registration.scene === "addPayment" ? <AddPayment {...this.props} /> : null }
        </section>
      </div>
    )
  }
}

class AddPayment extends Component {
  render() {
    return (
      <div>
        <h1>Finish adding payment info</h1>
        <p>Go to Stripe</p>
      </div>
    )
  }
}
