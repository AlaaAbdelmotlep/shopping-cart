import React, { Component } from 'react';
import NavBar from './navBar';
import ShoppingCart from './shoppingCart';

class App extends Component {

    state = { 
        products : [
            {id : 1 , name : 'Burger' , count : 2},
            {id : 2 , name : 'Cola' , count : 4},
            {id : 3 , name : 'Checken' , count : 3}
        ]
     }

     handelDelete = product => {
        // clone
        // Edit
        const newProduct = this.state.products.filter( (p) => p.id !== product.id)
        // setState
        this.setState ({ products : newProduct})
    }

    handelReset = () => {
        // Clone
        let products = [...this.state.products];
        // Edit
        products.map( p => {
            p.count = 0;
            return p;
        });
        this.setState({ products })
    }

    handelIcncreament = product => {
        const products = [...this.state.products];
        const index = products.indexOf(product);
        products[index] = {...products[index]};
        products[index].count++ ;
        this.setState ({products}); 
    }

    render() { 
        return ( 
            <React.Fragment>
                <NavBar productCount={this.state.products.filter( p  => p.count > 0).length}
                />
                <main className="container">
                    <ShoppingCart 
                    products={this.state.products}
                    onDelete={this.handelDelete}
                    onReset={this.handelReset}
                    onIncreament={this.handelIcncreament}
                    />
                </main>
            </React.Fragment>
         );
    }
}
 
export default App;
