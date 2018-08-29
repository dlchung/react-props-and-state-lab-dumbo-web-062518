import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (type) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: type,
      },
    });
  }

  onFindPetsClick = () => {

    let query
    if ((this.state.filters.type === 'all') || (this.state.filters.type === undefined)) {
      query = "/api/pets"
    } else {
      query = `/api/pets?type=${this.state.filters.type}`
    }
    return fetch(query, {

    }, {method: "GET"})
    .then(r => r.json()).then(r => {
      this.setState({pets: r})
    })
  }

  onAdoptPet = (e) => {
    let adoptedPet = this.state.pets.find((p) => {
      return (p.id === e)
    })
    adoptedPet.isAdopted = true
    this.setState(adoptedPet)
  }

// this.setState({pets: r})
  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
