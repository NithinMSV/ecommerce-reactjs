import React from 'react';
import axios from 'axios';

export default class GetProducts extends React.Component {
    
    state = {
        products: []
      }
    
      componentDidMount() {
        axios.get(`https://uiexercise.onemindindia.com/api/Product`)
          .then(res => {
            const products = res.data;
            this.setState({ products });
          })
      }
    
      render() {
        return (
          <ul>
            <div class="d-flex flex-wrap justify-content-around">
            {
              this.state.products
                .map(person =>
                  <div class="mt-5 mb-5">
                      <div class="card">
                        <div class="card-body">
                          <h5 class="card-title" key={person.productName}>Product Name: {person.productName}</h5>
                          <p class="card-text" key={person.productId}>Product Id: {person.productId}</p>
                          <p class="card-text" key={person.availableQuantity}>Available Quantity: {person.availableQuantity}</p>
                          <a href="#" class="btn btn-primary">Add to basket</a>
                        </div>
                      </div>
                  </div>
                )
            }
            </div>
          </ul>
        )
      }
}