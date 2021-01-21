import React from 'react'

import Home from 'pages/Home'
import Catalog from 'pages/Catalog'
import About from 'pages/About'
import Cart from 'pages/Cart'


const pages = [
  {
    label: "Главная",
    link: "home",
    Comp: Home,
  },
  {
    label: "Товары",
    link: "catalog",
    Comp: Catalog,
  },
  {
    label: "О нас",
    link: "about",
    Comp: About,
  },
  {
    label: "Корзина",
    link: "cart",
    Comp: Cart,
  },
]

const products = [
  {
    name: "GN",
    img: "green.png",
  },
  {
    name: "BK",
    img: "black.png",
  },
  {
    name: "BE",
    img: "blue.png",
  },
]


class App extends React.Component {
  state = {
    current: "home",
    products: [],
  }

  removeOneFromArray = (array, item) => {
    const index = array.indexOf(item)

    if (index === -1)
      return array
    return [...array.slice(0, index), ...array.slice(index + 1)]
  }

  render = () =>
    <div className="Menu">
      <div className="Menu__nav">
        {pages.map(item =>
          <div
            className={`Menu__nav__item ${
              this.state.current === item.link && "Menu__nav__item--active"}`}
            key={item.link}
            onClick={() => this.setState({ current: item.link })}
          >
            {item.label} {item.link === "cart" && `[${this.state.products.length}]`}
          </div>
        )}
      </div>

      <div className="Menu__content">
        {(Comp =>
          <Comp
            addProduct={prod => this.setState({ products: [...this.state.products, prod] })}
            removeProduct={prod => this.setState({ products: this.removeOneFromArray(this.state.products, prod) })}
            products={products}
            cart={this.state.products}
          />
        )(pages
          .reduce((a, b) => a.link === this.state.current ? a : b)
          .Comp)}
      </div>
    </div>
}

export default App
