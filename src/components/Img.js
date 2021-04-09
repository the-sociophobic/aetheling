import React from 'react'

// import resolveURL from 'libs/utils/resolveURL'


export default class Img extends React.Component {
  render = () =>
    this.props.src ?
      <img
        // src={resolveURL(this.props.src)}
        src={this.props.src}
        className={`img ${this.props.className}`}
        alt=""
      />
      :
      ""
}