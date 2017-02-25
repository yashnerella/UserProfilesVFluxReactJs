/**
 * Created by yashw on 17-02-2017.
 */
import React, {Component} from 'react';
import UserActions from '../actions/UserActions';

export class UserInput extends Component{
    constructor(){
        super();
        this.state = {
            uid: 1,
            ufname: "",
            ulname: "",
            ustrt1: "",
            ustrt2: "",
            ucity: "",
            ustate: "",
            uzip: "",
            uuname: "",
            uemail: "",
            uphone: ""
        };
        this._handleInputChange = this._handleInputChange.bind(this);
        this._handleOnSubmit = this._handleOnSubmit.bind(this);
    }

    _handleInputChange(event){
        const target = event.target;
        const value = target.value;
        const id = target.id;
        this.setState({
            [id]: value
        });
    }

    _handleOnSubmit(){
        console.log(this.state);
        UserActions.submittedUserProfile(this.state);
        var userId = this.state.uid + 1;
        this.setState({
            uid: userId,
            ufname: "",
            ulname: "",
            ustrt1: "",
            ustrt2: "",
            ucity: "",
            ustate: "",
            uzip: "",
            uuname: "",
            uemail: "",
            uphone: ""
        })
    }

    render(){
        return(
            <div className="userinputstyle col-sm-4 sidenav">
                <h3>--- Enter Details ---</h3>
                <label className="label label-info">First Name: </label><input type="text" className="form-control" id="ufname" value={this.state.ufname} onChange={this._handleInputChange}/><br/>
                <label className="label label-info">Last Name: </label><input type="text" className="form-control" id="ulname" value={this.state.ulname} onChange={this._handleInputChange}/><br/><hr className="linestyle"/>
                <label>ADDRESS: </label><br/>
                <label className="label label-info">Street 1: </label><input type="text" className="form-control" id="ustrt1" value={this.state.ustrt1} onChange={this._handleInputChange}/><br/>
                <label className="label label-info">Street 2: </label><input type="text" className="form-control" id="ustrt2" value={this.state.ustrt2} onChange={this._handleInputChange}/><br/>
                <label className="label label-info">City: </label><input type="text" className="form-control" id="ucity" value={this.state.ucity} onChange={this._handleInputChange}/><br/>
                <label className="label label-info">State: </label><input type="text" className="form-control" id="ustate" value={this.state.ustate} onChange={this._handleInputChange}/><br/>
                <label className="label label-info">Zip Code: </label><input type="text" className="form-control" id="uzip" value={this.state.uzip} onChange={this._handleInputChange}/><br/><hr className="linestyle"/>
                <label className="label label-info">User Name: </label><input type="text" className="form-control" id="uuname" value={this.state.uuname} onChange={this._handleInputChange}/><br/>
                <label className="label label-info">Email: </label><input type="text" className="form-control" id="uemail" value={this.state.uemail} onChange={this._handleInputChange}/><br/>
                <label className="label label-info">Phone #: </label><input type="text" className="form-control" id="uphone" value={this.state.uphone} onChange={this._handleInputChange}/><br/>
                <button className="btn btn-primary" onClick={this._handleOnSubmit}>Create User</button>
            </div>
        );
    }
}