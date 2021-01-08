import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { Foo } from './pages/Foo';
import { Bar } from './pages/Bar';
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { Profil } from './components/Profil';
import ProfilType from './types/Profil';
import styled from 'styled-components';

const userDate: ProfilType = {
    picture: 'https://9pax.pl/141x141/',
    name: 'Bartosz',
    doctor: 100,
    bhp: 100,
    access: 'user'
};

function App() {
    return (
        <div className="app">
            <LeftColumn>
                <Profil user={userDate} />
            </LeftColumn>
            <Router>
                <Route
                    render={({ location }) => (
                        <AnimateSharedLayout>
                            <AnimatePresence initial={false}>
                                <Switch location={location} key={location.pathname}>
                                    <Route exact path="/" component={Home} />
                                    <Route exact path="/foo" component={Foo} />
                                    <Route exact path="/bar" component={Bar} />
                                </Switch>
                            </AnimatePresence>
                        </AnimateSharedLayout>
                    )}
                />
            </Router>
        </div>
    );
}

const LeftColumn = styled.div`
    position: fixed;
    left: 10%;
    top: 20px;
`;

export default App;
