import React from 'react'


const names = ["Джон Риз", "Дехиар Гусев", "Лев Васильев", "Егор Пшеничный"]


class About extends React.Component {
  state = {}

  render = () =>
    <div className="About">
      <div className="container">
        {names.map(name => <div className="About__name" key={name}>{name};</div>)}
      </div>
    </div>
}


export default About