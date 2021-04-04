import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter, Route } from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

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
                    render={() => <DialogsContainer />} />
                  

                <Route path='/profile'
                    render={() => <Profile />} />
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

            </div>
        </div>
    )
}

export default App;