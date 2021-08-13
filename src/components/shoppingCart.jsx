import React, { Component } from 'react';
import Product from './product';


class ShoppingCart extends Component {
    render() { 
        return ( 
            <div>
            <h1>Shopping Cart</h1>
            <button onClick={this.props.onReset} 
                    className='btn btn-primary'>Reset</button>
            {this.props.products.map( product => (
             <Product
                    key={product.id}
                    product={product}
                    onDelete={this.props.onDelete}
                    onIncreament={this.props.onIncreament}
            /> 
            ))}
            </div>
         );
    }
}
 
export default ShoppingCart;
