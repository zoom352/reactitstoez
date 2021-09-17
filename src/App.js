import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { InitialThunk } from './Redux/app-reducer';
import { compose } from 'redux';
import Load from './Common/Load/Load';
import MusicContainer from './components/Music/MusicContainer';
import { Provider } from 'react-redux';
import store from "./Redux/redux-store";
import { Suspense } from 'react';
import { WithSuspense } from './Hoc/WithSuspence';
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));


// addmessage={props.addmessage}
// UpdateNewDialog={props.UpdateNewDialog}

class App extends React.Component {

    componentDidMount() {
        this.props.InitialThunk()
    }

    render() {
        if (!this.props.initialized) {
            return <Load />
        }
        return (
            
            <div className='app-wrapper'>
                <HeaderContainer />
                <Navbar />


                <div className='app-wrapper-content'>
                
                    <Route path='/dialogs'
                        render={WithSuspense(DialogsContainer) } />
                
                   
                
                    <Route path='/profile/:userId?'
                    render={ WithSuspense(ProfileContainer)} />
                

                    <Route path='/Music'
                        render={() => <MusicContainer />} />

                    <Route path='/News'
                        render={() => <News />} />

                    <Route path='/Settings'
                        render={() => <Settings />} />

                    {/* <Route path='/Sidebar'
                    render={() => <Sidebar state={props.state.Sidebarpage}/>} />    */}

                    <Route path='/Users'
                        render={() => <UsersContainer />} />

                    <Route path='/Login'
                        render={() => <Login />} />

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.Initial.initialized
})

// export default compose(withRouter,
//     connect(mapStateToProps, { InitialThunk }))(App);

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, { InitialThunk }))(App);

const TestApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer />
            </Provider>
    </BrowserRouter>
}    

export default TestApp;