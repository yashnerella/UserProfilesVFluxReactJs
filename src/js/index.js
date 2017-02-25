import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import {App} from './components/App';
import {UserInput} from './components/UserInput';
import {Home} from './components/Home';
import {Users} from './components/Users';

ReactDOM.render((<Router history={browserHistory}>
                    <Route path="/" component={App}>
                        <IndexRoute component={Home}/>
                        <Route path="profileinput" component={UserInput}/>
                        <Route path="userdir" component={Users}/>
                        <Route path="home" component={Home}/>
                    </Route>
                </Router>), document.getElementById('app'));