import React, {ReactElement} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from './components/Footer'
import GameDetails from './components/Game/GameDetails'
import Home from './components/Home'
import Navbar from './components/Navbar'
import GlobalStyles from './styles/globalStyle'
import { Provider } from "react-redux";
import store from './store/store'
import GameLibrary from './components/Game/GameLibrary'

const App = (): ReactElement => {
    return (
        <Provider store={store}>
        <GlobalStyles/>
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/mylibrary" exact>
                    <GameLibrary />
                </Route>
                <Route path="/game/:id" exact render={({match}) => <GameDetails id={match.params.id} />} />
            </Switch>
        </Router>
        <Footer />
        </Provider>
    )
}

export default App