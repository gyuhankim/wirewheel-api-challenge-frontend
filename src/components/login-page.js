import React from 'react';
import {connect} from 'react-redux';
import LoginForm from './login-form';

import '../styles/login-page.css';

export class LoginPage extends React.Component {

    render() {
        if (this.props.loggedIn) {
          window.location.replace("/");
        }
        
        return (
            <div className="login">
                <LoginForm />
            </div>
        );
    }
    
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    gifs: state.gifs
});

export default connect(mapStateToProps)(LoginPage);
