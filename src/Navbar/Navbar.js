import React, { Component } from 'react';
import './Navbar.css';


export default class Navbar extends Component {
    render() {
      return <div className='navbar'>
        <label className='navlogo'>Cherry Pick</label>
        <button className='button'>Save</button>
        {/* <button className='button'>Reset</button> */}
      </div>
    }
}