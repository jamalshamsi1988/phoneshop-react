import React, { Component } from 'react';


import Search from './Search';
import Logos from "./Logos";
import Banner from './Banner';
import Cards from './Cards';

 class Landing extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Cards/>
        <Search/>
        <Logos/>
      </div>
    )
  }
}

export default Landing;