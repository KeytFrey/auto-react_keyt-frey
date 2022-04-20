import './App.css';

import Header from '../Header';
import Footer from '../Footer';
import HomePage from '../../pages/Home'
import AboutPage from '../../pages/About'
import OurWorks from '../../pages/OurWork'
import FeedBack from '../../pages/FeedBack'
import NotFound from '../../pages/NotFound'

import React from 'react';
import {Route, Routes} from 'react-router-dom';

import {AuthContext} from '../../AuthContext';

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            user: null
        }
    }

    setUser = (user) => {
        console.log('user', user)
        this.setState({user})
    }

    render() {
        return (
            <AuthContext.Provider value={{
                setUser: this.setUser,
                user: this.state.user
            }}>
                <div>
                    <Header />
                    <div className="body">
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/about" element={<AboutPage />} />
                            <Route path="/our-works" element={<OurWorks />} />
                            <Route path="/feed-back" element={<FeedBack />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </div>
                    <Footer />
                </div>
            </AuthContext.Provider>
        )
    }
}

export default App;