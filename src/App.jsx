import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createBrowserHistory } from "history";
import './scss/style.scss';

// //
// import Home from './pages/Home'
// import Bookings from './pages/Bookings'
// import Offices from './pages/Offices'
// import Cars from './pages/Cars'
// import Page404 from './pages/page404/Page404'
// import Page500 from './pages/page500/Page500';

import Layout from './pages/layout/Layout'

const loading = (
    <div className="pt-3 text-center">
        <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
)

// Containers
const Home = React.lazy(() => import('./pages/Home'));
const Bookings = React.lazy(() => import('./pages/Bookings'));
const Offices = React.lazy(() => import('./pages/Offices'));
const Cars = React.lazy(() => import('./pages/Cars'));


// Pages
const Page404 = React.lazy(() => import('./pages/page404/Page404'));
const Page500 = React.lazy(() => import('./pages/page500/Page500'));

// const basename = window.bayramo_status.basename // TODO: Get basename
const basename = ''

class App extends Component {

    render() {
        return (
            <Router history={createBrowserHistory()}>
                <React.Suspense fallback={loading}>
                    <Layout>
                        <Routes>
                            <Route exact path="/500" name="Page 500" element={<Page500/>} />
                            <Route exact path={basename} name="Home" element={<Home/>} />
                            <Route path={basename + '/bookings'} name="Returns Add" element={<Bookings/>} />
                            <Route path={basename + '/cars'} name="Returns View" element={<Cars/>} />
                            <Route path={basename + '/offices'} name="Returns View" element={<Offices/>} />
                            <Route name="Page 404" element={<Page404/>} />
                        </Routes>
                    </Layout>
                </React.Suspense>
            </Router>
        );
    }
}

export default App;