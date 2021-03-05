import React, { Component } from 'react'

class BookList extends Component {

    render() {
        let mappedBooks = this.props.books.map(book => book);
        return (
            <section className="box-container">
                <div className="first-row">
            <div className="size">
                <img onClick={this.props.addToShelf} src={mappedBooks[0].img} alt="book"/>
                <p>{mappedBooks[0].title}</p>
                <p>{mappedBooks[0].author}</p>
            </div>
            <div className="size">
                <img src={mappedBooks[1].img} alt="book"/>
                <p>{mappedBooks[1].title}</p>
                <p>{mappedBooks[1].author}</p>
            </div>
            <div className="size">
                <img src={mappedBooks[2].img} alt="book"/>
                <p>{mappedBooks[2].title}</p>
                <p>{mappedBooks[2].author}</p>
            </div>
            <div className="size">
                <img src={mappedBooks[3].img} alt="book"/>
                <p>{mappedBooks[3].title}</p>
                <p>{mappedBooks[3].author}</p>
            </div>
            <div className="size">
                <img src={mappedBooks[4].img} alt="book"/>
                <p>{mappedBooks[4].title}</p>
                <p>{mappedBooks[4].author}</p>
            </div>
            <div className="size">
                <img src={mappedBooks[5].img} alt="book"/>
                <p>{mappedBooks[5].title}</p>
                <p>{mappedBooks[5].author}</p>
            </div>
            </div>
            <div className="second-row">
            <div className="size">
                <img src={mappedBooks[6].img} alt="book"/>
                <p>{mappedBooks[6].title}</p>
                <p>{mappedBooks[6].author}</p>
            </div>
            <div className="size">
                <img src={mappedBooks[7].img} alt="book"/>
                <p>{mappedBooks[7].title}</p>
                <p>{mappedBooks[7].author}</p>
            </div>
            <div className="size">
                <img src={mappedBooks[8].img} alt="book"/>
                <p>{mappedBooks[8].title}</p>
                <p>{mappedBooks[8].author}</p>
            </div>
            <div className="size">
                <img src={mappedBooks[9].img} alt="book"/>
                <p>{mappedBooks[9].title}</p>
                <p>{mappedBooks[9].author}</p>
            </div>
            <div className="size">
                <img src={mappedBooks[10].img} alt="book"/>
                <p>{mappedBooks[10].title}</p>
                <p>{mappedBooks[10].author}</p>
            </div>
            <div className="size">
                <img src={mappedBooks[11].img} alt="book"/>
                <p>{mappedBooks[11].title}</p>
                <p>{mappedBooks[11].author}</p>
            </div>
            </div>
            </section>
        )


        // let mappedBooks = []
        // for (let i=0; i<this.props.books.length; i++) {
        //    return (
        //         <div className="book">
        //         <img src={this.props.books[i].img} alt="book"/>
        //         <p>{this.props.books[i].title}</p>
        //         <p>{this.props.books[i].author}</p>
        //     </div>
        //    )
        // }
        // return {mappedBooks}


    // let mappedBooks = this.props.books.map((elem) => (elem))
    //      for (let i=0; i < 12; i++) {  
    // return (
    //        <div className="book">
    //         <img src={mappedBooks[i].img} alt="book"/>
    //         <p>{mappedBooks[i].title}</p>
    //         <p>{mappedBooks[i].author}</p>
    //         </div>
    //        )
    //     } 
    }
}

export default BookList