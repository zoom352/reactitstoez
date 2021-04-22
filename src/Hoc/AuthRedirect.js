import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

let mapStateToPropsRedirect = (state) => ({
    isauth: state.auth.isauth
});


export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if(!this.props.isauth) return <Redirect to='/Login'/>

                return <Component {...this.props}/>
            }
        }

       
        
        let connectauthContainer = connect(mapStateToPropsRedirect)(RedirectComponent);

        return connectauthContainer;

    }
