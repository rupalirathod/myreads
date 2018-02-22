import React from 'react'
import * as BooksAPI from './BooksAPI'
import{Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import './App.css'
import SearchPage from './seachPage'
import ListOfBooks from './ListOfBooks'

class BooksApp extends React.Component {
  state = {
    books:[{
      title: "Jai",
      author: 'Rupali',
      id: 1
    },{
    title: "Yahoo",
    author: 'Rup',
    id: 2
  },{

  title: "JAi HO",
  author: 'Jeet',
  id: 2
}
  ],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }
  componenDidMout(){
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }
  // removeBook = (book) =>{
  //   this.setState((state) => ({
  //     books: state.books.filter((b)=> b.id !== book.id)
  //   }))
  //   BooksAPI.remove(book)
  // }
  // addBook = (book) => {
  //   BooksAPI.update(book).then(book =>{
  //     this.setState(state=>({
  //       books: state.books.concat([book])
  //     }))
  //   })
  // }
  render() {
    return (
      <div>
        {/* <Route exact path='/search' render={() => (
          <SearchPage></SearchPage>
        )}/> */}
        <Route exact path='/books' render = {() => (
          <ListOfBooks books={this.state.books}></ListOfBooks>
          
        )}/> 
      </div>
    )
  }
}

export default BooksApp
