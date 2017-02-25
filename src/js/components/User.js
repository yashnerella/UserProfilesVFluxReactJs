/**
 * Created by yashw on 09-02-2017.
 */
import React, {Component} from 'react';

export class User extends Component{
    render(){
        return(
            <div className="user">
                <h3>#{this.props.userDetails.uid}</h3>
                <label>{this.props.userDetails.ufname}</label>
                <label>{this.props.userDetails.ulname}</label><br/>
                <label>Address:</label><br/>
                <label>{this.props.userDetails.ustrt1 + ","}</label>
                <label>{this.props.userDetails.ustrt2 + ","}</label>
                <label>{this.props.userDetails.ucity + ","}</label>
                <label>{this.props.userDetails.ustate + ","}</label>
                <label>{this.props.userDetails.uzip}</label><br/>
                <label>User App Details: </label><br/>
                <label>{this.props.userDetails.uuname + " || "}</label>
                <label>{this.props.userDetails.uemail + " || "}</label>
                <label>{this.props.userDetails.uphone}</label>
            </div>
        );
    }
}