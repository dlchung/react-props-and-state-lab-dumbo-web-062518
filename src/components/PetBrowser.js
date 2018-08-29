import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  render() {
    return (<div className="ui cards">

    {this.props.pets.map(p => {
      // console.log(p)
      return (<div><Pet pet={p} onAdoptPet={this.props.onAdoptPet} isAdopted={p.isAdopted}/> </div>)
    })}

      </div>
    )
  }
}

export default PetBrowser
