import * as types from '../actions/typeactions'
const initstate = {
    authError: null,
    loading : false,
    Cuser : null,
    logout : false,
}

const authreducer = (state = initstate,action) => {
    switch(action.type) {
        case types.LOGIN_START:
            return {
                ...state,
                loading: true
            }
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                authError : null,
                Cuser : action.payload
            }
            case types.LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                authError : action.payload,
            }
            case types.REGISTER_START:
                return {
                    ...state,
                    loading: true
                }
            case types.REGISTER_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    authError : null,
                    Cuser : action.payload,
                }
                case types.REGISTER_FAIL:
                return {
                    ...state,
                    loading: false,
                    authError : action.payload,
                }
                case types.LOGOUT_START:
                    return {
                        ...state,
                        loading:true,
                        logout : true
                    }
                    case types.LOGOUT_SUCCESS:
                    return {
                        ...state,
                        Cuser:null,
                        loading:false, 
                    }
                    case types.LOGOUT_FAIL:
                    return {
                        ...state,
                        loading:false,
                        authError:action.payload
                    }
                    case types.SET_USER:
                        return{
                            ...state,
                            loading:false,
                            Cuser:action.payload
                        }

        default:
            return state
    }
}

export default authreducer;