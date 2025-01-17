import React, { Component } from 'react';
import './CardImage.css';
import GoogleFontLoader from 'react-google-font-loader';
import contentEditable from './InlineEdit/InlineEdit.js';

export default class CardImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      font: { fontFamily: 'Oleo Script, cursive', color: '#313D45', fontSize: '50px' },
      image: 'image',
      frame: '7px solid #CF3F49',
      background: '#ACCCD7',
      message: 'Some Bunny Loves You',
    };
  }
  componentDidMount() {
    let newState = {
      font: this.props.font ? this.props.font : this.state.font,
      image: this.props.image ? this.props.image : this.state.image,
      frame: this.props.frame ? this.props.frame : this.state.frame,
      background: this.props.background ? this.props.background : this.state.background,
      message: this.props.message ? this.props.message : this.state.message,

    };

    this.setState(newState);
  }
  render() {
    let EditableH1 = contentEditable('span');
    return (
      <>
        <div className='container'>
          <div className='border-card' style={{ border: this.state.frame }}>
            <div className='card' style={{ backgroundColor: this.state.background, backgroundImage: `url(${this.state.image})`, backgroundSize: 'cover' }}>
              <h1 className='card-text' style={{
                color: this.state.font.color, fontFamily: this.state.font.fontFamily,
                fontSize: this.state.font.fontSize
              }}><EditableH1 value={this.state.message} /></h1>
              <GoogleFontLoader
                fonts={[
                  {
                    font: this.state.font.fontFamily,
                    weights: [400, '400i'],
                  }
                ]}
                subsets={['cyrillic-ext', 'greek']}
              />
            </div>
          </div>
        </div>
      </>
    )
  }
}