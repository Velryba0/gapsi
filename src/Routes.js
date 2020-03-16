import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './views/Home';
import Shop from './views/Shop';

const Routes = () => {
    return (
        <>
        <Switch>
            <Route exact path = '/' component={Home} />
            <Route path='/products' component={Shop}/>
        </Switch>
        </>
    )
}

export default Routes;