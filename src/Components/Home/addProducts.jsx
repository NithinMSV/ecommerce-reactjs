import React from "react";

export default class addProduct extends React.Component {
    render() {
        return (
            <div class="d-flex flex-wrap justify-content-around">
            <div class="card w-50 mt-5">
                <h3 class="mt-3">Add Products</h3>
                <div class="card-body">
                <form>
                <div class="mb-3">
                    <label for="productName" class="form-label">Product Name</label>
                    <input type="text" class="form-control" id="productName" />
                </div>
                <div class="mb-3">
                    <label for="productId" class="form-label">Product Id</label>
                    <input type="text" class="form-control" id="productId" />
                </div>
                <div class="mb-3">
                    <label for="availableQuantity" class="form-label">AvailableQuantity</label>
                    <input type="number" class="form-control" id="availableQuantity" />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                </div>
            </div>
            </div>
        )
      }
}