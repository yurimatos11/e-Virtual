import React from "react";
import { Switch, Route } from "react-router-dom";

import home from '../pages/home';
import cart from '../pages/cart';
function Routes() {
    return (
        <Switch>
            <Route path="/cart" component={cart}/>
            <Route path="/" component={home}/>
        </Switch>
        
    );
}


export default Routes;
