import React from "react";
import { Switch, Route } from "react-router-dom";

import home from '../pages/home';
import sobre from '../pages/sobre';
function Routes() {
    return (
        <Switch>
            <Route path="/sobre" component={sobre}/>
            <Route path="/" component={home}/>
        </Switch>
        
    );
}


export default Routes;
