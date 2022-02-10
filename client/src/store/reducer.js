import {LOGIN, FETCHPASSWORD, LOGOUT, FETCHDETAIL, SHOW, UNSHOW, LOAD, UNLOAD} from './actionType'

const initialState = {
    isLogin: false,
    loading: false,
    passes: [],
    detail: {},
    show: false,
    navbar: [{id:'skincare'},{id:'make up'},{id:'body'},{id:'hair'},{id:'fragrance'},{id:'nails'},{id:'tools'},{id:'brands'}]
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN:
            return {
                ...state,
                isLogin: true
            }
        case FETCHPASSWORD:
            return {
                ...state,
                passes: action.data
            }
        case LOGOUT:
            return {
                ...state,
                isLogin: false
            }
        case FETCHDETAIL:
            return{
                ...state,
                detail: action.data
        
            }
        case SHOW:
            return {
                ...state,
                show:true
            }
        case UNSHOW:
            return {
                ...state,
                show:false
            }
        case LOAD:
            return{
                ...state,
                loading:true
            }
        case UNLOAD:
            return{
                ...state,
                loading: false
            }
        default:
            return state     
    }
 
}

export default reducer