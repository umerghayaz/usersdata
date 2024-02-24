import * as ActionTypes  from "../Constants/UserConstants";
import axios from 'axios'
import { handleError } from "../Shared/handleError";
var token= 'token';
// for getting all user data
export const getUsers = () => dispatch => {
    dispatch(UsersLoading());
    axios.get(`https://api.github.com/users`, {
      headers: {
        'Authorization': `token ${token}`,
        'X-GitHub-Api-Version': '2022-11-28'
      }
    })
    .then(r => {
      console.log(r.data, 'inside get');
      dispatch(getUsersdata(r.data));
    })
    .catch(e => dispatch(UsersFailed(handleError(e))));
  }

// i have not used it but implemented its full functionality
export const getByName = (id) => dispatch => {
    // dispatch(CustomersLoading())
    axios.get(`https://api.github.com/users/${id}`,{
        headers: {
          'Authorization': `token ${token}`,
          'X-GitHub-Api-Version': '2022-11-28'
        }
      })
    .then(r =>{ 
        console.log(r.data,'inside action')
        
        dispatch(getUsersiddata(r.data))})
    .catch(e => dispatch(UsersFailed(handleError(e))))
}
const UsersLoading = () => ({
    type: ActionTypes.USERS_LOADING
})

const UsersSuccess = data => ({
    type: ActionTypes.USERS_SUCCESS,
    message: data
})
const Usersdata = data => ({
    type: ActionTypes.USERS_GET,
    payload: data
})
const getUsersdata = data => ({
    type: ActionTypes.USERS_GET,
    payload: data
})
const getUsersiddata = data => ({
    type: ActionTypes.CUSTOMERS_GET_EDIT,
    payload: data
})
// const getCustomersdataedit = editdata => ({
//     type: ActionTypes.CUSTOMERS_GET_EDIT,
//     payload: editdata
// })
const UsersFailed = err => ({
    type: ActionTypes.USERS_FAILED,
    error: err
})