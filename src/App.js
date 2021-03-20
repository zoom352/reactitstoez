import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter, Route } from "react-router-dom";

// addmessage={props.addmessage}
// UpdateNewDialog={props.UpdateNewDialog}

const App = (props) => {
    
    // let UnderSidebars = [
    //     {id: 1, name: 'PSG'}
    // ]

    return (
        <div className='app-wrapper'>
            <Header />
            <Navbar />
            <div className='app-wrapper-content'>
                <Route path='/dialogs'
                    render={() => <Dialogs Store={props.Store}/>} />

                <Route path='/profile'
                    render={() => <Profile
                        profilePage={props.state.profilePage}
                        dispatch={props.dispatch} />} />
                <Route path='/Music'
                    render={() => <Music />} />

                <Route path='/News'
                    render={() => <News />} />

                <Route path='/Settings'
                    render={() => <Settings />} />

                <Route path='/Sidebar'
                    render={() => <Sidebar state={props.state.Sidebarpage}/>} />    
            </div>
        </div>
    )
}

export default App;