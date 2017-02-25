/**
 * Created by yashw on 17-02-2017.
 */
import React, {Component} from 'react';
import {Link} from 'react-router';

export class Header extends Component{
    render(){
        {/**/}
        return(
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <li><Link to={"/home"} activeStyle={{color: "red"}}>Home</Link></li>
                            <li><Link to={"/profileinput"} activeStyle={{color: "red"}}>Profile Input</Link></li>
                            <li><Link to={"/userdir"} activeStyle={{color: "red"}}>User Directory</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}