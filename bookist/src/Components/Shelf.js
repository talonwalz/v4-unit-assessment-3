import React, { Component } from 'react'

class Shelf extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    
    render () {
    let mappedTitle = this.props.shelf.map(elem => elem)
        
    return (
    <div>
    <p>{mappedTitle}</p>
    <p>Your Shelf</p>
    <button>Clear Shelf</button>
    {mappedTitle}
    </div>
    )
}
}


export default Shelf