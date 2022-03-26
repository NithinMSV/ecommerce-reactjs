import React from "react";
import axios from "axios";

export default class addProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productName: "",
            availableQuantity: 0,
            loading: true,
            error: false,
        };
      }

        handleProductName = event => {this.setState({ productName: event.target.value })}
        handleAvailableQuantity = event => {this.setState({ availableQuantity: event.target.value })}

      postData(e) {
          e.preventDefault()

          const productName  = this.state.productName
          const availableQuantity = parseInt(this.state.availableQuantity)
          
          const product = {
              productName,
              availableQuantity
          }

          axios.post('https://uiexercise.onemindindia.com/api/Product', product)
          .then(res => {
            console.log(res);
            this.setState({ loading: false });
            e.preventDefault();
            // this.setState({productName: "", availableQuantity: 0 }) // set state to empty after sumbit
            this.resetForm();
          })
          .catch(err => { // log request error and prevent access to undefined state
            console.log(err)
            this.setState({ loading: false, error: true });
            console.error(err);
          })
      }

      resetForm = () => {
        this.setState({ 
          productName: "",
          availableQuantity: ''
       })
      }

    render() {
        return (
            <div class="d-flex flex-wrap justify-content-around">
            <div class="card w-25 mt-5">
                <h3 class="mt-3">Add Products</h3>
                <div class="card-body">
                <form onSubmit = { this.postData.bind(this) }>
                <div class="mb-3">
                    <label for="productName" class="form-label">Product Name</label>
                    <input type="text" class="form-control" name="productName" value={this.state.productName} id="productName" onChange={this.handleProductName.bind(this)} />
                </div>
                <div class="mb-3">
                    <label for="availableQuantity" class="form-label">Available Quantity</label>
                    <input type="number" class="form-control" name="availableQuantity" value={this.state.availableQuantity} id="availableQuantity" onChange={this.handleAvailableQuantity.bind(this)} />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                </div>
            </div>
            </div>
        )
      }
}