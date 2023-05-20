import * as types from './typeactions'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword,signOut, updateProfile} from 'firebase/auth'
import { auth } from '../componets/fbConfig'
import { useNavigate } from 'react-router-dom'

const loginStart = () => ({
    type : types.LOGIN_START,
})
const loginsucces = (user) => ({
    type: types.LOGIN_SUCCESS,
    payload : user,
})

const loginfail = (error) => ({
    type: types.LOGIN_FAIL,
    payload : error,
})
const logoutstart = () => ({
    type : types.LOGOUT_START
})
const logoutsucces = () => ({
    type: types.LOGOUT_SUCCESS,
})

const logoutfail = (error) => ({
    type: types.LOGOUT_FAIL,
    payload : error,
})


const registerStart = () => ({
    type : types.LOGIN_START,
})
const registersucces = (user) => ({
    type: types.LOGIN_SUCCESS,
    payload : user,
})

const registerfail = (error) => ({
    type: types.LOGIN_FAIL,
    payload : error,
})

export const loginInitiate = (email,password) => {
    return function (dispatch) {
        dispatch(loginStart());
         signInWithEmailAndPassword(auth,email,password)
          .then (({user}) => {
            dispatch(loginsucces(user))
            console.log('Succes')

          })
          .catch((error) => dispatch(loginfail(error.message)))
    }
}

export const registerInitiate = (email,password,displayName,confirm) => {
    return function (dispatch) {
        dispatch(registerStart());
         createUserWithEmailAndPassword(auth,email,password)
          .then (({user}) => {
             dispatch(registersucces(user))
             updateProfile(user, {
                displayName
            });
          })
          .catch((error) => dispatch(registerfail(error.message)))
    }
}
export const logOut = () => {
    return function (dispatch) {
        dispatch(logoutstart());
        signOut(auth)
        .then ((resp) =>
          dispatch(loginsucces())
        )
        .catch((error) => dispatch(logoutfail(error.message)))
    }
}
export const setUser = (user) => ({
    type:types.SET_USER,
    payload:user
})