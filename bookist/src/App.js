// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import Bookist from './Components/BookList'
import Shelf from './Components/Shelf'
import { Component } from 'react';
import data from './data'
import SearchBar from './Components/SearchBar'

class App extends Component {
  constructor () {
    super()
    this.state = {
      books: data,
      shelf: []
    }
    this.addToShelf = this.addToShelf.bind(this)
    this.clearShelf = this.clearShelf.bind(this)
    this.filterBooks = this.filterBooks.bind(this)
  }
  addToShelf() {
    this.setState({shelf: this.state.shelf.push('title')})
  }
  clearShelf () {
    this.setState({shelf: []})
  }
  filterBooks(input) {
    let filteredBooks = []
    this.state.books.filtet((elem, i) => {
      if (input === elem[i].title) {
        return filteredBooks.push(elem[i])
      } else if (input === elem[i].author) {
        return filteredBooks.push(elem[i])
      }
    })
    this.setState({books: filteredBooks})
  }
  render() {
  return (
    <main className="App">
      <Header/>
      <SearchBar filterBooks={this.filterBooks}/>
      <div className="container">
        <Bookist books={this.state.books} addToShelf={this.addToShelf}/>
        <Shelf shelf={this.state.shelf} clearShelf={this.clearShelf}/>
      </div>
    </main>
  );
}
}

export default App;
