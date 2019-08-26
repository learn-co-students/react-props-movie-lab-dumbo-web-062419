import React, { Component } from 'react';

export default class CardFront extends Component {

  render() {

    // console.log(this.props.image);
    // // const frontImage = {this.props.image}.map(imageURL => {
    // //   return
    // })

    return (
      <div className="card-front" style={{backgroundImage: `url(${this.props.image})`}}>
      </div>
    )
  }
}
