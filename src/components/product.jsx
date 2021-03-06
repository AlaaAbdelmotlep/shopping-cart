import React, { Component } from "react";
import { Link } from "react-router-dom";

class Product extends Component {
  getClasses() {
    return this.props.product.count === 0
      ? "badge bg-warning m-3"
      : "badge bg-primary m-3";
  }

  render() {
    return (
      <div className="row">
        <div className="col-2">
          <span>
            <Link to={`/product/ ${this.props.product.id}`}>
              {this.props.product.name}
            </Link>
          </span>
        </div>
        <div className="col">
          <span className={this.getClasses()}>{this.props.product.count}</span>

          <button
            className="btn-sm btn btn-primary m-2"
            onClick={() => this.props.onIncreament(this.props.product)}
          >
            +
          </button>

          <button
            className="btn-sm btn btn-primary"
            onClick={() => this.props.onDelete(this.props.product)}
          >
            -
          </button>
        </div>
      </div>
    );
  }
}

export default Product;
