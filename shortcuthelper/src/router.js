import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { IndexPage} from "./page"; 
import {Sider} from "./page/sider"

export class MainRouter extends React.Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path={'/'} component={IndexPage}/>
                    <Route exact path={'/sider'} component={Sider}/>
                </Switch>
            </HashRouter>
        );
    }
}