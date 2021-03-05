import React, { Component } from 'react'

class SearchBar extends Component {
    constructor() {
        super()
        this.state = {
            userInput: ``
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleClear = this.handleClear.bind(this)
    }
    handleChange(event) {
        this.setState({userInput: event.target.value})
    }
    handleClick() {
        return this.props.filterBooks(this.state.userInput)
    }
    handleClear () {
        this.setState({userInput: ``})
    }
    render() {
        return (
            <div className="buttons">
            <div className="center">
            <input value={this.state.userInput} onChange={this.handleChange}/>
            <button onClick={this.handleClick}>Search</button>
            <button onClick={this.handleClear}>Clear Search</button>
            </div>
            </div>
        )
    }
}
export default SearchBar