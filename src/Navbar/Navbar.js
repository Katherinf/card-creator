import React, { Component } from 'react';
import './Navbar.css';


export default class Navbar extends Component {
    render() {
      return <div className='navbar'>
        <button className='button'>Logo</button>
        <button className='button'>Home</button>
        {/* <button className='button'>Reset</button> */}
      </div>
    }
}