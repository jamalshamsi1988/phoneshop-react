import React, { Component } from 'react';
import axios from 'axios';
import useTitle from '../hooks/useTitle';

import Card from './Card';
import styles from '../Components/Products.module.css';


 class Products extends Component {
  
    constructor(props){
     
        super(props);
        this.state={
            products:[]
        }
    }
componentDidMount(){
    axios.get("https://fakestoreapi.com/products")
    .then(response => this.setState({
        products:response.data,
    }))

}

  render() {
    const {products} = this.state;

    return (

      <div className={styles.counter}>
{
    products.length ? 
    products.map(product => <Card key={product.id}  image={product.image} cost={`${ product.price} $`}  name={product.title}/>)
    : <h1>Loading ...</h1>
 }
        
      </div>
    )
  }
}

export default Products;