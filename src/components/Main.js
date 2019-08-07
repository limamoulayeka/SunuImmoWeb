import React from 'react';
import { Switch, Route } from 'react-router';
import PropertyList from './Property/PropertyList';
import PropertyAdd from './Property/PropertyAdd';
import LocationAdd from './Location/LocationAdd';
import Login from './Login';

const Main = ()=>(

    <div>
        <main>
        <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/addProperty" component={PropertyAdd} />
        <Route exact path="/listProperty" component={PropertyList} />
        <Route exact path="/addLocation" component={LocationAdd} />
        </Switch>
        </main>
    </div>
)

export default Main;