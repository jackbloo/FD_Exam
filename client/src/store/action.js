import {GETDATA} from '../store/actionType'

// export const fetchPassword = (data) =>  ({type:FETCHPASSWORD, data})
export const getData = (data) => ({type: GETDATA, data})


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
export const fetchData =  () => async (dispatch) => {
    const response = await fetch('https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp')
    const data = await response.json()
    dispatch(getData(data))

}