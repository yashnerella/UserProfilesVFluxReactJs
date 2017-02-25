/**
 * Created by yashw on 17-02-2017.
 */
import React,{Component} from 'react';


import UserProfilesStore from '../stores/UserProfilesStore';
import {User} from './User';


export class Users extends Component{
    constructor(){
        super();
        this.state = {
            users: []
        }
    }

    componentWillMount(){
        this.setState({
            users: UserProfilesStore.getUsers()
        });
        console.log(UserProfilesStore.getUsers());
    }

    componentDidMount(){
        //this.storeSubscription = UserProfilesStore.addListener((data)=> this.handleStoreChange(data));
    };

    componentWillUnmount(){
        //this.storeSubscription.remove();
    }

    // handleStoreChange(){
    //     this.setState({
    //         users: UserProfilesStore.getUsers()
    //     });
    // }

    render(){
        return(
            <div className="col-sm-4">
                {this.state.users.map((user, i)=> <User key={i} userDetails={user}/>)}
            </div>
        );
    }
}


