import React from 'react';
import {connect} from 'react-redux';
// import {Link, Redirect} from 'react-router-dom';
import {fetchGifs, updateSearchTerm} from '../actions/gifs';

import '../styles/landing-page.css';

export class LandingPage extends React.Component {

    componentDidMount() {

    }

    handleInputChange(e) {
        this.props.dispatch(updateSearchTerm(e.target.value));
    }

    handleSearchSubmit(e) {
        e.preventDefault();
        this.props.dispatch(fetchGifs(this.props.gifs.searchTerm));
    }
    
    render() {
        let gifEmbeds;

        if (this.props.gifs.gifs) {
            gifEmbeds = this.props.gifs.gifs.map((gif, index) => {
                return (
                    <div className="gif-container" key={index} >
                        <img src={gif} alt="some-gif" />
                    </div>
                )
            })
        }

        return (
            <div className="home">
    
                {/* <h2>Welcome to Foo App</h2>
                <LoginForm />
                <Link to="/register">Register</Link> */}
                
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
    // loggedIn: state.auth.currentUser !== null
    gifs: state.gifs
});

export default connect(mapStateToProps)(LandingPage);
