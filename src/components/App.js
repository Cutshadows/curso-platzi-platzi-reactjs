import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';
import Layout from './Layout'
import NotFound from '../pages/NotFound'
import BadgesHome from '../pages/BadgesHome'
import Accordeon from '../pages/Accordeon'
import BadgeEdit from '../pages/BadeEdit'
import BadgeDetailsContainer from '../pages/BadgeDetailsContainer';

function App(){
    return(
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={BadgesHome} />
                    <Route exact path="/badges" component={Badges} />
                    <Route exact path="/badges/new" component={BadgeNew} />
                    <Route exact path="/badges/:badgeId" component={BadgeDetailsContainer} />
                    <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
                    <Route exact path="/accordeon" component={Accordeon} />
                    <Route exact component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}
/* class App extends React.Component{
    render()
} */
export default App
