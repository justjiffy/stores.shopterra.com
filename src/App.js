import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import { baseUrl } from './services/api';
import { Login } from './Login.js';
import {
  getVendor,
  users,
  postProduct,
  patchProduct,
  deleteProduct
} from './services/db'
import { ProductForm } from './ProductForm.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      authedUser: null,
      vendor: null,
      products: [],
      editProduct: [],
    }
    this.fetchProducts = this.fetchProducts.bind(this)
    this.createProduct = this.createProduct.bind(this)
  }

  componentWillUpdate(props, state) {
      if (state.authedUser && !this.state.authedUser) {
        this.fetchProducts(state.authedUser)
      }
  }
  // componentDidMount() {
  //   this.fetchProducts(this.state.authedUser)
  // }

  fetchProducts(u) {
    return getVendor(u)
    .then(vendor => {
      return this.setState({
        vendor,
        products: vendor.products
      })
    })
  }

  createProduct(p) {
    return postProduct(this.state.vendor,p)
    .then(
      products => { return this.setState({ products }) }
    )
  }

  modifyProduct(p) {
    console.log('Modify Product', p)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="logo" alt="Shopterra" />
        </header>
        <div className="product-list">
        { !this.state.authedUser ?
          <Login login={(user)=>{
              this.setState({authedUser:user})
              return user
          }} /> :
          <div className="storefront">
            <h1>Welcome {this.state.authedUser.email}</h1>
            <p>Add Product:</p>
            <ProductForm onSubmit={this.createProduct} />
            <div className="product-list">
              { !this.state.products.length ? <div>loading products...</div> :
                this.state.products.map((p,i) => {
                  return(
                    <div className="product" key={i}>
{                      /* <ProductForm onSubmit={this.modifyProduct} product={this.state.editProduct} /> */}
                      <h2>{p.name}</h2>
                      <h3>{p.price}</h3>
                      <div>
                      {
                        p.images.map((img, idx) => {
                          return(
                            <img key={idx} alt={`${p.title} ${idx}`} style={{width: '200px', height: 'auto'}} src={img.url} />
                          )
                        })
                      }
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div> }
        </div>
      </div>
    );
  }
}

// export const mapStateToProps = (state) => {
//   return {
//     authedUser: state.user,
//     vendor: state.vendor,
//     products: state.products
//   }
// }

export default App;
