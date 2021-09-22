import React from 'react';
import Book from './book'
import './bookList.css'
import { BookContext } from '../context/BookContext';
import { ThemeContext } from '../context/ThemeContext';

class BookList extends React.Component {

    render() {

        return (
    <ThemeContext.Consumer>{ThemeContext =>(
        <BookContext.Consumer>{BookContext => {

            const {changeTheme,isDarkTheme, dark, light} = ThemeContext;
            const {books}=BookContext;
            const theme = isDarkTheme ? dark : light;
                return (
                    <section className="page-section" style = {{backgroundColor: theme.bg, color: theme.txt}} id="portfolio">
                        <div className="container col-9">
                            <div className="text-center">
                                <h2 className="section-heading text-uppercase">BookFolio</h2>
                                <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                                <button type='button' className='btn btn-danger' style={{position:'relative',bottom:'40px'}} onClick={changeTheme}>Change Theme</button>
                            </div>
                            <div className="row">

                                {books.map((book, i) => {
                                    return <Book book={book}
                                        key={i} />
                                })}

                            </div>
                        </div>
                    </section>
                )
            }}
        </BookContext.Consumer>
    )}
        
    </ThemeContext.Consumer>

        )
    }

}

export default BookList