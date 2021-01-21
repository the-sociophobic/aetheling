import React from 'react'

import Img from 'components/Img'


class Catalog extends React.Component {
  state = {}

  render = () =>
    <div className="Catalog">
      <div className="container">
        <div className="Catalog__container">
          {this.props.products.map(prod =>
            <div
              className="Catalog__item"
              key={prod.name}
            >
              <Img src={prod.img} />
              <div
                className="Catalog__item__add"
                onClick={() => this.props.addProduct(prod.name)}
              >
                ADD
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
}


export default Catalog