import React, { useEffect, useReducer, useState } from 'react'
import axios from 'axios'

const initialState = {
        loading: true,
        post:[],
        error: ''
    }

    const reducer = (state, action) => {
        switch(action.type){
            case 'Success':
                return{
                    loading:false,
                    post:action.payload,
                    error: ''
                }

            case 'Error':
                return{
                    loading:false,
                    post:{},
                    error: 'Some went wrong'
                }

            default:
                return state
        }
    }

export default function DataFetching() {
    const [state, dispatch] = useReducer(reducer, initialState)

 useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts/1")
    .then(res => {
        dispatch({type: 'Success', payload: res.data})
    })
    .catch(err => {
        dispatch({type: 'Error'})
    })
 }, [])

  return (
    <div>
        {state.loading ? 'Loading...': state.post.title}
        {state.error ? state.error : null}
    </div>
  )
}
