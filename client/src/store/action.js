import {LOGIN, LOGOUT, FETCHPASSWORD,SHOW,UNSHOW,LOAD,UNLOAD, FETCHDETAIL} from '../store/actionType'


export const show = () => ({type:SHOW})
export const unshow = () => ({type:UNSHOW})
export const login = () => ({type:LOGIN})
export const logout = () => ({type:LOGOUT})
export const load = () => ({type:LOAD})
export const unload = () => ({type: UNLOAD})
export const fetchPassword = (data) =>  ({type:FETCHPASSWORD, data})


// export const deleteOnePass = (id) => dispatch => {
//     dispatch({type:LOAD})
//     pm
//     .doc(id)
//     .delete()
//     .then(function() {
//         dispatch({type:UNLOAD})
//         toast.success('Your Password is deleted')
//     }).catch(function(error) {
//         toast.error(error)
//     });
// }
