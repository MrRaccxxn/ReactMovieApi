
import { LIST_MOVIES_REQUEST, LIST_MOVIES_SUCCESS, LIST_MOVIES_FAILURE,
    SEARCH_MOVIE, DETAIL_MOVIE, LOADING } from '../actions/types/types';

const initial_state = {
    loading : false,
    movies : [],
    text : '',
    movie : []
}

export default function(state = initial_state, action){

    switch (action.type){
        case SEARCH_MOVIE :
            return {
                ...state,
                text : action.payload,
                loading : false
            }
        
        case LIST_MOVIES_REQUEST :
            return{
                ...state,
                loading : true
            }

        case LIST_MOVIES_SUCCESS :
            
            return {
                ...state,
                movies: action.payload.Search,
                loading: false
            }
        
        case LIST_MOVIES_SUCCESS :
        
            return {
                ...state,
                error : action.payload,
                loading: false
            }
        
        case DETAIL_MOVIE :
            return {
                ...state,
                movie: action.payload,
                loading: false
            }

        case LOADING:
            return {
              ...state,
              loading: true
            };
        
        default:
          return state;
    }
}