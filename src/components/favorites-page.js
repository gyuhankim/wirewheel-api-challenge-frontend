import React from 'react';
import {connect} from 'react-redux';

import '../styles/favorites-page.css';

export class FavoritesPage extends React.Component {

    render() {
        let favoritesEmbeds;

        if (this.props.user) {
            favoritesEmbeds = this.props.user.favorites.map((favorite, index) => {
                return (
                    <div className="favorite-container" key={index} >
                        <img className="favorite" src={favorite} alt="giphy-favorite" />
                    </div>
                )
            })
        }

        return (
            <div className="favorites-page">
                <h1>{`${this.props.user.username}'s Favorite GIFs`}</h1>
                <div className="favorites">
                    {favoritesEmbeds}
                </div>
            </div>
        );
    }
    
}

const mapStateToProps = state => ({
    user: state.auth.currentUser
});

export default connect(mapStateToProps)(FavoritesPage);
