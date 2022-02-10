import {GETDATA} from './actionType'

const initialState = {
    editorChoice:[],
    latestArticles:[],
    latestReview:[],
    navbar: [{id:'skincare'},{id:'make up'},{id:'body'},{id:'hair'},{id:'fragrance'},{id:'nails'},{id:'tools'},{id:'brands'}]
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case GETDATA:
            const data = action.data
            return {
                ...state,
                editorChoice: [...data["editor's choice"]],
                latestArticles:[...data["latest articles"]],
                latestReview:[...data["latest review"]]
            }
        default:
            return state     
    }
 
}

export default reducer