import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Sidebar from './components/Sidebar/Sidebar';
import { Route, withRouter } from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import {InitialThunk} from './Redux/app-reducer';
import { compose } from 'redux';
import Load from './Common/Load/Load';


// addmessage={props.addmessage}
// UpdateNewDialog={props.UpdateNewDialog}

class App extends React.Component {

    componentDidMount () {
        this.props.InitialThunk()
    }

    render() {
        if(!this.props.initialized) {
        return <Load/>
        }
    return (
        <div className='app-wrapper'>
            <HeaderContainer />
            <Navbar />
            <div className='app-wrapper-content'>
                <Route path='/dialogs'
                    render={() => <DialogsContainer />} />
                  

                <Route path='/profile/:userId'
                    render={() => <ProfileContainer />} />
                <Route path='/Music'
                    render={() => <Music />} />

                <Route path='/News'
                    render={() => <News />} />

                <Route path='/Settings'
                    render={() => <Settings />} />

                {/* <Route path='/Sidebar'
                    render={() => <Sidebar state={props.state.Sidebarpage}/>} />    */}

                <Route path='/Users'
                    render={() => <UsersContainer/>}  />     

                <Route path ='/Login'
                    render={() => <Login/>}/>     

            </div>
        </div>
    )
}
}

const mapStateToProps = (state) => ({
    initialized: state.Initial.initialized
})

export default compose(withRouter, 
    connect(mapStateToProps, {InitialThunk}))(App);