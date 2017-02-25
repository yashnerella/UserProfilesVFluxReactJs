/**
 * Created by yashw on 17-02-2017.
 */
import UserActionsDispatcher from '../dispatchers/UserActionsDispatcher';
import UserConstants from '../constants/UserConstants';

let userActions =  {
    submittedUserProfile(user){
        UserActionsDispatcher.dispatch({
            type: UserConstants.SUBMITTED_PROFILE_DETAILS,
            payload: user
        })
    }
}

export default userActions;