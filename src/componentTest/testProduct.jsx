import { specialChars } from "@testing-library/user-event";
import React, { Component } from "react";

class Producttest extends Component {
  state = {
    name: "Burger",
    count: 0,
    names: ["alaa", "ahmed"],
  };

  // we comment these code
  // change every this.state with this.props.product
  // because of single ssource of truth

  // state = {
  //     name : this.props.product.name ,
  //     count : this.props.product.count
  // }

  // Getting data dynamically from other component
  //  state = {
  //     name : this.props.product.name ,
  //     count : this.props.product.count
  // }

  // styles and classes
  getClasses() {
    return this.state.count === 0
      ? "badge bg-warning m-3"
      : "badge bg-primary m-3";
  }

  // render emptyList
  //  renderList() {
  //     if (this.state.names.length === 0) {
  //         return <h1>NO NAME</h1>;
  //     }else {
  //         return(
  //         <ul>
  //             {this.state.names.map (
  //             name => (<li key={name}>{name}</li>
  //             ))}
  //         </ul>
  //         );
  //     }
  //  }

  // implement event handler function

  // IncreamentHandlerr() {
  //     console.log(this.state); // error due of this refare to global scope not product obj
  // }

  // binding 'this'

  // 1- constructor
  // constructor() {
  //     super();
  //     this.IncreamentHandler = this.IncreamentHandler.bind(this);
  // }

  // 2- Arrow functiion
  IncreamentHandler = (num) => {
    // this.state.count++;
    // we can't update state directly
    // we must using setState function
    this.setState({ count: this.state.count + num });
  };

  // It can't be used yet , because we don't have state any more
  // IncreamentHandler = () => {
  //     this.setState({ count : this.props.product.count + 1 });
  // }
  // passing argument on event handler

  // 1- implement new function
  // increament = () => {
  //     this.IncreamentHandler(2);
  // }

  // 2- bind method
  // 3- Passing arrow fun which calling Increament function

  render() {
    // styles and classes
    // const styles= {color: 'red'}

    // let classses;
    // if ( this.state.count ===0) {
    //     classses = 'badge bg-warinig m-3';
    // }else {
    //     classses = 'badge bg-primary m-3'
    // }

    // const classses = this.state.count === 0
    // ? "badge bg-secondary m-3"
    // : "badge bg-primary m-3" ;

    // to log the props recieved from ShoppingCart Component
    // console.log(this.props);

    // console.log(this.props);
    // product: {id: 1, name: "Burger", count: 2}

    return (
      <div>
        {/* render emptyList */}
        {/* {this.state.names.length === 0 && <h1>NO NAME</h1>}
                <ul>
                    {this.state.names.map ( 
                    name => (<li key={name}>{name}</li>
                    ))}
                </ul> */}

        {/* <span style={{color: 'red'}}>{this.state.name}</span> */}

        {/* to print the children which inside component */}
        {/* {this.props.children} */}

        <span>{this.state.name}</span>
        <span className={this.getClasses()}>{this.state.count}</span>
        {/* add event handler */}
        {/* <button className='btn-sm btn btn-primary' onClick={this.IncreamentHandler}>+</button> */}
        {/* Passing argument on event handler */}
        {/* 1- implememt new function */}
        {/* <button className='btn-sm btn btn-primary' onClick={this.increament}>+</button> */}
        {/* 2- Bind method */}
        {/* <button className='btn-sm btn btn-primary' onClick={this.IncreamentHandler.bind(this,2)}>+</button> */}
        {/* 3- passing arrow fun which call our function */}
        <button
          className="btn-sm btn btn-primary"
          onClick={() => {
            this.IncreamentHandler(2);
          }}
        >
          +
        </button>

        {/* render list */}
        {/* <ul>
                    {this.state.names.map ( 
                    name => (<li key={name}>{name}</li>
                    ))}
                </ul> */}

        {/* render emptyList */}
        {/* {this.renderList()} */}
      </div>
    );
  }
}

export default Producttest;
