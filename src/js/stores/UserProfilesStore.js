/**
 * Created by yashw on 17-02-2017.
 */
import React, {Component} from 'react';
import {EventEmitter} from 'fbemitter';


import UserActionsDispatcher from '../dispatchers/UserActionsDispatcher';
import UserConstants from '../constants/UserConstants';

let users = [];
let __emitter = new EventEmitter();

let UserProfilesStore = {
     getUsers(){
         return users;
     },
    addListener(callback){
        return __emitter.addListener(UserConstants.CHANGE_EVENT, callback)
    }
};

UserProfilesStore.dispatchToken =  UserActionsDispatcher.register((action) => {
    switch(action.type){
        case UserConstants.SUBMITTED_PROFILE_DETAILS:
            users.push(action.payload);
            __emitter.emit(UserConstants.CHANGE_EVENT);
            break;
    }
});

export default UserProfilesStore;



