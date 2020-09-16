
import { LIST_MOVIES_REQUEST, LIST_MOVIES_SUCCESS, LIST_MOVIES_FAILURE,
         SEARCH_MOVIE,  DETAIL_MOVIE, LOADING
        } from './types/types';
import axios from 'axios';

const APIKey = "d1935e9";

export const search_movie  = title => dispatch => {
    axios.get(`http://www.omdbapi.com/?s=${title}&apikey=${APIKey}`)
    .then(response =>
        dispatch({
            type:SEARCH_MOVIE,
            payload : response.data
        }))
    .catch(error => alert("Se encontro el siguiente error : " + error))
}

//Page list (Have a default initial value in text, because the API doesnt have a default list, and the search text can be
//only "a", because it has a lot of results, and the api cant send that)

export const list_movies = text => dispatch => {

    dispatch(list_movies_request())
    axios.get(`http://www.omdbapi.com/?s=${text}&page=1&type=movie&r=json&apikey=${APIKey}`)
    .then(response=>{
       
        dispatch(list_movies_success(response.data))
    })
    .catch(error => {
        dispatch(list_movies_failure(error.message))
    })
}

const list_movies_request = () => dispatch => {
    dispatch({
        type : LIST_MOVIES_REQUEST
    });
}

const list_movies_success = (movies) => dispatch => {
    dispatch({
        type : LIST_MOVIES_SUCCESS,
        payload : movies
    });
}

const list_movies_failure = (error) => dispatch => {
    dispatch({
        type : LIST_MOVIES_FAILURE,
        payload : error
      });
}




//Detail of the selected movie

export const detail_movie = id => dispatch => {
    
    axios.get(`http://www.omdbapi.com/?i=${id}&apikey=${APIKey}`)
    .then(response =>{
        dispatch({
            type : DETAIL_MOVIE,
            payload : response.data
        })
    })
    .catch(error => alert("Se encontro el siguiente error : " + error))
}

//Loading state

export const loading = () => {
    return {
      type: LOADING
    };
};