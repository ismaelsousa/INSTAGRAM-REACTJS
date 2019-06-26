import { Switch, Route } from 'react-router-dom';
import Feed from './pages/Feed';
import New from './pages/New';
import React from 'react';

function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Feed} />
            <Route path="/new" component={New} />
        </Switch>
    );
};

export default Routes;