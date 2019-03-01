import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchGifs, updateSearchTerm, saveFavorite} from '../actions/gifs';

import '../styles/landing-page.css';

export class LandingPage extends React.Component {

    handleInputChange(e) {
        this.props.dispatch(updateSearchTerm(e.target.value));
    }

    handleSearchSubmit(e) {
        e.preventDefault();
        this.props.dispatch(fetchGifs(this.props.gifs.searchTerm));
    }

    handleFavoriteClick(url) {
        if (this.props.loggedIn) {
            this.props.dispatch(saveFavorite(this.props.loggedIn.username, url))
        } else {
            window.location.replace("/login");
        }
    }
    
    render() {
        let gifEmbeds;

        if (this.props.gifs.gifs) {
            gifEmbeds = this.props.gifs.gifs.map((gif, index) => {
                return (
                    <div className="gif-container" key={index} >
                        <img className="gif" src={gif} alt="giphy-gif" />
                        <button className="favorite-button" onClick={() => this.handleFavoriteClick(gif)}>Favorite</button>
                    </div>
                )
            })
        }

        return (
            <div className="home">

                <div className="nav">
                    <Link className="nav-link" to={this.props.loggedIn ? "/favorites" : "/login"}>Favorites</Link>
                    <Link className="nav-link" to="/login">Login</Link>
                </div>
                
                <div className="search-bar">
                    <form onSubmit={(e) => this.handleSearchSubmit(e)}>
                        <input onChange={e => this.handleInputChange(e)} />
                        <button type="submit">Search</button>
                    </form>
                </div> 
    
                {gifEmbeds}
    
            </div>
        );
    }
    
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser,
    gifs: state.gifs
});

export default connect(mapStateToProps)(LandingPage);
