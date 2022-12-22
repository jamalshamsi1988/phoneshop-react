import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from "../Components/Card.module.css";
import down from "../Images/down.svg";
import up from "../Images/up.svg";


 class Card extends Component {
  constructor(){
    super();
    this.state={
      counter:0,
    }
  } 

  downHandler=() =>{
    if(this.state.counter >=1){

      this.setState(prevState =>({
        counter:prevState.counter - 1,
      }))
    }
  }

  upHnadler=()=>{
    this.setState(prevState =>({
      counter:prevState.counter + 1,
    }))

  }

  render() {
    const {image , cost , name,id}=this.props;
    const {counter}=this.state;
    return (

      <div className={styles.container} >

        <img src={image} alt="phone"/>
        <h3><Link to={`/products/${id}`}>{name}</Link></h3>
        <p>{cost} {counter ? `* ${counter} = ${counter * Number(cost.split(" ")[0])} $` : ""}</p>

        <div className={styles.counter}>

          <img className={!counter ?  styles.deactive : ""} src={down} alt="down" onClick={this.downHandler}   />
          <span>{counter}</span>
          <img src={up} alt="up" onClick={this.upHnadler}   />

        </div>


      </div>
    )
  }
}


export default Card;