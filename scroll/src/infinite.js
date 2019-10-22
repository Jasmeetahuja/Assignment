import InfiniteLoader from 'react-infinite-loader'
import ReactDOM from 'react-dom'
import React, { Component, PropTypes } from 'react'

class TestComponent extends Component {

  componentDidMount() {
    this.loadItems()
  }

  loadItems() {
    /* just simulating a load of more items from an api here */
    setTimeout( () => {
      let items = this.state.items.slice()
      items = items.concat(this.getItems())
      this.setState({ items: items })
    }, 1000)
  }

  handleVisit () {
    this.loadItems()
  }

  getItems() {
    let items = []
    for(var i = 0; i < 10; i++) {
      items.push({ name: 'An item' })
    }
    return items
  }

  renderCards() {
    const { items } = this.state
    const cards = items.map((item, i) => {
      return (
        <div key={i}><h3>{item.name}</h3></div>
      )
    })
    return cards
  }

  render () {
    return (
      <div>
        { this.renderCards() }
        <InfiniteLoader onVisited={ () => this.handleVisit() } />
      </div>
    )
  }
}

ReactDOM.render(<TestComponent />, document.getElementById('root'))