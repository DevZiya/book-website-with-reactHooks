import React from 'react'
import './books.css'
import { ThemeContext } from '../context/ThemeContext';

class Book extends React.Component{
    render(){

        return(
           <ThemeContext.Consumer>{ThemeContext =>{
            const {isDarkTheme, dark, light} = ThemeContext;
            const theme = isDarkTheme ? dark : light;
               return(
                <div className="col-lg-4 col-sm-6 mb-4">
                <div className="portfolio-item">
                    <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                        <div className="portfolio-hover"  style={{backgroundColor:theme.hover}}>
                            <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img className="img-fluid" src={this.props.book.imageURL} alt="" />
                    </a>
                    <div className="portfolio-caption">
                        <div className="portfolio-caption-heading">{this.props.book.title}</div>
                        <div className="portfolio-caption-subheading text-muted">{this.props.book.author}</div>
                    </div>
                </div>
                </div>
               )
           }}

           </ThemeContext.Consumer>
        )
    }
}

export default Book