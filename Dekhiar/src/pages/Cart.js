import React from 'react'

import Img from 'components/Img'


class Cart extends React.Component {
  state = {}

  render = () =>
    <div className="Cart">
      <div className="container">
        <div className="Cart__container">
          {this.props.products
            .map(prod => ({
              ...prod,
              length: this.props.cart.filter(elem => elem === prod.name).length
            }))
            .map(prod =>
              prod.length > 0 ?
                <div
                  className="Cart__item"
                  key={prod.name}
                >
                  <Img src={prod.img} />
                  <div className="Cart__item__length">
                    [{prod.length}]
                  </div>
                  <div
                    className="Cart__item__add"
                    onClick={() => this.props.addProduct(prod.name)}
                  >
                    +
                  </div>
                  <div
                    className="Cart__item__remove"
                    onClick={() => this.props.removeProduct(prod.name)}
                  >
                    -
                  </div>
                </div>
              : ""
            )
          }
        </div>
      </div>
    </div>
}


export default Cart